import React, { useCallback } from "react";
import { Button } from "antd";
import ConnectedToDesktopIcon from "../../../../../../resources/icons/connectedToDesktop.svg";
import "./connectedToDesktopView.scss";
import { EXTENSION_MESSAGES } from "src/constants";
export const ConnectedToDesktopView = ({ onDisconnectClick }) => {
    const handleDisconnectFromDesktopApp = useCallback(() => {
        chrome.runtime
            .sendMessage({ action: EXTENSION_MESSAGES.DISCONNECT_FROM_DESKTOP_APP })
            .then(onDisconnectClick)
            .catch(onDisconnectClick);
    }, []);
    return (React.createElement("div", { className: "desktop-app-connected-view" },
        React.createElement(ConnectedToDesktopIcon, { className: "connected-icon" }),
        React.createElement("div", { className: "connected-title" }, "Connected to Requestly desktop app"),
        React.createElement("div", { className: "connected-description" }, "All traffic from this browser profile is being intercepted by the desktop app. The browser extension won\u2019t work until it is disconnected from the desktop app."),
        React.createElement(Button, { danger: true, type: "primary", onClick: handleDisconnectFromDesktopApp }, "Disconnect desktop app")));
};
