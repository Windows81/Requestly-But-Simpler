import React, { useCallback } from "react";
import { Tooltip } from "antd";
import "./iconButton.scss";
const IconButton = ({ icon: Icon, onClick, tooltip, tooltipPosition = "bottom", className, ...props }) => {
    const handleButtonClick = useCallback((evt) => {
        onClick();
        evt.stopPropagation();
    }, []);
    return (React.createElement(Tooltip, { placement: tooltipPosition, title: tooltip },
        React.createElement(Icon, { onClick: handleButtonClick, ...props, className: `icon-button ${className}` })));
};
export default IconButton;
