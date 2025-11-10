import { CLIENT_MESSAGES, EXTENSION_MESSAGES, STORAGE_KEYS } from "common/constants";
import { TAB_SERVICE_DATA, tabService } from "./tabService";
import { getRecord, saveRecord } from "common/storage";
import { generateUUID } from "common/utils";
import config from "common/config";
const saveTestReport = async (ruleId, url, appliedStatus) => {
    const testReports = (await getRecord(STORAGE_KEYS.TEST_REPORTS)) ?? {};
    const ruleTestReports = Object.values(testReports)
        .filter((testReport) => testReport.ruleId === ruleId)
        .sort((a, b) => (a.timestamp < b.timestamp ? 1 : a.timestamp > b.timestamp ? -1 : 0));
    if (ruleTestReports.length > 2) {
        delete testReports[ruleTestReports[2].id];
    }
    const newTestReportId = generateUUID();
    testReports[newTestReportId] = {
        timestamp: Date.now(),
        ruleId,
        appliedStatus,
        url,
        id: newTestReportId,
    };
    await saveRecord(STORAGE_KEYS.TEST_REPORTS, testReports);
    return newTestReportId;
};
export const saveTestRuleResult = (payload, senderTab) => {
    const testRuleData = tabService.getData(senderTab.id, TAB_SERVICE_DATA.TEST_RULE_DATA);
    const testRuleUrl = testRuleData.url ?? senderTab.url;
    saveTestReport(payload.ruleId, testRuleUrl, payload.appliedStatus).then((test_id) => {
        const isParentTabFocussed = tabService.focusTab(senderTab.openerTabId);
        if (!isParentTabFocussed) {
            // create new tab with URL if opener tab does not exist
            chrome.tabs.create({
                url: `${config.WEB_URL}/rules/editor/edit/${payload.ruleId}`,
            }, (tab) => {
                tabService.ensureTabLoadingComplete(tab.id).then(() => {
                    chrome.tabs.sendMessage(tab.id, {
                        action: EXTENSION_MESSAGES.NOTIFY_TEST_RULE_REPORT_UPDATED,
                        testReportId: test_id,
                        testPageTabId: senderTab.id,
                        record: testRuleData.record,
                        appliedStatus: payload.appliedStatus,
                    });
                });
            });
        }
        else {
            chrome.tabs.sendMessage(senderTab.openerTabId, {
                action: EXTENSION_MESSAGES.NOTIFY_TEST_RULE_REPORT_UPDATED,
                testReportId: test_id,
                testPageTabId: senderTab.id,
                record: testRuleData.record,
                appliedStatus: payload.appliedStatus,
            });
        }
    });
};
export const launchUrlAndStartRuleTesting = (payload, openerTabId) => {
    tabService.createNewTab(payload.url, openerTabId, (tab) => {
        tabService.setData(tab.id, TAB_SERVICE_DATA.TEST_RULE_DATA, {
            url: payload.url,
            ruleId: payload.ruleId,
            record: payload.record,
        });
    });
};
export const handleTestRuleOnClientPageLoad = (tab) => {
    const testRuleData = tabService.getData(tab.id, TAB_SERVICE_DATA.TEST_RULE_DATA);
    if (testRuleData) {
        chrome.tabs.sendMessage(tab.id, {
            action: CLIENT_MESSAGES.START_EXPLICIT_RULE_TESTING,
            ruleId: testRuleData.ruleId,
            record: testRuleData.record,
        });
    }
    else {
        chrome.tabs.sendMessage(tab.id, {
            action: CLIENT_MESSAGES.START_IMPLICIT_RULE_TESTING,
        });
    }
};
