// Import Libraries
import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider, Tabs, theme } from "antd";
// Import Styles
import "./index.scss";
import { ThemeProvider } from "@devtools-ds/themes";
// Import Custom Components
import { ColorScheme } from "./types";
import { getCurrentColorScheme, onColorSchemeChange } from "./utils";
import useLocalStorageState from "./hooks/useLocalStorageState";
import { EVENT, sendEvent } from "./events";
// Import All Containers
import NetworkContainer from "./containers/network/NetworkContainer";
import ExecutionsContainer from "./containers/executions/ExecutionsContainer";
import AnalyticsInspectorContainer from "./containers/analytics-inspector/AnalyticsInspectorContainer";
// Todo @Sachin: Remove this after confirming with team that this is not needed
sendEvent(EVENT.DEVTOOL_OPENED);
const token = {
    borderRadius: 4,
    fontSize: 13,
};
var DevtoolsTabKeys;
(function (DevtoolsTabKeys) {
    DevtoolsTabKeys["NETWORK"] = "network";
    DevtoolsTabKeys["EXECUTIONS"] = "executions";
    DevtoolsTabKeys["ANALYTICS_INSPECTOR"] = "analytics-inspector";
})(DevtoolsTabKeys || (DevtoolsTabKeys = {}));
const App = () => {
    const [colorScheme, setColorScheme] = useState(getCurrentColorScheme());
    const [selectedTab, setSelectedTab] = useLocalStorageState("lastTab", DevtoolsTabKeys.NETWORK);
    useEffect(() => {
        onColorSchemeChange(setColorScheme);
    }, []);
    useEffect(() => {
        sendEvent(EVENT.DEVTOOL_TAB_SELECTED, { tab: selectedTab });
    }, [selectedTab]);
    const antDesignTheme = useMemo(() => {
        let algorithm = [theme.compactAlgorithm];
        if (colorScheme === ColorScheme.DARK) {
            algorithm.push(theme.darkAlgorithm);
        }
        return { token, algorithm };
    }, [colorScheme]);
    return (React.createElement(ConfigProvider, { theme: antDesignTheme },
        React.createElement(ThemeProvider, { theme: "chrome", colorScheme: colorScheme },
            React.createElement(Tabs, { className: "devtools-tabs", activeKey: selectedTab, onChange: setSelectedTab, tabPosition: "left", tabBarStyle: { minWidth: 150 }, tabBarGutter: 0, items: [
                    {
                        label: "Network Traffic",
                        key: DevtoolsTabKeys.NETWORK,
                        children: React.createElement(NetworkContainer, null),
                        forceRender: true,
                    },
                    {
                        label: "Rule Executions",
                        key: DevtoolsTabKeys.EXECUTIONS,
                        children: React.createElement(ExecutionsContainer, null),
                        forceRender: true,
                    },
                    {
                        label: "Analytics Inspector",
                        key: DevtoolsTabKeys.ANALYTICS_INSPECTOR,
                        children: React.createElement(AnalyticsInspectorContainer, null),
                        forceRender: true,
                    },
                ] }))));
};
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));
