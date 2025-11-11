import { CaretRightOutlined, DeleteOutlined, EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Collapse, Space, Typography } from "antd";
import React, { useCallback } from "react";
import { SourceKey, SourceOperator } from "../../../../../../../types";
import { RuleEditorUrlFragment } from "../../../../../../types";
import { createRule, generateRuleName, getBaseUrl } from "../../../../../../utils";
import IconButton from "../../../../../../components/IconButton/IconButton";
import { PropertyRow } from "@requestly-ui/resource-table";
var QueryParamModification;
(function (QueryParamModification) {
    QueryParamModification["ADD"] = "Add";
    QueryParamModification["REMOVE"] = "Remove";
    QueryParamModification["REMOVE_ALL"] = "Remove All";
})(QueryParamModification || (QueryParamModification = {}));
const QueryParamRow = ({ queryParam, onEdit, onDelete }) => {
    const { name, value } = queryParam;
    return (React.createElement(PropertyRow, { name: name, value: value, actions: React.createElement(React.Fragment, null,
            React.createElement(IconButton, { icon: EditOutlined, className: "payload-action-button", onClick: onEdit, tooltip: "Edit param" }),
            React.createElement(IconButton, { icon: DeleteOutlined, className: "payload-action-button", onClick: onDelete, tooltip: "Delete param" })) }));
};
const QueryParamsPanel = ({ networkEvent }) => {
    const addQueryParam = useCallback(() => {
        createRule(RuleEditorUrlFragment.QUERY_PARAM, (rule) => {
            const baseUrl = getBaseUrl(networkEvent.request.url);
            rule.pairs[0].source = {
                key: SourceKey.URL,
                operator: SourceOperator.CONTAINS,
                value: baseUrl,
            };
            // @ts-ignore
            rule.pairs[0].modifications = [
                {
                    actionWhenParamExists: "Overwrite",
                    type: QueryParamModification.ADD,
                    param: "",
                    value: "",
                },
            ];
            rule.name = generateRuleName("Add query param");
            rule.description = `Add query param to ${baseUrl}`;
        }, 'input[data-selectionid="query-param-name"]' //TODO
        );
    }, [networkEvent]);
    const editQueryParam = useCallback((queryParam) => {
        createRule(RuleEditorUrlFragment.QUERY_PARAM, (rule) => {
            const baseUrl = getBaseUrl(networkEvent.request.url);
            rule.pairs[0].source = {
                key: SourceKey.URL,
                operator: SourceOperator.CONTAINS,
                value: baseUrl,
            };
            // @ts-ignore
            rule.pairs[0].modifications = [
                {
                    actionWhenParamExists: "Overwrite",
                    type: QueryParamModification.ADD,
                    param: queryParam.name,
                    value: queryParam.value,
                },
            ];
            rule.name = generateRuleName("Override query param");
            rule.description = `Override query param ${queryParam.name} in ${baseUrl}`;
        }, 'input[data-selectionid="query-param-value"]' //TODO
        );
    }, [networkEvent]);
    const removeQueryParam = useCallback((queryParam) => {
        createRule(RuleEditorUrlFragment.QUERY_PARAM, (rule) => {
            const baseUrl = getBaseUrl(networkEvent.request.url);
            rule.pairs[0].source = {
                key: SourceKey.URL,
                operator: SourceOperator.CONTAINS,
                value: baseUrl,
            };
            // @ts-ignore
            rule.pairs[0].modifications = [
                {
                    type: QueryParamModification.REMOVE,
                    param: queryParam.name,
                },
            ];
            rule.name = generateRuleName("Remove query param");
            rule.description = `Remove query param ${queryParam.name} from ${baseUrl}`;
        });
    }, [networkEvent]);
    const removeAllQueryParams = useCallback(() => {
        createRule(RuleEditorUrlFragment.QUERY_PARAM, (rule) => {
            const baseUrl = getBaseUrl(networkEvent.request.url);
            rule.pairs[0].source = {
                key: SourceKey.URL,
                operator: SourceOperator.CONTAINS,
                value: baseUrl,
            };
            // @ts-ignore
            rule.pairs[0].modifications = [
                {
                    type: QueryParamModification.REMOVE_ALL,
                },
            ];
            rule.name = generateRuleName("Remove all query params");
            rule.description = `Remove all query params from ${baseUrl}`;
        });
    }, [networkEvent]);
    const renderQueryParams = () => {
        {
            return networkEvent.request.queryString.length ? (networkEvent.request.queryString.map((queryParam, index) => (React.createElement(QueryParamRow, { key: index, queryParam: queryParam, onEdit: () => editQueryParam(queryParam), onDelete: () => removeQueryParam(queryParam) })))) : (React.createElement(Typography.Text, { type: "secondary", italic: true }, "No query parameter was sent"));
        }
    };
    return (
    // Collapse.Panel doesn't work with Fragments. They have to be directly in Collapse
    React.createElement(Collapse, { bordered: false, expandIcon: ({ isActive }) => React.createElement(CaretRightOutlined, { rotate: isActive ? 90 : 0 }) },
        React.createElement(Collapse.Panel, { header: "Query Parameters", key: "queryparam", extra: React.createElement(Space, null,
                React.createElement(Button, { icon: React.createElement(PlusCircleOutlined, null), onClick: addQueryParam }, "Add query param"),
                React.createElement(Button, { icon: React.createElement(PlusCircleOutlined, null), onClick: removeAllQueryParams }, "Remove all query params")) }, renderQueryParams())));
};
export default QueryParamsPanel;
