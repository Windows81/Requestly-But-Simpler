import React from "react";
import { PropertyRow } from "@requestly-ui/resource-table";
import config from "../../../../config";
import "./executionDetails.scss";
const ExecutionDetails = ({ execution }) => {
    return (React.createElement("div", { className: "execution-details" },
        React.createElement(PropertyRow, { name: "Request URL", value: execution.requestURL }),
        React.createElement(PropertyRow, { name: "Rule applied", value: React.createElement("a", { target: "_blank", href: `${config.WEB_URL}/rules/editor/edit/${execution.rule.id}` }, execution.rule.name) })));
};
export default ExecutionDetails;
