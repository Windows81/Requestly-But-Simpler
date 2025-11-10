import { ChangeType, getRecord, onRecordChange, saveRecord } from "common/storage";
export var Variable;
(function (Variable) {
    Variable["IS_EXTENSION_ENABLED"] = "isExtensionEnabled";
})(Variable || (Variable = {}));
const getStorageKey = (variableName) => `rq_var_${variableName}`;
export const setVariable = async (name, value) => {
    await saveRecord(getStorageKey(name), value);
};
export const getVariable = async (name, defaultValue) => {
    return (await getRecord(getStorageKey(name))) ?? defaultValue;
};
export const onVariableChange = (name, callback) => {
    onRecordChange({
        keyFilter: getStorageKey(name),
        changeTypes: [ChangeType.MODIFIED],
    }, (changes) => {
        callback(changes[changes.length - 1].newValue, changes[0].oldValue);
    });
};
