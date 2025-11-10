import { EXTENSION_MESSAGES } from "common/constants";
import { getAllSupportedWebURLs } from "../../utils";
export var DataScope;
(function (DataScope) {
    DataScope["TAB"] = "tabData";
    DataScope["PAGE"] = "pageData";
})(DataScope || (DataScope = {}));
class TabService {
    map = {};
    constructor() {
        this.initTabs();
        this.addEventListeners();
    }
    initTabs() {
        chrome.tabs.query({}, (tabs) => {
            this.map = {};
            tabs.forEach((tab) => this.addOrUpdateTab(tab));
        });
    }
    addEventListeners() {
        chrome.tabs.onCreated.addListener((tab) => this.addOrUpdateTab(tab));
        chrome.tabs.onRemoved.addListener((tabId) => this.removeTab(tabId));
        chrome.tabs.onReplaced.addListener((addedTabId, removedTabId) => {
            this.removeTab(removedTabId);
            chrome.tabs.get(addedTabId, (tab) => this.addOrUpdateTab(tab));
        });
        chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
            const existingTab = this.getTab(tabId);
            if (!existingTab) {
                this.addOrUpdateTab(tab);
                return;
            }
            const newTabState = {
                ...tab,
                [DataScope.TAB]: existingTab[DataScope.TAB] || {},
                [DataScope.PAGE]: existingTab[DataScope.PAGE] || {},
            };
            this.addOrUpdateTab(newTabState);
        });
        // Why?
        chrome.webRequest.onBeforeRequest.addListener((details) => {
            if (details.type === "main_frame") {
                const tab = this.getTab(details.tabId) || { id: details.tabId };
                this.addOrUpdateTab({ ...tab, url: details.url });
            }
        }, { urls: ["<all_urls>"] });
        chrome.webNavigation.onCommitted.addListener((navigatedTabData) => {
            if (navigatedTabData.frameId === 0) {
                this.resetPageData(navigatedTabData.tabId);
            }
        });
        chrome.webNavigation.onDOMContentLoaded.addListener((navigatedTabData) => {
            if (navigatedTabData.frameId === 0) {
                const tab = this.getTab(navigatedTabData.tabId);
                if (tab) {
                    this.sendMessage(navigatedTabData.tabId, { action: EXTENSION_MESSAGES.CLIENT_PAGE_LOADED });
                }
            }
        });
    }
    sendMessage(tabId, ...args) {
        chrome.tabs.sendMessage(tabId, ...args);
    }
    async getAppTabs() {
        const webURLs = getAllSupportedWebURLs();
        let appTabs = [];
        for (const webURL of webURLs) {
            const tabs = await chrome.tabs.query({ url: webURL + "/*" });
            appTabs = [...appTabs, ...tabs];
        }
        return appTabs;
    }
    addOrUpdateTab(tab) {
        // A special ID value given to tabs that are not browser tabs (for example, apps and devtools windows)
        if (tab.id !== chrome.tabs.TAB_ID_NONE) {
            this.map[tab.id] = { ...this.map[tab.id], ...tab };
        }
    }
    createNewTab(url, openerTabId, callback) {
        chrome.tabs.create({ url, openerTabId }, (tab) => {
            callback(tab);
        });
    }
    removeTab(tabId) {
        const sessionRulesMap = this.getData(tabId, TAB_SERVICE_DATA.SESSION_RULES_MAP);
        let ruleIdsToDelete = [];
        if (sessionRulesMap) {
            for (const sessionRuleType of Object.values(sessionRulesMap)) {
                ruleIdsToDelete.push(...Object.values(sessionRuleType));
            }
            chrome.declarativeNetRequest.updateSessionRules({ removeRuleIds: ruleIdsToDelete });
        }
        delete this.map[tabId];
    }
    getTabs() {
        return this.map;
    }
    getTab(tabId) {
        return this.getTabs()[tabId];
    }
    getTabUrl(tabId) {
        var tab = this.getTab(tabId);
        return tab && tab.url;
    }
    focusTab(tabId) {
        var tab = this.getTab(tabId);
        if (tab && tab.windowId) {
            try {
                chrome.windows.update(tab.windowId, { focused: true }, () => {
                    chrome.tabs.highlight({ windowId: tab.windowId, tabs: tab.index });
                });
                return true;
            }
            catch (e) {
                return false;
            }
        }
        return false;
    }
    closeTab(tabId) {
        chrome.tabs.remove(tabId);
    }
    ensureTabLoadingComplete(tabId) {
        return new Promise(async (resolve, reject) => {
            const tab = await chrome.tabs.get(tabId);
            if (tab) {
                if (tab.status === "complete") {
                    resolve();
                }
                else {
                    const handler = (currentTabId, tabChangeInfo) => {
                        if (currentTabId === tabId && tabChangeInfo.status === "complete") {
                            chrome.tabs.onUpdated.removeListener(handler);
                            resolve();
                        }
                    };
                    chrome.tabs.onUpdated.addListener(handler);
                }
            }
            else {
                reject();
            }
        });
    }
    setDataForScope(scope, tabId, key, value) {
        const tab = this.getTab(tabId);
        if (!tab) {
            this.addOrUpdateTab({ id: tabId, [DataScope.TAB]: { [key]: value } });
            return;
        }
        // null safe for firefox as in firefox get/set happen before tab updation whereas
        // in chrome get/set happens after tab updation
        if (tab[scope]) {
            tab[scope][key] = value;
        }
        else {
            tab[scope] = { [key]: value };
        }
    }
    getDataForScope(scope, tabId, key, defaultValue) {
        const tab = this.getTab(tabId);
        if (!tab) {
            return;
        }
        return tab[scope]?.[key] || defaultValue;
    }
    removeDataForScope(scope, tabId, key) {
        const tab = this.getTab(tabId);
        if (!tab || !tab[scope]) {
            return;
        }
        delete tab[scope][key];
    }
    setData(tabId, key, value) {
        this.setDataForScope(DataScope.TAB, tabId, key, value);
    }
    getData(tabId, key, defaultValue) {
        return this.getDataForScope(DataScope.TAB, tabId, key, defaultValue);
    }
    removeData(tabId, key) {
        this.removeDataForScope(DataScope.TAB, tabId, key);
    }
    setPageData(tabId, key, value) {
        this.setDataForScope(DataScope.PAGE, tabId, key, value);
    }
    getPageData(tabId, key, defaultValue) {
        return this.getDataForScope(DataScope.PAGE, tabId, key, defaultValue);
    }
    removePageData(tabId, key) {
        this.removeDataForScope(DataScope.PAGE, tabId, key);
    }
    resetPageData(tabId) {
        const tab = this.getTab(tabId);
        if (tab?.[DataScope.PAGE]) {
            tab[DataScope.PAGE] = {};
        }
    }
}
export const tabService = new TabService();
// TODO: Add this only when debug enabled
// @ts-ignore
self.tabService = tabService;
export const TAB_SERVICE_DATA = {
    SESSION_RECORDING: "sessionRecording",
    SESSION_RULES_MAP: "sessionRulesMap",
    TEST_RULE_DATA: "testRuleData",
    APPLIED_RULE_DETAILS: "appliedRuleDetails",
    RULES_EXECUTION_LOGS: "rulesExecutionLogs",
    SHARED_STATE: "sharedState",
};
