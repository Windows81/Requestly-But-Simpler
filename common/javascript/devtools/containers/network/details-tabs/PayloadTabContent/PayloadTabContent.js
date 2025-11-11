import React from "react";
import "./payloadTabContent.scss";
import RequestBodyPanel from "./components/RequestBody/RequestBodyPanel";
import QueryParamsPanel from "./components/QueryParams/QueryParamsPanel";
const PayloadTabContent = ({ networkEvent }) => {
    return (React.createElement("div", { className: "payload-tab-content" },
        React.createElement(QueryParamsPanel, { networkEvent: networkEvent }),
        React.createElement(RequestBodyPanel, { networkEvent: networkEvent })));
};
export default PayloadTabContent;
