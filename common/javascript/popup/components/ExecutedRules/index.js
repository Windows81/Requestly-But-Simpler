import React, { useCallback } from "react";
import { LINKS } from "../../../constants";
import RuleItem from "../common/RuleItem";
import { updateItemInCollection } from "../../utils";
import TabContentSection from "../common/TabContentSection";
import { PrimaryActionButton } from "../common/PrimaryActionButton";
import { EmptyPopupTab } from "../PopupTabs/EmptyPopupTab";
const ExecutedRules = ({ executedRules, setExecutedRules }) => {
    const updateExecutedRule = useCallback((updatedRule) => {
        setExecutedRules((executedRules) => updateItemInCollection(executedRules, updatedRule));
    }, []);
    return executedRules.length > 0 ? (React.createElement(TabContentSection, { heading: "Rules executed in this tab:" },
        React.createElement("ul", { className: "record-list" }, executedRules.map((rule) => (React.createElement(RuleItem, { rule: rule, key: rule.id, onRuleUpdated: updateExecutedRule })))))) : (React.createElement(EmptyPopupTab, { title: "No rules executed for this tab!", description: React.createElement(React.Fragment, null,
            "Your executed rules will appear here.",
            React.createElement("br", null),
            " If you encounter any issues, check our troubleshooting guide."), actionButton: React.createElement(PrimaryActionButton, { size: "small", onClick: () => window.open(LINKS.REQUESTLY_EXTENSION_TROUBLESHOOTING, "_blank") }, "Read troubleshooting guide") }));
};
export default ExecutedRules;
