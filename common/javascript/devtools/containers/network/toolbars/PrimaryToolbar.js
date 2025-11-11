import Icon, { StopOutlined } from "@ant-design/icons";
import { Button, Checkbox, Divider, Space } from "antd";
import React, { useCallback } from "react";
import UserAgentRuleIcon from "../../../../../resources/icons/rule-icons/useragent.svg";
import CodeIcon from "../../../../../resources/icons/code.svg";
import CSSIcon from "../../../../../resources/icons/css.svg";
import { createRule, generateRuleName, getHostFromUrl, getPageOrigin } from "../../../utils";
import { RuleEditorUrlFragment } from "../../../types";
import { ScriptCodeType, ScriptType, SourceKey, SourceOperator } from "../../../../types";
const PrimaryToolbar = ({ clearEvents, settings, onSettingsChange }) => {
    const onPreserveLogSettingChanged = useCallback((newPreserveLogSetting) => {
        onSettingsChange({
            ...settings,
            preserveLog: newPreserveLogSetting,
        });
    }, [settings]);
    const addJSInPage = useCallback(async () => {
        const pageOrigin = await getPageOrigin();
        createRule(RuleEditorUrlFragment.SCRIPT, (rule) => {
            const rulePair = rule.pairs[0];
            rulePair.source = {
                key: SourceKey.URL,
                operator: SourceOperator.CONTAINS,
                value: pageOrigin,
            };
            rulePair.scripts = [
                {
                    type: ScriptType.CODE,
                    codeType: ScriptCodeType.JS,
                    loadTime: "afterPageLoad",
                    value: 'console.log("Hello World");',
                },
            ];
            rule.name = generateRuleName("Add JS");
            rule.description = `Add JS on ${getHostFromUrl(pageOrigin)}`;
        }, ".code-editor textarea");
    }, []);
    const addCSSInPage = useCallback(async () => {
        const pageOrigin = await getPageOrigin();
        createRule(RuleEditorUrlFragment.SCRIPT, (rule) => {
            const rulePair = rule.pairs[0];
            rulePair.source = {
                key: SourceKey.URL,
                operator: SourceOperator.CONTAINS,
                value: pageOrigin,
            };
            rulePair.scripts = [
                {
                    type: ScriptType.CODE,
                    codeType: ScriptCodeType.CSS,
                    loadTime: "afterPageLoad",
                    value: "body {\n\tbackground-color: #fff;\n}",
                },
            ];
            rule.name = generateRuleName("Add CSS");
            rule.description = `Add CSS on ${getHostFromUrl(pageOrigin)}`;
        }, ".code-editor textarea");
    }, []);
    const emulateDevice = useCallback(async () => {
        const pageOrigin = await getPageOrigin();
        createRule(RuleEditorUrlFragment.USER_AGENT, (rule) => {
            const rulePair = rule.pairs[0];
            rulePair.source.filters = [
                {
                    // @ts-ignore
                    pageUrl: {
                        operator: SourceOperator.CONTAINS,
                        value: pageOrigin,
                    },
                },
            ];
            // @ts-ignore
            rulePair.envType = "device";
            rule.name = generateRuleName("Emulate device");
            rule.description = `Emulate device on ${getHostFromUrl(pageOrigin)}`;
        }, '[data-selectionid="device-selector"] input');
    }, []);
    return (React.createElement("div", { className: "network-toolbar primary" },
        React.createElement("div", null,
            React.createElement(Button, { icon: React.createElement(StopOutlined, null), type: "text", className: "clear-events-button", onClick: clearEvents }, "Clear logs"),
            React.createElement(Divider, { type: "vertical", className: "divider" }),
            React.createElement(Checkbox, { className: "preserve-log-checkbox", checked: settings.preserveLog, onChange: (e) => onPreserveLogSettingChanged(e.target.checked) }, "Preserve log")),
        React.createElement(Space, null,
            React.createElement(Button, { icon: React.createElement(Icon, { component: CodeIcon }), type: "text", onClick: addJSInPage }, "Add JavaScript to page"),
            React.createElement(Button, { icon: React.createElement(Icon, { component: CSSIcon }), type: "text", onClick: addCSSInPage }, "Add CSS to page"),
            React.createElement(Button, { icon: React.createElement(Icon, { component: UserAgentRuleIcon }), type: "text", onClick: emulateDevice }, "Emulate for different device"))));
};
export default PrimaryToolbar;
