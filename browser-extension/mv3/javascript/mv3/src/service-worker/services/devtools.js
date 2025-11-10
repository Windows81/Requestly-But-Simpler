const portConnections = new Map();
export const initDevtoolsListener = () => {
    chrome.runtime.onConnect.addListener(function (port) {
        if (port.name !== "rq_devtools") {
            return;
        }
        port.onMessage.addListener(function (msg) {
            switch (msg.action) {
                case "registerDevTool": {
                    portConnections.set(msg.tabId, port);
                    break;
                }
                case "heartbeat":
                    return;
            }
        });
        port.onDisconnect.addListener(function (port) {
            portConnections.forEach((value, key) => {
                if (value === port) {
                    portConnections.delete(key);
                }
            });
        });
    });
};
export const sendLogToDevtools = (rule, requestDetails) => {
    sendMessageToDevtools(requestDetails.tabId, {
        rule,
        timestamp: requestDetails.timeStamp || Date.now(),
        requestURL: requestDetails.url,
        requestType: requestDetails.type,
        requestMethod: requestDetails.method,
    });
};
const sendMessageToDevtools = (tabId, message) => {
    const port = portConnections.get(tabId);
    if (port) {
        port.postMessage(message);
    }
};
