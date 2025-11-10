import React from "react";
import BlockedExtension from "../../../../resources/icons/blockedExtension.svg";
import "./blockedExtensionView.scss";
import { Button } from "antd";
import config from "../../../config";
export const BlockedExtensionView = () => {
    return (React.createElement("div", { className: "blocked-extension-view-container" },
        React.createElement(BlockedExtension, { className: "blocked-extension-view-icon" }),
        React.createElement("div", { className: "blocked-extension-view-title" }, "Requestly is blocked on this page."),
        React.createElement("div", { className: "blocked-extension-view-description" }, "This page is in the blocklist. Please remove it from the app blocklist settings for Requestly to work."),
        React.createElement(Button, { type: "primary", onClick: () => {
                chrome.tabs.create({
                    url: `${config.WEB_URL}/settings/global-settings?source=popup`,
                });
            } }, "Unblock")));
};
