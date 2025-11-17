class ExtensionStorageClient {
  /** get */
  async getStorageObject(key) {
    Logger.log("[ExtensionStorageClient] getStorageObject", { key });
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({ action: "GET_STORAGE_OBJECT", key }, resolve);
    });
  }
  /** getAll */
  async getStorageSuperObject() {
    Logger.log("[ExtensionStorageClient] getStorageSuperObject");
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({ action: "GET_STORAGE_SUPER_OBJECT" }, resolve);
    });
  }
  /** Save Multiple */
  async saveStorageObject(object) {
    Logger.log("[ExtensionStorageClient] saveStorageObject", { object });
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({ action: "SAVE_STORAGE_OBJECT", object }, resolve);
    });
  }
  /** Remove */
  async removeStorageObject(key) {
    Logger.log("[ExtensionStorageClient] removeStorageObject", { key });
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({ action: "REMOVE_STORAGE_OBJECT", key }, resolve);
    });
  }
  /** Remove Multiple */
  // the underlying implementation is same as removeStorageObject for extension
  // hence key=array to make it consistent
  // reference to chrome API which accepts (string | array)
  // https://developer.chrome.com/docs/extensions/reference/storage/#:~:text=Promise-,Removes,-one%20or%20more
  async removeStorageObjects(keys) {
    Logger.log("[ExtensionStorageClient] removeStorageObjects", { keys });
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({ action: "REMOVE_STORAGE_OBJECT", key: keys }, resolve);
    });
  }
  /** Reset */
  async clearStorage() {
    Logger.log("[ExtensionStorageClient] clearStorage");
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({ action: "CLEAR_STORAGE" }, resolve);
    });
  }
}

window.ExtensionStorageClient ??= ExtensionStorageClient;
