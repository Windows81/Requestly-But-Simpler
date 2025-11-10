import React from "react";
import ExecutionDetails from "./ExecutionDetails";
const executionDetailsTabs = [
    {
        key: "details",
        label: "Details",
        render: (execution) => React.createElement(ExecutionDetails, { execution: execution }),
    },
];
export default executionDetailsTabs;
