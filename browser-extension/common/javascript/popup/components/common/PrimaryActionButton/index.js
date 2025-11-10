import React from "react";
import { Button } from "antd";
import "./primaryActionButton.css";
export const PrimaryActionButton = (props) => {
    return (React.createElement(Button, { ...props, className: `primary-action-btn ${props.className ?? ""} ${props.size === "small" ? "primary-action-btn-small" : ""}` }));
};
