import React, { useState } from "react";
import { Button, Collapse, Tooltip, Typography } from "antd";
import { CaretRightOutlined, GroupOutlined } from "@ant-design/icons";
import { getCurrentColorScheme } from "src/devtools/utils";
import { ResourceTable } from "@requestly-ui/resource-table";
import { ObjectInspector } from "@devtools-ds/object-inspector";
import { capitalize } from "lodash";
import "./vendorEventPanel.scss";
var EVENT_PROPERTIES_TABLE_COLUMN_IDS;
(function (EVENT_PROPERTIES_TABLE_COLUMN_IDS) {
    EVENT_PROPERTIES_TABLE_COLUMN_IDS["KEY"] = "key";
    EVENT_PROPERTIES_TABLE_COLUMN_IDS["VALUE"] = "value";
})(EVENT_PROPERTIES_TABLE_COLUMN_IDS || (EVENT_PROPERTIES_TABLE_COLUMN_IDS = {}));
const eventPropertiesTableColumns = [
    {
        key: EVENT_PROPERTIES_TABLE_COLUMN_IDS.KEY,
        header: "Key",
        width: 30,
        render: (property) => property.key,
    },
    {
        key: EVENT_PROPERTIES_TABLE_COLUMN_IDS.VALUE,
        header: "Value",
        width: 50,
        render: (property) => (React.createElement(Typography.Text, { ellipsis: { tooltip: true } }, JSON.stringify(property.value))),
    },
];
export const VendorEventPanel = ({ eventDetails, vendorName }) => {
    const [isJsonView, setIsJsonView] = useState(false);
    if (!eventDetails) {
        return React.createElement("div", null, "No event data found!");
    }
    const nestedCollapseItems = Object.entries(eventDetails?.properties ?? {}).map(([key, properties]) => {
        const eventProperties = Object.entries(properties ?? {}).map(([key, value]) => {
            return { key, value };
        });
        return {
            key,
            label: capitalize(key),
            children: (React.createElement(React.Fragment, null,
                React.createElement(ResourceTable, { colorScheme: getCurrentColorScheme(), resources: eventProperties, columns: eventPropertiesTableColumns, primaryColumnKeys: [EVENT_PROPERTIES_TABLE_COLUMN_IDS.KEY] }))),
        };
    });
    const collapseItems = [
        {
            key: eventDetails.event,
            label: (React.createElement("div", { className: "vendor-event-title" },
                React.createElement("span", { className: "title" }, eventDetails.event),
                React.createElement("div", { className: "actions" },
                    React.createElement(Tooltip, { title: isJsonView ? "View in table" : "View as Json" },
                        React.createElement(Button, { size: "small", onClick: (e) => {
                                e.stopPropagation();
                                setIsJsonView((prev) => !prev);
                            }, icon: isJsonView ? React.createElement(GroupOutlined, null) : React.createElement("span", null, `{}`) }))))),
            children: isJsonView ? (React.createElement(ObjectInspector, { expandLevel: 3, data: eventDetails.rawEvent, includePrototypes: false, className: "object-inspector vendor-raw-event" })) : (React.createElement(Collapse, { bordered: false, className: "nested-event-properties-collapse", items: nestedCollapseItems })),
        },
    ];
    return (React.createElement(Collapse, { bordered: false, items: collapseItems, className: "vendor-event-panel", expandIcon: ({ isActive }) => React.createElement(CaretRightOutlined, { rotate: isActive ? 90 : 0 }) }));
};
