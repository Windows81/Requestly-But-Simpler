import React from "react";
import { Typography } from "antd";
import "./emptyContainerPlaceholder.scss";
const EmptyContainerPlaceholder = ({ lines }) => {
    return (React.createElement("div", { className: "empty-container-placeholder" }, lines.map((line) => (React.createElement(Typography.Text, { type: "secondary" }, line)))));
};
export default EmptyContainerPlaceholder;
