import React from "react";
import "./columns.scss";
export var NETWORK_TABLE_COLUMN_IDS;
(function (NETWORK_TABLE_COLUMN_IDS) {
    NETWORK_TABLE_COLUMN_IDS["URL"] = "url";
    NETWORK_TABLE_COLUMN_IDS["METHOD"] = "method";
    NETWORK_TABLE_COLUMN_IDS["STATUS"] = "status";
    NETWORK_TABLE_COLUMN_IDS["TYPE"] = "type";
    NETWORK_TABLE_COLUMN_IDS["SIZE"] = "size";
    NETWORK_TABLE_COLUMN_IDS["TIME"] = "time";
})(NETWORK_TABLE_COLUMN_IDS || (NETWORK_TABLE_COLUMN_IDS = {}));
const networkEventTableColumns = [
    {
        key: NETWORK_TABLE_COLUMN_IDS.URL,
        header: "URL",
        render: (networkEvent) => {
            const url = networkEvent.request.url;
            if (networkEvent?.metadata?.graphQLDetails) {
                const { operationName } = networkEvent.metadata.graphQLDetails;
                return (React.createElement("div", { className: "table-cell-url-wrapper" },
                    React.createElement("span", { className: "table-cell-url" }, url),
                    React.createElement("span", { className: "table-cell-url-graphql-operation-name" }, `(${operationName})`)));
            }
            return url;
        },
    },
    {
        key: NETWORK_TABLE_COLUMN_IDS.METHOD,
        header: "Method",
        width: 6,
        render: (networkEvent) => networkEvent.request.method,
    },
    {
        key: NETWORK_TABLE_COLUMN_IDS.STATUS,
        header: "Status",
        width: 6,
        render: (networkEvent) => networkEvent.response.status || "(canceled)",
    },
    {
        key: NETWORK_TABLE_COLUMN_IDS.TYPE,
        header: "Type",
        width: 10,
        render: (networkEvent) => networkEvent._resourceType,
    },
    {
        key: NETWORK_TABLE_COLUMN_IDS.SIZE,
        header: "Size",
        width: 8,
        render: (networkEvent) => {
            const bytes = networkEvent.response.content.size;
            if (bytes < 1000) {
                return `${bytes} B`;
            }
            if (bytes < 1000000) {
                return `${Math.round(bytes / 1000)} Kb`;
            }
            return `${(bytes / 1000000).toFixed(1)} Mb`;
        },
    },
    {
        key: NETWORK_TABLE_COLUMN_IDS.TIME,
        header: "Time",
        width: 8,
        render: (networkEvent) => {
            const ms = Math.ceil(networkEvent.time);
            if (ms < 1000) {
                return `${ms} ms`;
            }
            return `${(ms / 1000).toFixed(3)} s`;
        },
    },
];
export default networkEventTableColumns;
