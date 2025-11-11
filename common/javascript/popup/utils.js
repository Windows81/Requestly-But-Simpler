export const isExtensionManifestV3 = () => {
    return chrome.runtime.getManifest()["manifest_version"] === 3;
};
export const updateItemInCollection = (collection, updatedItem) => {
    return collection.map((item) => (item.id === updatedItem.id ? updatedItem : item));
};
export const getExtensionVersion = () => {
    return chrome.runtime.getManifest().version;
};
