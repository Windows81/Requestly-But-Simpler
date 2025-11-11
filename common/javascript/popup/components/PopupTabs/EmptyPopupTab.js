import { Col, Row, Typography } from "antd";
import React from "react";
export const EmptyPopupTab = ({ title, description, actionButton }) => {
    return (React.createElement(Row, { align: "middle", justify: "center", className: "empty-tab-view-container" },
        React.createElement(Col, { span: 24, className: "empty-tab-content" },
            React.createElement(Typography.Text, { className: "empty-tab-view-title" }, title),
            React.createElement(Typography.Text, { className: "empty-tab-view-description" }, description),
            actionButton)));
};
