import { findMatchingRule } from "../../../common/ruleMatcher";
import { updateRequestSpecificRules } from "../rulesManager";
import { SessionRuleType } from "./types";
const INITIATOR_DOMAIN_FUNCTION = "rq_request_initiator_origin()";
export const handleInitiatorDomainFunction = async (tabId, requestDetails, rules) => {
    const { isApplied, matchedPair } = findMatchingRule(rules, requestDetails) ?? {};
    if (!isApplied) {
        return;
    }
    const headerKeyValueMap = {
        Request: {},
        Response: {},
    };
    if (matchedPair.modifications?.Request?.length) {
        matchedPair.modifications.Request.forEach((header) => {
            if (header.value === INITIATOR_DOMAIN_FUNCTION) {
                headerKeyValueMap.Request[header.header] = requestDetails.initiator;
            }
        });
    }
    if (matchedPair.modifications?.Response?.length) {
        matchedPair.modifications.Response.forEach((header) => {
            if (header.value === INITIATOR_DOMAIN_FUNCTION) {
                headerKeyValueMap.Response[header.header] = requestDetails.initiator;
            }
        });
    }
    const ruleAction = {};
    if (Object.keys(headerKeyValueMap.Request).length) {
        ruleAction.requestHeaders = Object.entries(headerKeyValueMap.Request).map(([header, value]) => ({
            header,
            value,
            operation: "set",
        }));
    }
    if (Object.keys(headerKeyValueMap.Response).length) {
        ruleAction.responseHeaders = Object.entries(headerKeyValueMap.Response).map(([header, value]) => ({
            header,
            value,
            operation: "set",
        }));
    }
    if (!Object.keys(ruleAction).length) {
        return;
    }
    await updateRequestSpecificRules(tabId, requestDetails.url, {
        action: {
            ...ruleAction,
            type: "modifyHeaders",
        },
        condition: {
            urlFilter: `|${requestDetails.url}|`,
            resourceTypes: ["xmlhttprequest"],
            tabIds: [tabId],
            requestMethods: matchedPair?.source?.filters?.[0]?.requestMethod?.map((method) => method.toLowerCase()) ?? undefined,
            excludedInitiatorDomains: ["requestly.io", "requestly.com"],
        },
    }, SessionRuleType.INITIATOR_DOMAIN);
};
