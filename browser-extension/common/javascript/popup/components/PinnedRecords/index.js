import React from "react";
import RuleItem from "../common/RuleItem";
import GroupItem from "../common/GroupItem";
import TabContentSection from "../common/TabContentSection";
import { useRecords } from "../../contexts/RecordsContext";
import { EmptyPopupTab } from "../PopupTabs/EmptyPopupTab";
import { PrimaryActionButton } from "../common/PrimaryActionButton";
import { PopupTabKey } from "../PopupTabs";
import "./pinnedRecords.css";
const PinnedRecords = ({ setActiveTabKey }) => {
    const { pinnedRules, pinnedGroups } = useRecords();
    return !pinnedGroups.length && !pinnedRules.length ? (React.createElement(EmptyPopupTab, { title: "You haven't pinned any rules yet!", description: " Feel free to pin your recently used rules for quick access.", actionButton: React.createElement(PrimaryActionButton, { size: "small", onClick: () => setActiveTabKey(PopupTabKey.RECENTLY_USED) }, "See recently used rules") })) : (React.createElement(TabContentSection, null,
        React.createElement("ul", { className: "record-list" },
            pinnedGroups.map((group) => (React.createElement(GroupItem, { key: group.id, group: group }))),
            pinnedRules.map((rule) => (React.createElement(RuleItem, { key: rule.id, rule: rule, isParentPinnedRecords: true }))))));
};
export default PinnedRecords;
