import { useState } from "react";
const STORE_PROPERTY = "rq-devtools";
const getFromStore = (key) => {
    try {
        const store = JSON.parse(window.localStorage.getItem(STORE_PROPERTY) || "{}");
        return store[key];
    }
    catch (e) {
        return undefined;
    }
};
const saveToStore = (key, value) => {
    try {
        let store = JSON.parse(window.localStorage.getItem(STORE_PROPERTY) || "{}");
        store = { ...store, [key]: value };
        window.localStorage.setItem(STORE_PROPERTY, JSON.stringify(store));
    }
    catch (e) { }
};
const useLocalStorageState = (key, initialValue) => {
    const valueFromStore = getFromStore(key);
    const [value, setValue] = useState(typeof valueFromStore === "undefined" ? initialValue : valueFromStore);
    const setValueAndSave = (val) => {
        setValue(val);
        saveToStore(key, val);
    };
    return [value, setValueAndSave];
};
export default useLocalStorageState;
