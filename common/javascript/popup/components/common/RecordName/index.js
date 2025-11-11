import React from "react";
import { Tooltip } from "antd";
const RecordName = ({ name = "", children }) => {
    return name.length > 54 ? (React.createElement(Tooltip, { title: name, placement: "top", mouseEnterDelay: 0.5, autoAdjustOverflow: true, color: "var(--neutrals-black)" }, children)) : (children);
};
export default RecordName;
