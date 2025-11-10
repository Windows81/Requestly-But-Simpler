import { CLIENT_MESSAGES, EXTENSION_MESSAGES } from "common/constants";
import { handleAppliedRuleNotification } from "./testRuleHandler";
class RuleExecutionHandler {
    constructor() {
        this.initListeners();
    }
    initListeners = () => {
        chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
            switch (message.action) {
                case CLIENT_MESSAGES.NOTIFY_RULE_EXECUTED:
                    this.onRuleExecuted(message.rule, message.requestDetails);
                    break;
            }
        });
    };
    getExecutedRules = async () => {
        return chrome.runtime.sendMessage({
            action: EXTENSION_MESSAGES.GET_EXECUTED_RULES,
        });
    };
    onRuleExecuted = (rule, requestDetails) => {
        handleAppliedRuleNotification(rule);
    };
}
const ruleExecutionHandler = new RuleExecutionHandler();
export default ruleExecutionHandler;
