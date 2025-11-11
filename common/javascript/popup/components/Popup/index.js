import React, { useCallback, useEffect, useState } from "react";
import PopupTabs from "../PopupTabs";
import { EXTENSION_MESSAGES } from "../../../constants";
import PopupHeader from "./PopupHeader";
import { HttpsRuleOptions } from "../HttpsRuleOptions";
import { EVENT, sendEvent } from "../../events";
import SessionRecordingView from "../SessionRecording/SessionRecordingView";
import { getExtensionVersion } from "../../utils";
import { BlockedExtensionView } from "../BlockedExtensionView/BlockedExtensionView";
import DesktopAppProxy from "../DesktopAppProxy/DesktopAppProxy";
import { ConnectedToDesktopView } from "../DesktopAppProxy/components/ConnectedToDesktopView/ConnectedToDesktopView";
import "./popup.css";
import { message } from "antd";
const Popup = () => {
    const [ifNoRulesPresent, setIfNoRulesPresent] = useState(true);
    const [isExtensionEnabled, setIsExtensionEnabled] = useState(true);
    const [isBlockedOnTab, setIsBlockedOnTab] = useState(false);
    const [currentTab, setCurrentTab] = useState(null);
    const [isProxyApplied, setIsProxyApplied] = useState(false);
    useEffect(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, ([activeTab]) => {
            setCurrentTab(activeTab);
        });
    }, []);
    useEffect(() => {
        chrome.runtime.sendMessage({ action: EXTENSION_MESSAGES.CHECK_IF_NO_RULES_PRESENT }, (noRulesPresent) => {
            setIfNoRulesPresent(noRulesPresent);
            sendEvent(EVENT.POPUP_OPENED, {
                onboarding_screen_viewed: noRulesPresent,
            });
        });
        chrome.runtime.sendMessage({ action: EXTENSION_MESSAGES.CHECK_IF_EXTENSION_ENABLED }, setIsExtensionEnabled);
    }, []);
    useEffect(() => {
        chrome.runtime
            .sendMessage({
            action: EXTENSION_MESSAGES.IS_EXTENSION_BLOCKED_ON_TAB,
            tabUrl: currentTab?.url,
        })
            ?.then(setIsBlockedOnTab);
    }, [currentTab]);
    const handleToggleExtensionStatus = useCallback((newStatus) => {
        console.log("[Popup] handleToggleExtensionStatus", {
            newStatus,
        });
        chrome.runtime.sendMessage({ action: EXTENSION_MESSAGES.TOGGLE_EXTENSION_STATUS, newStatus }, ({ success, updatedStatus }) => {
            console.log("[Popup] handleToggleExtensionStatus callback", {
                success,
                updatedStatus,
            });
            if (!success) {
                message.error("Cannot update extension status. Please contact support.", 0.75);
                return;
            }
            setIsExtensionEnabled(updatedStatus);
            sendEvent(EVENT.EXTENSION_STATUS_TOGGLED, {
                isEnabled: updatedStatus,
            });
        });
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "popup" },
            isProxyApplied ? (React.createElement(ConnectedToDesktopView, { onDisconnectClick: () => setIsProxyApplied(false) })) : (React.createElement(React.Fragment, null,
                React.createElement(PopupHeader, { isExtensionEnabled: isExtensionEnabled, handleToggleExtensionStatus: handleToggleExtensionStatus }),
                React.createElement("div", { className: "popup-body" }, isBlockedOnTab ? (React.createElement(BlockedExtensionView, null)) : (React.createElement(React.Fragment, null,
                    !isExtensionEnabled && React.createElement("div", { className: "extension-paused-overlay" }),
                    React.createElement("div", { className: "popup-content" },
                        ifNoRulesPresent ? React.createElement(HttpsRuleOptions, null) : React.createElement(PopupTabs, null),
                        React.createElement(SessionRecordingView, null),
                        React.createElement(DesktopAppProxy, { isProxyApplied: isProxyApplied, onProxyStatusChange: setIsProxyApplied }))))))),
            React.createElement("div", { className: "popup-footer" },
                React.createElement("div", { className: "extension-version" },
                    "v",
                    getExtensionVersion())))));
};
export default Popup;
