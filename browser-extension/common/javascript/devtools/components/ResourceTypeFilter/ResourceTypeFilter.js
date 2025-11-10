import React from "react";
import { Divider, Radio } from "antd";
import { ResourceTypeFilterValue } from "./types";
import "./resourceTypeFilter.scss";
const ResourceTypeFilter = ({ value, onChange }) => {
    return (React.createElement(Radio.Group, { size: "small", className: "resource-type-filter", value: value, onChange: (e) => onChange(e.target.value) },
        React.createElement(Radio.Button, { value: ResourceTypeFilterValue.ALL }, "All"),
        React.createElement(Divider, { type: "vertical", className: "divider" }),
        React.createElement(Radio.Button, { value: ResourceTypeFilterValue.AJAX }, "Fetch/XHR"),
        React.createElement(Radio.Button, { value: ResourceTypeFilterValue.JS }, "JS"),
        React.createElement(Radio.Button, { value: ResourceTypeFilterValue.CSS }, "CSS"),
        React.createElement(Radio.Button, { value: ResourceTypeFilterValue.IMG }, "Img"),
        React.createElement(Radio.Button, { value: ResourceTypeFilterValue.MEDIA }, "Media"),
        React.createElement(Radio.Button, { value: ResourceTypeFilterValue.FONT }, "Font"),
        React.createElement(Radio.Button, { value: ResourceTypeFilterValue.DOC }, "Doc"),
        React.createElement(Radio.Button, { value: ResourceTypeFilterValue.WS }, "WS"),
        React.createElement(Radio.Button, { value: ResourceTypeFilterValue.WASM }, "Wasm"),
        React.createElement(Radio.Button, { value: ResourceTypeFilterValue.MANIFEST }, "Manifest"),
        React.createElement(Radio.Button, { value: ResourceTypeFilterValue.OTHER }, "Other")));
};
export default ResourceTypeFilter;
