import { STORAGE_TYPE } from "./constants";
export const getSuperObject = async () => {
    return new Promise((resolve) => {
        chrome.storage[STORAGE_TYPE].get(null, resolve);
    });
};
export const getAllRecords = async () => {
    const superObject = await getSuperObject();
    return Object.values(superObject).filter((val) => !!val);
};
export const saveObject = async (object) => {
    await chrome.storage[STORAGE_TYPE].set(object);
};
export const saveRecord = async (key, record) => {
    await saveObject({ [key]: record });
};
export const getRecord = async (key) => {
    return new Promise((resolve) => {
        chrome.storage[STORAGE_TYPE].get(key, (records) => resolve(records[key]));
    });
};
export const getRecords = async (keys) => {
    const records = await chrome.storage[STORAGE_TYPE].get(keys);
    return Object.values(records);
};
export const removeRecord = async (key) => {
    await chrome.storage[STORAGE_TYPE].remove(key);
};
export const clearAllRecords = async () => {
    await chrome.storage[STORAGE_TYPE].clear();
};
export var ChangeType;
(function (ChangeType) {
    ChangeType[ChangeType["MODIFIED"] = 0] = "MODIFIED";
    ChangeType[ChangeType["CREATED"] = 1] = "CREATED";
    ChangeType[ChangeType["DELETED"] = 2] = "DELETED";
})(ChangeType || (ChangeType = {}));
export const onRecordChange = (filters, callback) => {
    chrome.storage.onChanged.addListener((storeChanges, areaName) => {
        if (areaName === STORAGE_TYPE) {
            const changes = [];
            Object.entries(storeChanges).forEach(([key, storeChange]) => {
                let changeType;
                let testValue;
                if (typeof storeChange.newValue !== "undefined") {
                    if (typeof storeChange.oldValue !== "undefined") {
                        changeType = ChangeType.MODIFIED;
                    }
                    else {
                        changeType = ChangeType.CREATED;
                    }
                    testValue = storeChange.newValue;
                }
                else if (typeof storeChange.oldValue !== "undefined") {
                    changeType = ChangeType.DELETED;
                    testValue = storeChange.oldValue;
                }
                else {
                    return;
                }
                if (filters?.changeTypes?.length && !filters.changeTypes.includes(changeType)) {
                    return;
                }
                if (filters?.keyFilter && key !== filters.keyFilter) {
                    return;
                }
                if (filters?.valueFilter && !filters.valueFilter(testValue)) {
                    return;
                }
                changes.push({ changeType, key, ...storeChange });
            });
            if (changes.length) {
                callback(changes);
            }
        }
    });
};
