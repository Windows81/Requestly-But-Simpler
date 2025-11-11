import { CaretRightOutlined, DeleteOutlined, EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";
import React, { useCallback } from "react";
import { SourceKey, SourceOperator } from "../../../../../types";
import { RuleEditorUrlFragment } from "../../../../types";
import { createRule, generateRuleName } from "../../../../utils";
import IconButton from "../../../../components/IconButton/IconButton";
import { PropertyRow } from "@requestly-ui/resource-table";
import "./headersTabContent.scss";
var HeaderType;
(function (HeaderType) {
    HeaderType["REQUEST"] = "Request";
    HeaderType["RESPONSE"] = "Response";
})(HeaderType || (HeaderType = {}));
var HeaderModificationType;
(function (HeaderModificationType) {
    HeaderModificationType["ADD"] = "Add";
    HeaderModificationType["MODIFY"] = "Modify";
    HeaderModificationType["REMOVE"] = "Remove";
})(HeaderModificationType || (HeaderModificationType = {}));
const HeaderRow = ({ header, onEdit, onDelete }) => {
    const { name, value } = header;
    return (React.createElement(PropertyRow, { name: name, value: value, actions: React.createElement(React.Fragment, null,
            React.createElement(IconButton, { icon: EditOutlined, className: "header-action-button", onClick: onEdit, tooltip: "Edit header value" }),
            React.createElement(IconButton, { icon: DeleteOutlined, className: "header-action-button", onClick: onDelete, tooltip: "Delete header" })) }));
};
const HeadersTabContent = ({ networkEvent }) => {
    const requestHeaders = networkEvent.request.headers;
    const responseHeaders = networkEvent.response.headers;
    const getRuleSource = useCallback(() => ({
        key: SourceKey.URL,
        operator: SourceOperator.EQUALS,
        value: networkEvent.request.url,
    }), [networkEvent]);
    const editHeader = useCallback((header, headerType) => {
        const ruleSource = getRuleSource();
        createRule(RuleEditorUrlFragment.HEADERS, (rule) => {
            // @ts-ignore
            rule.pairs[0].modifications[headerType] = [
                {
                    type: HeaderModificationType.MODIFY,
                    header: header.name,
                    value: header.value,
                },
            ];
            rule.pairs[0].source = ruleSource;
            rule.name = generateRuleName(`Override ${headerType} header`);
            rule.description = `Override ${headerType.toLowerCase()} header "${header.name}" for ${ruleSource.value}`;
        }, 'input[data-selectionid="header-value"]');
    }, [getRuleSource]);
    const deleteHeader = useCallback((header, headerType) => {
        const ruleSource = getRuleSource();
        createRule(RuleEditorUrlFragment.HEADERS, (rule) => {
            // @ts-ignore
            rule.pairs[0].modifications[headerType] = [
                {
                    type: HeaderModificationType.REMOVE,
                    header: header.name,
                    value: "",
                },
            ];
            rule.pairs[0].source = ruleSource;
            rule.name = generateRuleName(`Delete ${headerType} header`);
            rule.description = `Delete ${headerType.toLowerCase()} header "${header.name}" for ${ruleSource.value}`;
        }, 'input[data-selectionid="header-name"]');
    }, [getRuleSource]);
    const addHeader = useCallback((headerType) => {
        const ruleSource = getRuleSource();
        createRule(RuleEditorUrlFragment.HEADERS, (rule) => {
            // @ts-ignore
            rule.pairs[0].modifications[headerType] = [
                {
                    type: HeaderModificationType.ADD,
                    header: "",
                    value: "",
                },
            ];
            rule.pairs[0].source = ruleSource;
            rule.name = generateRuleName(`Add ${headerType} header`);
            rule.description = `Add new ${headerType.toLowerCase()} header for ${ruleSource.value}`;
        }, 'input[data-selectionid="header-name"]');
    }, [getRuleSource]);
    return (React.createElement(Collapse, { className: "headers-section", bordered: false, expandIcon: ({ isActive }) => React.createElement(CaretRightOutlined, { rotate: isActive ? 90 : 0 }) },
        React.createElement(Collapse.Panel, { header: "Request Headers", key: "request", extra: React.createElement(Button, { icon: React.createElement(PlusCircleOutlined, null), onClick: () => addHeader(HeaderType.REQUEST) }, "Add request header") }, requestHeaders.length > 0 ? (requestHeaders.map((header, index) => (React.createElement(HeaderRow, { key: index, header: header, onEdit: () => editHeader(header, HeaderType.REQUEST), onDelete: () => deleteHeader(header, HeaderType.REQUEST) })))) : (React.createElement(Typography.Text, { type: "secondary", italic: true }, "No request header was sent"))),
        React.createElement(Collapse.Panel, { header: "Response Headers", key: "response", extra: React.createElement(Button, { icon: React.createElement(PlusCircleOutlined, null), onClick: () => addHeader(HeaderType.RESPONSE) }, "Add response header") }, responseHeaders.length > 0 ? (responseHeaders.map((header, index) => (React.createElement(HeaderRow, { key: index, header: header, onEdit: () => editHeader(header, HeaderType.RESPONSE), onDelete: () => deleteHeader(header, HeaderType.RESPONSE) })))) : (React.createElement(Typography.Text, { type: "secondary", italic: true }, "No response header was received")))));
};
export default HeadersTabContent;
