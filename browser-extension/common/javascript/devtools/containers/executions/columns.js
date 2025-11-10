export var EXECUTION_TABLE_COLUMN_IDS;
(function (EXECUTION_TABLE_COLUMN_IDS) {
    EXECUTION_TABLE_COLUMN_IDS["URL"] = "url";
    EXECUTION_TABLE_COLUMN_IDS["METHOD"] = "method";
    EXECUTION_TABLE_COLUMN_IDS["TYPE"] = "type";
    EXECUTION_TABLE_COLUMN_IDS["RULE"] = "rule";
})(EXECUTION_TABLE_COLUMN_IDS || (EXECUTION_TABLE_COLUMN_IDS = {}));
const executionTableColumns = [
    {
        key: EXECUTION_TABLE_COLUMN_IDS.URL,
        header: "URL",
        render: (execution) => execution.requestURL,
    },
    {
        key: EXECUTION_TABLE_COLUMN_IDS.METHOD,
        header: "Method",
        width: 6,
        render: (execution) => execution.requestMethod,
    },
    {
        key: EXECUTION_TABLE_COLUMN_IDS.TYPE,
        header: "Type",
        width: 10,
        render: (execution) => execution._resourceType,
    },
    {
        key: EXECUTION_TABLE_COLUMN_IDS.RULE,
        header: "Rule",
        width: 30,
        render: (execution) => execution.rule.name,
    },
];
export default executionTableColumns;
