import React from "react";
import GeneralTabContent from "./GeneralTabContent/GeneralTabContent";
import HeadersTabContent from "./HeadersTabContent/HeadersTabContent";
import PayloadTabContent from "./PayloadTabContent/PayloadTabContent";
// @ts-ignore
import { ObjectInspector } from "@devtools-ds/object-inspector";
import ResponseTabContent from "./ResponseTabContent/ResponseTabContent";
const networkEventDetailsTabs = [
    {
        key: "general",
        label: "General",
        render: (networkEvent) => React.createElement(GeneralTabContent, { networkEvent: networkEvent }),
    },
    {
        key: "headers",
        label: "Headers",
        render: (networkEvent) => React.createElement(HeadersTabContent, { networkEvent: networkEvent }),
    },
    {
        key: "payload",
        label: "Payload",
        render: (networkEvent) => React.createElement(PayloadTabContent, { networkEvent: networkEvent }),
    },
    {
        key: "response",
        label: "Response",
        render: (networkEvent) => React.createElement(ResponseTabContent, { networkEvent: networkEvent }),
    },
    {
        key: "har",
        label: "HAR",
        render: (networkEvent) => (React.createElement(ObjectInspector, { expandLevel: 3, data: networkEvent, includePrototypes: false, className: "object-inspector" })),
    },
];
export default networkEventDetailsTabs;
