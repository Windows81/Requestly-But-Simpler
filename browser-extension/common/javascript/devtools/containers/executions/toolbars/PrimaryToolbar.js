import { StopOutlined } from "@ant-design/icons";
import { Button, Checkbox, Divider } from "antd";
import React, { useCallback } from "react";
const PrimaryToolbar = ({ clearEvents, settings, onSettingsChange }) => {
    const onPreserveLogSettingChanged = useCallback((newPreserveLogSetting) => {
        onSettingsChange({
            ...settings,
            preserveLog: newPreserveLogSetting,
        });
    }, [settings]);
    return (React.createElement("div", { className: "executions-toolbar primary" },
        React.createElement("div", null,
            React.createElement(Button, { icon: React.createElement(StopOutlined, null), type: "text", className: "clear-events-button", onClick: clearEvents }, "Clear logs"),
            React.createElement(Divider, { type: "vertical", className: "divider" }),
            React.createElement(Checkbox, { className: "preserve-log-checkbox", checked: settings.preserveLog, onChange: (e) => onPreserveLogSettingChanged(e.target.checked) }, "Preserve log"))));
};
export default PrimaryToolbar;
