import React, { useCallback, useEffect, useState } from "react";
import { Row } from "antd";
import { PrimaryActionButton } from "../common/PrimaryActionButton";
import { CheckCircleOutlined } from "@ant-design/icons";
import { EXTENSION_MESSAGES } from "../../../constants";
import ConnectToDesktopIcon from "../../../../resources/icons/connectToDesktop.svg";
import "./desktopAppProxy.scss";
const DesktopAppProxy = ({ isProxyApplied, onProxyStatusChange }) => {
    const [isDesktopAppOpen, setIsDesktopAppOpen] = useState(false);
    const connectToDesktopApp = useCallback(() => {
        chrome.runtime
            .sendMessage({ action: EXTENSION_MESSAGES.CONNECT_TO_DESKTOP_APP })
            .then(onProxyStatusChange)
            .catch(() => onProxyStatusChange(false));
    }, []);
    const checkIfProxyApplied = useCallback(() => {
        chrome.runtime.sendMessage({ action: EXTENSION_MESSAGES.IS_PROXY_APPLIED }).then(onProxyStatusChange);
    }, []);
    const checkIfDesktopAppOpen = useCallback(() => {
        chrome.runtime.sendMessage({ action: EXTENSION_MESSAGES.CHECK_IF_DESKTOP_APP_OPEN }).then(setIsDesktopAppOpen);
    }, []);
    useEffect(() => {
        checkIfDesktopAppOpen();
        checkIfProxyApplied();
    }, []);
    if (!isDesktopAppOpen && !isProxyApplied) {
        return null;
    }
    return (React.createElement("div", { className: "desktop-app-container popup-body-card" },
        React.createElement(Row, { align: "middle", justify: "space-between" },
            React.createElement(ConnectToDesktopIcon, { className: "connect-to-desktop-icon" }),
            React.createElement("div", null,
                React.createElement("div", null, isProxyApplied ? (React.createElement(React.Fragment, null,
                    React.createElement(CheckCircleOutlined, { className: "connected-icon" }),
                    " Connected to Desktop App")) : ("Connect to Desktop App")),
                React.createElement("div", { className: "proxy-applied-subtitle" }, isProxyApplied
                    ? "All the traffic from this browser profile is being intercepted."
                    : "Connect to intercept all the traffic from this browser profile.")),
            React.createElement(PrimaryActionButton, { size: "small", onClick: () => {
                    connectToDesktopApp();
                } }, "Connect"))));
};
export default DesktopAppProxy;
