import { tabService } from "../tabService";
export const sendMessageToApp = async (messageObject) => {
    const appTabs = await tabService.getAppTabs();
    return Promise.all(appTabs.map(({ id }) => chrome.tabs.sendMessage(id, messageObject)));
};
