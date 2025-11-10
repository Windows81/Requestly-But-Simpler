import { ResourceType, RuleType } from "common/types";
import { isBlacklistedURL, isUrlInBlockList } from "../../utils";
import { matchRuleWithRequest } from "../../common/ruleMatcher";
import { injectScript } from "./utils";
import ruleExecutionHandler from "./ruleExecutionHandler";
import rulesStorageService from "../../rulesStorageService";
export const applyScriptRules = async (tabId, frameId, url, pageUrl) => {
    if (isBlacklistedURL(url)) {
        return;
    }
    if ((await isUrlInBlockList(pageUrl)) || (await isUrlInBlockList(url))) {
        return;
    }
    const scriptRules = await rulesStorageService.getEnabledRules(RuleType.SCRIPT);
    const scripts = [];
    const appliedScriptRules = [];
    scriptRules.forEach((rule) => {
        const isRuleApplied = matchRuleWithRequest(rule, {
            url,
            type: frameId === 0 ? ResourceType.MainDocument : ResourceType.IFrameDocument,
            method: "GET",
            initiator: pageUrl,
        }).isApplied;
        if (isRuleApplied) {
            appliedScriptRules.push(rule);
            rule.pairs.forEach((pair) => {
                pair.scripts.forEach((script) => {
                    scripts.push(script);
                });
            });
        }
    });
    for (let script of scripts) {
        await injectScript(script, { tabId, frameIds: [frameId] });
    }
    if (appliedScriptRules.length > 0) {
        // FIXME: Performance can be improved
        appliedScriptRules.forEach((rule) => {
            ruleExecutionHandler.onRuleExecuted(rule, {
                url: url,
                tabId: tabId,
                method: "GET",
                type: frameId === 0 ? ResourceType.MainDocument : ResourceType.IFrameDocument,
            }, true);
        });
    }
};
