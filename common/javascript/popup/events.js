import { sendEventToBackground } from "../eventUtils";
export var EVENT;
(function (EVENT) {
    EVENT["EXTENSION_STATUS_TOGGLED"] = "extension_status_toggled";
    EVENT["GROUP_TOGGLED"] = "group_toggled";
    EVENT["OPEN_APP_CLICKED"] = "open_app_clicked";
    EVENT["POPUP_OPENED"] = "popup_opened";
    EVENT["POPUP_TAB_SELECTED"] = "popup_tab_selected";
    EVENT["RULE_TOGGLED"] = "rule_toggled";
    EVENT["NEW_RULE_BUTTON_CLICKED"] = "new_rule_button_clicked";
    EVENT["RULE_CREATION_WORKFLOW_STARTED"] = "rule_creation_workflow_started";
    EVENT["START_RECORDING_CLICKED"] = "start_recording_clicked";
    EVENT["STOP_RECORDING_CLICKED"] = "stop_recording_clicked";
    EVENT["VIEW_RECORDING_CLICKED"] = "view_recording_clicked";
    EVENT["EXTENSION_RULE_CLICKED"] = "extension_rule_clicked";
    EVENT["EXTENSION_VIEW_ALL_MODIFICATIONS_CLICKED"] = "extension_view_all_modifications_clicked";
    EVENT["SESSION_RECORDINGS_CONFIG_OPENED"] = "session_recordings_config_opened";
})(EVENT || (EVENT = {}));
export const sendEvent = (eventName, eventParams = {}) => {
    eventParams["source"] = "popup";
    sendEventToBackground(eventName, eventParams);
};
