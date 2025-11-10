import { CLIENT_MESSAGES } from "./constants";
export const sendEventToBackground = (eventName, eventParams = {}) => {
    const eventTs = Date.now();
    eventParams["log_source"] = "extension";
    chrome.runtime.sendMessage({
        action: CLIENT_MESSAGES.ADD_EVENT,
        payload: {
            eventName,
            eventParams,
            eventTs,
        },
    });
};
