import config from "../config";
import { ResourceTypeFilterValue } from "./components/ResourceTypeFilter";
import { EVENT, sendEvent } from "./events";
import { ColorScheme, NetworkResourceType } from "./types";
const REQUESTLY_POST_MESSAGE_AUTHOR = "requestly";
export const createRule = (ruleTypeUrlFragment, initRuleData, inputSelectorToFocus) => {
    sendEvent(EVENT.RULE_CREATION_WORKFLOW_STARTED, { rule_type: ruleTypeUrlFragment });
    const editorUrl = `${config.WEB_URL}/rules/editor/create/${ruleTypeUrlFragment}?source=devtool`;
    let editorWindow;
    const onMessageReceived = (event) => {
        const { author, action, payload } = event.data;
        const { ruleData } = payload;
        if (author === REQUESTLY_POST_MESSAGE_AUTHOR && action === "ruleEditor:ready") {
            initRuleData(ruleData); // in-place update on ruleData
            editorWindow?.postMessage({
                author: REQUESTLY_POST_MESSAGE_AUTHOR,
                action: "ruleEditor:loadData",
                payload: {
                    ruleData,
                    inputSelectorToFocus,
                },
            }, config.WEB_URL);
            window.removeEventListener("message", onMessageReceived);
        }
    };
    window.addEventListener("message", onMessageReceived);
    editorWindow = window.open(editorUrl, "_blank");
};
export const getHostFromUrl = (url, includeScheme) => {
    const parsedUrl = new URL(url);
    return includeScheme ? parsedUrl.origin : parsedUrl.host;
};
export const getBaseUrl = (url) => {
    const parsedUrl = new URL(url);
    return parsedUrl.origin + parsedUrl.pathname;
};
export const getPageOrigin = () => {
    return new Promise((resolve) => {
        chrome.devtools.inspectedWindow.eval("window.location.origin", resolve);
    });
};
export const getCurrentColorScheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)")?.matches ? ColorScheme.DARK : ColorScheme.LIGHT;
};
export const generateRuleName = (modification) => {
    const words = modification.split(" ").map((word) => word.toLowerCase());
    return [...words, Date.now()].join("-");
};
export const onColorSchemeChange = (callback) => {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
        callback(e.matches ? ColorScheme.DARK : ColorScheme.LIGHT);
    });
};
export const isExtensionManifestV3 = () => {
    return chrome.runtime.getManifest()["manifest_version"] === 3;
};
export const matchResourceTypeFilter = (networkResourceType, filter) => {
    switch (filter) {
        case ResourceTypeFilterValue.ALL:
            return true;
        case ResourceTypeFilterValue.AJAX:
            return [NetworkResourceType.FETCH, NetworkResourceType.XHR].includes(networkResourceType);
        case ResourceTypeFilterValue.JS:
            return networkResourceType === NetworkResourceType.JS;
        case ResourceTypeFilterValue.CSS:
            return networkResourceType === NetworkResourceType.CSS;
        case ResourceTypeFilterValue.IMG:
            return networkResourceType === NetworkResourceType.IMG;
        case ResourceTypeFilterValue.MEDIA:
            return networkResourceType === NetworkResourceType.MEDIA;
        case ResourceTypeFilterValue.FONT:
            return networkResourceType === NetworkResourceType.FONT;
        case ResourceTypeFilterValue.DOC:
            return networkResourceType === NetworkResourceType.DOC;
        case ResourceTypeFilterValue.WS:
            return networkResourceType === NetworkResourceType.WEBSOCKET;
        case ResourceTypeFilterValue.WASM:
            return networkResourceType === NetworkResourceType.WASM; // TODO
        case ResourceTypeFilterValue.MANIFEST:
            return networkResourceType === NetworkResourceType.MANIFEST; // TODO
        case ResourceTypeFilterValue.OTHER:
            return true;
    }
};
export const getNetworkResourceType = (networkEvent) => {
    const mimeType = networkEvent?.response?.content?.mimeType;
    if (!mimeType)
        return NetworkResourceType.OTHER;
    if (mimeType.startsWith("text/html"))
        return NetworkResourceType.DOC;
    if (mimeType.startsWith("text/css"))
        return NetworkResourceType.CSS;
    if (mimeType.startsWith("image/"))
        return NetworkResourceType.IMG;
    if (mimeType.startsWith("text/"))
        return NetworkResourceType.JS;
    if (mimeType.includes("font"))
        return NetworkResourceType.FONT;
    if (mimeType.includes("script"))
        return NetworkResourceType.JS;
    if (mimeType.includes("octet"))
        return NetworkResourceType.OTHER;
    if (mimeType.includes("application"))
        return NetworkResourceType.JS;
    return NetworkResourceType.OTHER;
};
export const enrichNetworkEvent = (networkEvent) => {
    networkEvent._resourceType ??= getNetworkResourceType(networkEvent);
};
export const isRequestBodyParseable = (mimeType) => {
    if (mimeType && mimeType.startsWith("application/json")) {
        return true;
    }
    return false;
};
export const isContentBodyEditable = (networkResourceType) => {
    if (matchResourceTypeFilter(networkResourceType, ResourceTypeFilterValue.AJAX)) {
        return true;
    }
    return false;
};
