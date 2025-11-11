import { sendEventToBackground } from "../eventUtils";
export var EVENT;
(function (EVENT) {
    EVENT["DEVTOOL_OPENED"] = "devtool_opened";
    EVENT["DEVTOOL_TAB_SELECTED"] = "devtool_tab_selected";
    EVENT["RULE_CREATION_WORKFLOW_STARTED"] = "rule_creation_workflow_started";
})(EVENT || (EVENT = {}));
export const sendEvent = (eventName, eventParams = {}) => {
    eventParams["source"] = "devtool";
    sendEventToBackground(eventName, eventParams);
};
