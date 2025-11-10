import React, { useCallback } from "react";
import { Button, Col, Row, Switch, Typography, Tooltip } from "antd";
import config from "../../../config";
import { EVENT, sendEvent } from "../../events";
const PopupHeader = ({ isExtensionEnabled, handleToggleExtensionStatus }) => {
    const onOpenAppButtonClick = useCallback(() => {
        window.open(`${config.WEB_URL}?source=popup`, "_blank");
        sendEvent(EVENT.OPEN_APP_CLICKED);
    }, []);
    return (React.createElement("div", { className: "popup-header" },
        React.createElement("div", { className: "popup-header-workspace-section" },
            React.createElement("img", { className: "product-logo", src: "/resources/images/48x48.png" })),
        React.createElement(Row, { align: "middle", gutter: 16 },
            React.createElement(Col, null,
                React.createElement(Row, { align: "middle" },
                    React.createElement(Tooltip, { open: !isExtensionEnabled, title: "Please switch on the Requestly extension. When paused, rules won't be applied and sessions won't be recorded.", overlayClassName: "enable-extension-tooltip", color: "var(--neutrals-black)", overlayInnerStyle: { fontSize: "14px" } },
                        React.createElement(Switch, { checked: isExtensionEnabled, onChange: handleToggleExtensionStatus, size: "small", className: "pause-switch" })),
                    React.createElement(Typography.Text, null, `Requestly ${isExtensionEnabled ? "running" : "paused"}`))),
            React.createElement(Col, null,
                React.createElement(Button, { type: "primary", className: "open-app-btn", onClick: onOpenAppButtonClick }, "Open app")))));
};
export default PopupHeader;
