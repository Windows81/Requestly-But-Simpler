import { injectWebAccessibleScript } from "./utils";
export const initCustomWidgets = (tabId, frameId) => {
    injectWebAccessibleScript("libs/customElements.js", { tabId, frameIds: [frameId] });
};
