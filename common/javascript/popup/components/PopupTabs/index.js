import React, { useEffect, useMemo, useState } from "react";
import { Badge, Col, Dropdown, Menu, Row, Tabs, Typography } from "antd";
import ExecutedRules from "../ExecutedRules";
import PinnedRecords from "../PinnedRecords";
import RecentRecords from "../RecentRecords";
import { PrimaryActionButton } from "../common/PrimaryActionButton";
import ExternalLinkIcon from "../../../../resources/icons/externalLink.svg";
import ArrowIcon from "../../../../resources/icons/arrowDown.svg";
import { PushpinOutlined, CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { icons } from "../../ruleTypeIcons";
import { RuleType } from "../../../types";
import { EVENT, sendEvent } from "../../events";
import config from "../../../config";
import "./popupTabs.css";
import { EXTENSION_MESSAGES } from "../../../constants";
export var PopupTabKey;
(function (PopupTabKey) {
    PopupTabKey["PINNED_RULES"] = "pinned_rules";
    PopupTabKey["RECENTLY_USED"] = "recently_used";
    PopupTabKey["EXECUTED_RULES"] = "executed_rules";
})(PopupTabKey || (PopupTabKey = {}));
const PopupTabs = () => {
    const [isRuleDropdownOpen, setIsRuleDropdownOpen] = useState(false);
    const [executedRules, setExecutedRules] = useState([]);
    const [activeTabKey, setActiveTabKey] = useState(PopupTabKey.PINNED_RULES);
    useEffect(() => {
        chrome.tabs.query({ currentWindow: true, active: true }, ([activeTab]) => {
            chrome.runtime.sendMessage({
                tabId: activeTab.id,
                action: EXTENSION_MESSAGES.GET_EXECUTED_RULES,
            }, (rules) => {
                if (rules.length) {
                    setActiveTabKey(PopupTabKey.EXECUTED_RULES);
                    setExecutedRules(rules);
                }
            });
        });
    }, []);
    const tabItems = useMemo(() => {
        return [
            {
                key: PopupTabKey.PINNED_RULES,
                label: (React.createElement("span", null,
                    React.createElement(PushpinOutlined, { rotate: -45 }),
                    "Pinned rules")),
                children: React.createElement(PinnedRecords, { setActiveTabKey: setActiveTabKey }),
            },
            {
                key: PopupTabKey.RECENTLY_USED,
                label: (React.createElement("span", null,
                    React.createElement(ClockCircleOutlined, null),
                    "Recently used")),
                children: React.createElement(RecentRecords, null),
            },
            {
                key: PopupTabKey.EXECUTED_RULES,
                label: (React.createElement("span", null,
                    React.createElement(CheckCircleOutlined, null),
                    "Executed rules",
                    React.createElement(Badge, { size: "small", count: executedRules.length, overflowCount: 20, className: "popup-tab-badge" }))),
                children: React.createElement(ExecutedRules, { executedRules: executedRules, setExecutedRules: setExecutedRules }),
            },
        ];
    }, [executedRules]);
    const handleRulesDropdownItemClick = (url, ruleType) => {
        if (ruleType) {
            sendEvent(EVENT.RULE_CREATION_WORKFLOW_STARTED, { rule_type: ruleType });
        }
        setIsRuleDropdownOpen(false);
        window.open(url, "_blank");
    };
    const ruleDropdownItemsMap = useMemo(() => [
        {
            key: "modify_response",
            children: (React.createElement(React.Fragment, null,
                icons.Response,
                React.createElement("span", null, "Modify API Response"))),
            clickHandler: () => handleRulesDropdownItemClick(`${config.WEB_URL}/rules/editor/create/Response?source=popup`, RuleType.RESPONSE),
        },
        {
            key: "modify_headers",
            children: (React.createElement(React.Fragment, null,
                icons.Headers,
                React.createElement("span", null, "Modify Headers"))),
            clickHandler: () => handleRulesDropdownItemClick(`${config.WEB_URL}/rules/editor/create/Headers?source=popup`, RuleType.HEADERS),
        },
        {
            key: "redirect_request",
            children: (React.createElement(React.Fragment, null,
                icons.Redirect,
                React.createElement("span", null, "Redirect Request"))),
            clickHandler: () => handleRulesDropdownItemClick(`${config.WEB_URL}/rules/editor/create/Redirect?source=popup`, RuleType.REDIRECT),
        },
        {
            key: "replace_string",
            children: (React.createElement(React.Fragment, null,
                icons.Replace,
                React.createElement("span", null, "Replace String"))),
            clickHandler: () => handleRulesDropdownItemClick(`${config.WEB_URL}/rules/editor/create/Replace?source=popup`, RuleType.REPLACE),
        },
        { key: "divider" },
        {
            key: "other",
            children: (React.createElement(Row, { align: "middle", gutter: 8, className: "more-rules-link-option" },
                React.createElement(Col, null, "View more options"),
                React.createElement(ExternalLinkIcon, { style: { color: "var(--white)" } }))),
            clickHandler: () => {
                sendEvent(EVENT.EXTENSION_VIEW_ALL_MODIFICATIONS_CLICKED);
                handleRulesDropdownItemClick(`${config.WEB_URL}/rules/create?source=popup`);
            },
        },
    ], []);
    const ruleDropdownMenu = (React.createElement(Menu, null, ruleDropdownItemsMap.map((item) => item.key === "divider" ? (React.createElement(Menu.Divider, null)) : (React.createElement(Menu.Item, { key: item.key, onClick: item.clickHandler }, item.children)))));
    return (React.createElement(Col, { className: "popup-tabs-wrapper popup-body-card" },
        React.createElement(Row, { justify: "space-between", align: "middle", className: "tabs-header" },
            React.createElement(Typography.Text, { strong: true }, "HTTP rules"),
            React.createElement(Dropdown, { overlay: ruleDropdownMenu, trigger: ["click"], onOpenChange: (open) => setIsRuleDropdownOpen(open), overlayClassName: "rule-type-dropdown" },
                React.createElement(PrimaryActionButton, { size: "small", className: "new-rule-dropdown-btn", onClick: () => sendEvent(EVENT.NEW_RULE_BUTTON_CLICKED) },
                    "New rule",
                    " ",
                    React.createElement(ArrowIcon, { className: `new-rule-dropdown-btn-arrow ${isRuleDropdownOpen ? "new-rule-dropdown-btn-arrow-up" : ""}` })))),
        React.createElement(Tabs, { size: "middle", items: tabItems, activeKey: activeTabKey, className: "popup-tabs", onChange: (key) => {
                setActiveTabKey(key);
                sendEvent(EVENT.POPUP_TAB_SELECTED, { tab: key });
            } })));
};
export default PopupTabs;
