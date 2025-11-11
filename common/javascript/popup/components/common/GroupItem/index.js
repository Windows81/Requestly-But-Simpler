import React, { useCallback, useState } from "react";
import { Col, Row, Switch, Tooltip } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import RuleItem from "../RuleItem";
import PinAction from "../PinAction";
import { Status } from "../../../../types";
import { useRecords } from "../../../contexts/RecordsContext";
import GroupIcon from "../../../../../resources/icons/groupIcon.svg";
import RecordName from "../RecordName";
import "./groupItem.css";
import { EVENT, sendEvent } from "../../../events";
const GroupItem = ({ group }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { updateGroup } = useRecords();
    const isGroupActive = group.status === Status.ACTIVE;
    const handleToggleStatus = useCallback(() => {
        updateGroup({
            ...group,
            status: isGroupActive ? Status.INACTIVE : Status.ACTIVE,
        });
        sendEvent(EVENT.GROUP_TOGGLED, {
            status: isGroupActive ? Status.INACTIVE : Status.ACTIVE,
        });
    }, [group, isGroupActive, updateGroup]);
    return (React.createElement("li", null,
        React.createElement(Row, { align: "middle", className: "record-item", wrap: false },
            React.createElement(Col, { span: 19, className: "record-name-container", onClick: () => setIsExpanded((prev) => !prev) },
                React.createElement(Row, { wrap: false, align: "middle" },
                    React.createElement(Col, null,
                        React.createElement(CaretRightOutlined, { rotate: isExpanded ? 90 : 0, className: `group-expand-icon ${isExpanded ? "group-expanded" : ""}` })),
                    React.createElement(Col, null,
                        React.createElement(Row, { wrap: false, align: "middle" },
                            React.createElement(Tooltip, { title: "Group", color: "var(--neutrals-black)" },
                                React.createElement("span", { className: `group-icon-wrapper ${isExpanded ? "group-expanded" : ""}` },
                                    React.createElement(GroupIcon, null))),
                            React.createElement(RecordName, { name: group.name },
                                React.createElement("span", { className: "record-name" }, group.name)))))),
            React.createElement(Col, { span: 2, className: "icon-container" },
                React.createElement(Row, { align: "middle" },
                    React.createElement(PinAction, { record: group, updateRecord: updateGroup }))),
            React.createElement(Col, { span: 3 },
                React.createElement(Switch, { checkedChildren: "ON", unCheckedChildren: "OFF", onChange: handleToggleStatus, checked: isGroupActive }))),
        isExpanded && (React.createElement(Row, { className: "group-rules" },
            React.createElement(Col, { span: 24 }, group.children.length > 0 ? (group.children.map((rule) => React.createElement(RuleItem, { key: rule.id, rule: rule, isChildren: true }))) : (React.createElement("div", { className: "text-gray empty-group-message" }, "No rules present in this group!")))))));
};
export default React.memo(GroupItem);
