const generateObjectId = () => {
  return Math.random().toString(36).substring(2, 5);
};

window.ExtensionStorageClient = class {
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
};

window.ClientStorageService = class {
  static appMode = RQ.APP_MODES.EXTENSION;
  static StorageHelper = new ExtensionStorageClient();
  static primaryKeys = ["objectType", "ruleType"];

  static saveRecordWithID = this.saveRecordWithID.bind(this);
  static saveRecord = this.saveRecord.bind(this);
  static getRecord = this.getRecord.bind(this);
  static getRecords = this.getRecords.bind(this);

  static transactionQueue = new Set(); // promises of transactions that are still pending
  static transactionLedger = new Map(); // optional: helpful only in putting console logs

  static trackPromise(promise) {
    const id = generateObjectId();
    console.log("promise id", id);

    this.transactionQueue.add(promise);
    this.transactionLedger.set(promise, { id, startTime: Date.now() });

    promise.finally(() => {
      const endTime = Date.now();
      const ledgerEntry = this.transactionLedger.get(promise);
      console.log(`Promise resolved: ${ledgerEntry.id}, Duration: ${endTime - ledgerEntry.startTime}ms`);

      this.transactionQueue.delete(promise);
      this.transactionLedger.delete(promise);
    });
  }

  static async waitForAllTransactions() {
    await Promise.allSettled([...this.transactionQueue]);
    this.transactionQueue.clear();
    this.transactionLedger.clear();
  }

  static getAllRecords() {
    return this.StorageHelper.getStorageSuperObject();
  }

  static hasPrimaryKey(record) {
    if (typeof record === "object" && !Array.isArray(record) && record !== null) {
      for (let index = 0; index < this.primaryKeys.length; index++) {
        if (typeof record[this.primaryKeys[index]] !== "undefined") {
          return true;
        }
      }
    }
    return false;
  }

  static getRecords(objectType) {
    const self = this;
    return new Promise((resolve) => {
      this.StorageHelper.getStorageSuperObject().then((superObject) => {
        const myArr = [];
        for (let key in superObject) {
          // clear out everything that is not an object with a primary key - eventually allows only rules & groups
          if (self.hasPrimaryKey(superObject[key])) {
            myArr.push(superObject[key]);
          }
        }
        resolve(self.filterRecordsByType(myArr, objectType));
      });
    });
  }

  static filterRecordsByType(records, requestedObjectType) {
    if (!requestedObjectType) {
      return records;
    }

    return records.filter((record) => {
      let objectType = record.objectType || RQ.OBJECT_TYPES.RULE;
      return objectType === requestedObjectType;
    });
  }

  static async saveRecord(object) {
    await this.StorageHelper.saveStorageObject(object); // writes to Extension or Desktop storage
    return Object.values(object)[0]; // why???
  }

  /**
   * @param ruleOrGroup rule or group
   * @param options options for save operation
   * @param {boolean} options.silentUpdate do not update last modified timestamp
   * @param {string} options.workspaceId workspace identifier
   * @returns a promise on save of the rule or group
   */
  static async saveRuleOrGroup(ruleOrGroup, options = {}) {
    const formattedObject = {
      [ruleOrGroup.id]: {
        ...ruleOrGroup,
        modificationDate: options.silentUpdate ? ruleOrGroup?.modificationDate : new Date().getTime(),
      },
    };
    const promise = this.saveRecord(formattedObject);
    this.trackPromise(promise);
    return promise;
  }

  static async saveMultipleRulesOrGroups(array, options = {}) {
    const formattedObject = {};
    array.forEach((object) => {
      if (object && object.id) formattedObject[object.id] = object;
    });
    const promise = this.saveRecord(formattedObject);
    this.trackPromise(promise);
    return promise;
  }

  /**
   * Saves the object which contains ID so that we do not need to specify id as the key and whole object as value
   * @param object
   * @returns {Promise<any>}
   */
  static async saveRecordWithID(object) {
    await this.StorageHelper.saveStorageObject({ [object.id]: object });
  }

  static getRecord(key) {
    return this.StorageHelper.getStorageObject(key);
  }

  static async removeRecord(key) {
    try {
      this.trackPromise(this.StorageHelper.removeStorageObject(key));
    } catch (error) {
      console.error("Error removing record:", error);
    }
  }

  static async removeRecords(array) {
    try {
      this.trackPromise(this.StorageHelper.removeStorageObjects(array));
      return removalResult;
    } catch (error) {
      console.error("Error removing record:", error);
      throw error;
    }
  }

  static removeRecordsWithoutSyncing(array) {
    return this.StorageHelper.removeStorageObjects(array);
  }

  static printRecords() {
    this.StorageHelper.getStorageSuperObject().then(function (superObject) {
      console.log(superObject);
    });
  }

  static async clearDB() {
    await this.StorageHelper.clearStorage();
  }

  static saveConsoleLoggerState(state) {
    const consoleLoggerState = {
      [RQ.CONSOLE_LOGGER_ENABLED]: state,
    };
    this.StorageHelper.saveStorageObject(consoleLoggerState);
  }
};
