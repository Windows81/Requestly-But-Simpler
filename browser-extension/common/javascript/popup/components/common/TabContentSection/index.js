import "./tabContentSection.css";
import React from "react";
import { Typography } from "antd";
const TabContentSection = ({ heading = "", children }) => {
    return (React.createElement("div", { className: "tab-content-section" },
        heading.length > 0 && React.createElement(Typography.Title, { level: 5 }, heading),
        React.createElement("div", null, children)));
};
export default TabContentSection;
