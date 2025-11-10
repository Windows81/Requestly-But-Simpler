import { Typography } from "antd";
import React, { useMemo } from "react";
import { useRecords } from "../../contexts/RecordsContext";
import RuleItem from "../common/RuleItem";
import TabContentSection from "../common/TabContentSection";
const RecentRecords = () => {
    const { rules } = useRecords();
    const recentRules = useMemo(() => Object.values(rules)
        .sort((rule1, rule2) => rule2.modificationDate - rule1.modificationDate)
        .slice(0, 5), [rules]);
    return !recentRules.length ? (React.createElement("div", { className: "empty-pinned-rules-message" },
        React.createElement(Typography.Text, { italic: true, type: "secondary" }, "No recent activity"))) : (React.createElement(TabContentSection, null,
        React.createElement("ul", { className: "record-list" }, recentRules.map((rule) => (React.createElement(RuleItem, { key: rule.id, rule: rule }))))));
};
export default RecentRecords;
