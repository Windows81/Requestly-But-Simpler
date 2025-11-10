import React, { useCallback } from "react";
import { Col, Popconfirm, Row, Switch, Tooltip } from "antd";
import PinAction from "../PinAction";
import { Status } from "../../../../types";
import config from "../../../../config";
import { RULE_TITLES } from "../../../../constants";
import { useRecords } from "../../../contexts/RecordsContext";
import { icons } from "../../../ruleTypeIcons";
import RecordName from "../RecordName";
import "./ruleItem.css";
import { EVENT, sendEvent } from "../../../events";
const RuleItem = ({ rule, isChildren = false, isParentPinnedRecords = false, onRuleUpdated, }) => {
    const { groups, updateRule, updateGroup } = useRecords();
    const group = groups[rule.groupId];
    const isGroupInactive = group?.status === Status.INACTIVE;
    const isRuleActive = rule.status === Status.ACTIVE;
    const handleUpdateRule = useCallback((rule) => {
        updateRule(rule, isParentPinnedRecords);
        onRuleUpdated?.(rule);
    }, [updateRule, onRuleUpdated]);
    const handleToggleStatus = useCallback(() => {
        const updatedRule = {
            ...rule,
            status: isRuleActive ? Status.INACTIVE : Status.ACTIVE,
        };
        handleUpdateRule(updatedRule);
        sendEvent(EVENT.RULE_TOGGLED, {
            type: rule.ruleType,
            status: isRuleActive ? Status.INACTIVE : Status.ACTIVE,
        });
    }, [rule, isRuleActive, handleUpdateRule]);
    const handleGroupActiveClick = useCallback(() => {
        updateGroup({ ...group, status: Status.ACTIVE });
        sendEvent(EVENT.GROUP_TOGGLED, { status: Status.ACTIVE });
    }, [group, updateGroup]);
    return (React.createElement("li", null,
        React.createElement(Row, { align: "middle", className: `record-item ${isChildren ? "child-record" : ""}`, wrap: false },
            React.createElement(Col, { span: isChildren ? 21 : 19, className: "record-name-container link", onClick: () => {
                    sendEvent(EVENT.EXTENSION_RULE_CLICKED, { rule_type: rule.ruleType });
                    window.open(`${config.WEB_URL}/rules/editor/edit/${rule.id}`, "_blank");
                } },
                React.createElement(Row, { wrap: false, align: "middle", className: "rule-name-container" },
                    React.createElement(Tooltip, { placement: "topRight", title: RULE_TITLES[rule.ruleType.toUpperCase()], color: "var(--neutrals-black)" },
                        React.createElement("span", { className: "icon-wrapper rule-type-icons" }, icons[rule.ruleType])),
                    React.createElement(RecordName, { name: rule.name },
                        React.createElement("span", { className: "rule-name" }, rule.name)))),
            !isChildren && (React.createElement(Col, { span: 2, className: "icon-container" },
                React.createElement(Row, { align: "middle" },
                    React.createElement(PinAction, { record: rule, updateRecord: handleUpdateRule })))),
            React.createElement(Col, { span: 3, className: "record-switch-container" },
                React.createElement(Popconfirm, { trigger: "hover", placement: "topRight", color: "#000000", disabled: !isGroupInactive, title: React.createElement("span", null,
                        "Please enable ",
                        React.createElement("b", null, group?.name),
                        " group to make the rule work."), okText: "Enable", cancelText: "Cancel", cancelButtonProps: { ghost: true, type: "text" }, onConfirm: handleGroupActiveClick },
                    React.createElement(Switch, { checkedChildren: "ON", unCheckedChildren: "OFF", className: "record-switch", checked: isRuleActive, disabled: isGroupInactive, onChange: handleToggleStatus }))))));
};
export default React.memo(RuleItem);
