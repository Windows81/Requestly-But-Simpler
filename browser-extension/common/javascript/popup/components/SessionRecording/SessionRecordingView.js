import React, { useCallback, useEffect, useState } from "react";
import { Row, Tooltip } from "antd";
import { CLIENT_MESSAGES, EXTENSION_MESSAGES } from "../../../constants";
import { PrimaryActionButton } from "../common/PrimaryActionButton";
import SettingIcon from "../../../../resources/icons/setting.svg";
import PlayRecordingIcon from "../../../../resources/icons/playRecording.svg";
import StopRecordingIcon from "../../../../resources/icons/stopRecording.svg";
import ReplayLastFiveMinuteIcon from "../../../../resources/icons/replayLastFiveMinute.svg";
import InfoIcon from "../../../../resources/icons/info.svg";
import ShieldIcon from "../../../../resources/icons/shield.svg";
import config from "../../../config";
import { EVENT, sendEvent } from "../../events";
import "./sessionRecordingView.css";
const SessionRecordingView = () => {
    const [activeTab, setActiveTab] = useState();
    const [isRecordingSession, setIsRecordingSession] = useState();
    const [isManualMode, setIsManualMode] = useState();
    const currentTabId = activeTab?.id;
    const isRecordingInManualMode = isRecordingSession && isManualMode;
    const startRecordingOnClick = useCallback(() => {
        sendEvent(EVENT.START_RECORDING_CLICKED, { type: "manual" });
        chrome.runtime.sendMessage({
            action: EXTENSION_MESSAGES.START_RECORDING_EXPLICITLY,
            tab: activeTab,
            showWidget: true,
        });
        setIsManualMode(true);
        setIsRecordingSession(true);
    }, [activeTab]);
    const viewRecordingOnClick = useCallback(() => {
        if (isManualMode) {
            sendEvent(EVENT.STOP_RECORDING_CLICKED, { recording_mode: "manual" });
            chrome.runtime.sendMessage({
                action: EXTENSION_MESSAGES.STOP_RECORDING,
                tabId: currentTabId,
                openRecording: true,
            });
            setIsRecordingSession(false);
        }
        else {
            sendEvent(EVENT.VIEW_RECORDING_CLICKED, { recording_mode: "auto" });
            chrome.runtime.sendMessage({
                action: EXTENSION_MESSAGES.WATCH_RECORDING,
                tabId: currentTabId,
            });
        }
    }, [isManualMode, currentTabId]);
    useEffect(() => {
        chrome.tabs.query({ currentWindow: true, active: true }, ([activeTab]) => {
            setActiveTab(activeTab);
            chrome.tabs.sendMessage(activeTab.id, { action: CLIENT_MESSAGES.IS_RECORDING_SESSION }, { frameId: 0 }, setIsRecordingSession);
        });
    }, []);
    useEffect(() => {
        if (currentTabId) {
            chrome.tabs.sendMessage(currentTabId, {
                action: CLIENT_MESSAGES.IS_EXPLICIT_RECORDING_SESSION,
            }, { frameId: 0 }, setIsManualMode);
        }
    }, [currentTabId]);
    const handleConfigureBtnClick = useCallback(() => {
        sendEvent(EVENT.SESSION_RECORDINGS_CONFIG_OPENED);
        window.open(`${config.WEB_URL}/settings/sessionbook?source=popup`, "_blank");
    }, []);
    const watchReplayBtnTooltipContent = isRecordingInManualMode || !isRecordingSession ? (React.createElement("div", { className: "watch-replay-btn-tooltip-content" },
        React.createElement(InfoIcon, null),
        React.createElement("div", null,
            React.createElement("span", null, "Auto recording is disabled for this page. Please Enable it in SessionBook settings."),
            " ",
            React.createElement("button", { onClick: handleConfigureBtnClick }, "Enable now.")))) : (React.createElement(React.Fragment, null, "Instantly play last 5 min auto recorded session for this tab."));
    return (React.createElement("div", { className: "session-view-content popup-body-card" },
        React.createElement(Row, { align: "middle", justify: "space-between" },
            React.createElement("div", { className: "title" }, "Record session for sharing & debugging"),
            React.createElement("div", { className: "configure-btn", onClick: handleConfigureBtnClick },
                React.createElement(SettingIcon, null),
                " Configure")),
        React.createElement(Row, { wrap: false, align: "middle", className: "action-btns" },
            React.createElement(Tooltip, { placement: "top", color: "#000000", title: "Capture mouse movement, console, network and more.", overlayClassName: "action-btn-tooltip" },
                React.createElement(PrimaryActionButton, { block: true, className: isRecordingInManualMode ? "stop-btn" : "", icon: isRecordingInManualMode ? React.createElement(StopRecordingIcon, null) : React.createElement(PlayRecordingIcon, null), onClick: isRecordingInManualMode ? viewRecordingOnClick : startRecordingOnClick }, isRecordingInManualMode ? "Stop and watch" : " Record this tab")),
            React.createElement(Tooltip, { placement: "top", color: "#000000", title: watchReplayBtnTooltipContent, overlayClassName: "action-btn-tooltip watch-replay-btn" },
                React.createElement("span", null,
                    React.createElement(PrimaryActionButton, { block: true, icon: React.createElement(ReplayLastFiveMinuteIcon, null), disabled: isRecordingInManualMode || !isRecordingSession, onClick: viewRecordingOnClick }, "Watch last 5 min replay")))),
        React.createElement("div", { className: "session-replay-security-msg" },
            React.createElement(ShieldIcon, null),
            React.createElement("div", { className: "msg" }, "Sessions are recorded locally in your browser."))));
};
export default SessionRecordingView;
