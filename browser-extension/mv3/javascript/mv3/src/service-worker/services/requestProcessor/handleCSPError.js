import { SessionRuleType } from "./types";
import { updateRequestSpecificRules } from "../rulesManager";
export const handleCSPError = async (tabId, requestDetails) => {
    await updateRequestSpecificRules(tabId, requestDetails.initiator, {
        action: {
            type: "modifyHeaders",
            responseHeaders: [
                {
                    header: "Content-Security-Policy",
                    operation: "remove",
                },
            ],
        },
        condition: {
            urlFilter: requestDetails.initiator,
            resourceTypes: [
                "sub_frame",
                "main_frame",
            ],
            tabIds: [tabId],
            excludedInitiatorDomains: ["requestly.io", "requestly.com"],
        },
    }, SessionRuleType.CSP_ERROR);
};
