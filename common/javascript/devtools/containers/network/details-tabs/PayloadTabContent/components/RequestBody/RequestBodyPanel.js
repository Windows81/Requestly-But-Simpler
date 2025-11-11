import React, { useCallback, useEffect, useState } from "react";
import { RuleEditorUrlFragment } from "../../../../../../types";
import { Button, Collapse, Space, Tooltip } from "antd";
import { CaretRightOutlined, EditOutlined } from "@ant-design/icons";
import RequestBody from "./RequestBody";
import { createRule, generateRuleName, getBaseUrl, isContentBodyEditable, isRequestBodyParseable, } from "../../../../../../utils";
import { SourceKey, SourceOperator } from "../../../../../../../types";
const RequestBodyPanel = ({ networkEvent }) => {
    const [isParsed, setIsParsed] = useState(false);
    useEffect(() => {
        setIsParsed(false);
    }, [networkEvent]);
    const editRequestBody = useCallback(() => {
        createRule(RuleEditorUrlFragment.REQUEST, (rule) => {
            const baseUrl = getBaseUrl(networkEvent.request.url);
            rule.pairs[0].source = {
                key: SourceKey.URL,
                operator: SourceOperator.CONTAINS,
                value: baseUrl,
            };
            // @ts-ignore
            rule.pairs[0].request = {
                type: "static",
                value: networkEvent.request?.postData?.text || "",
            };
            rule.name = generateRuleName("Modify Request Body");
            rule.description = `Modify Request Body of ${baseUrl}`;
        }, "");
    }, [networkEvent]);
    const renderHeader = useCallback(() => {
        if (isRequestBodyParseable(networkEvent.request.postData?.mimeType)) {
            return (React.createElement(Space, null,
                React.createElement("span", { className: "collapse-header-text" }, "Request Body"),
                React.createElement(Button, { type: "text", onClick: (e) => {
                        setIsParsed(!isParsed);
                        e.stopPropagation();
                    } }, isParsed ? "view source" : "view parsed")));
        }
        return (React.createElement(Space, null,
            React.createElement("span", { className: "collapse-header-text" }, "Request Body")));
    }, [networkEvent, isParsed]);
    const renderEditRequestBodyButton = useCallback(() => {
        if (isContentBodyEditable(networkEvent._resourceType)) {
            return (React.createElement(Space, null,
                React.createElement(Button, { onClick: (e) => {
                        editRequestBody();
                        e.stopPropagation();
                    }, icon: React.createElement(EditOutlined, null) }, "Edit Request Body")));
        }
        return (React.createElement(Space, null,
            React.createElement(Tooltip, { title: "Only XHR/Fetch requests can be modified" },
                React.createElement(Button, { disabled: true, icon: React.createElement(EditOutlined, null) }, "Edit Request Body"))));
    }, [networkEvent]);
    if (networkEvent.request?.postData?.text) {
        return (
        // Collapse.Panel doesn't work with Fragments. They have to be directly in Collapse
        React.createElement(Collapse, { bordered: false, expandIcon: ({ isActive }) => React.createElement(CaretRightOutlined, { rotate: isActive ? 90 : 0 }) },
            React.createElement(Collapse.Panel, { key: "request-body", header: renderHeader(), extra: renderEditRequestBodyButton() },
                React.createElement(RequestBody, { networkEvent: networkEvent, parsed: isParsed }))));
    }
    return null;
};
export default RequestBodyPanel;
