import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider, theme } from "antd";
import Popup from "./components/Popup";
import { RecordsProvider } from "./contexts/RecordsContext";
import "./index.css";
const aliasToken = {
    fontSize: 14,
    borderRadius: 4,
    controlHeight: 30,
    colorText: "#ffffff",
    colorTextTertiary: "#b0b0b5",
};
const App = () => {
    return (React.createElement(ConfigProvider, { theme: { token: aliasToken, algorithm: [theme.darkAlgorithm] } },
        React.createElement(RecordsProvider, null,
            React.createElement(Popup, null))));
};
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
