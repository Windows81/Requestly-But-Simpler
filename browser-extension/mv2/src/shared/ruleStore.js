const STORAGE_TYPE = RQ.STORAGE_TYPE;

RQ.RulesStore.getSuperObject = async () => {
    return new Promise((resolve) => {
        chrome.storage[STORAGE_TYPE].get(null, resolve);
    });
};
RQ.RulesStore.getAllRecords = async () => {
    const superObject = await getSuperObject();
    return Object.values(superObject).filter((val) => !!val);
};
RQ.RulesStore.saveObject = async (object) => {
    await chrome.storage[STORAGE_TYPE].set(object);
};
RQ.RulesStore.saveRecord = async (key, record) => {
    await saveObject({ [key]: record });
};
RQ.RulesStore.getRecord = async (key) => {
    return new Promise((resolve) => {
        chrome.storage[STORAGE_TYPE].get(key, (records) => resolve(records[key]));
    });
};
RQ.RulesStore.getRecords = async (keys) => {
    const records = await chrome.storage[STORAGE_TYPE].get(keys);
    return Object.values(records);
};
RQ.RulesStore.removeRecord = async (key) => {
    await chrome.storage[STORAGE_TYPE].remove(key);
};
RQ.RulesStore.clearAllRecords = async () => {
    await chrome.storage[STORAGE_TYPE].clear();
};
export var ChangeType;
(function (ChangeType) {
    ChangeType[ChangeType["MODIFIED"] = 0] = "MODIFIED";
    ChangeType[ChangeType["CREATED"] = 1] = "CREATED";
    ChangeType[ChangeType["DELETED"] = 2] = "DELETED";
})(ChangeType || (ChangeType = {}));
RQ.RulesStore.onRecordChange = (filters, callback) => {
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

const isRule = (record) => {
	return record && (!!record.ruleType || record.objectType === RQ.OBJECT_TYPES.RULE);
};
const isGroup = (record) => {
	return record && record.objectType === RQ.OBJECT_TYPES.GROUP;
};
RQ.RulesStore.getRules = async () => {
	const records = await getAllRecords();
	return records.filter(isRule);
};
RQ.RulesStore.getGroups = async () => {
	const records = (await getAllRecords());
	return records.filter(isGroup);
};
RQ.RulesStore.getRule = async (id) => {
	return getRecord(id);
};
RQ.RulesStore.getEnabledRules = async (ruleType) => {
	const rules = await getRules();
	const groups = await getGroups();
	return rules.filter((rule) => {
		if (!rule.status || rule.status === RQ.RULE_STATUS.INACTIVE) {
			return false;
		}
		if (ruleType && rule.ruleType !== ruleType) {
			return false;
		}
		if (!rule.groupId) {
			return true;
		}
		const group = groups.find((group) => group.id === rule.groupId);
		if (group.status === RQ.GROUP_STATUS.ACTIVE) {
			return true;
		}
		return false;
	});
};
RQ.RulesStore.onRuleOrGroupChange = (listener) => {
	onRecordChange({
		valueFilter: isRule,
	}, (ruleChanges) => {
		const shouldTriggerRuleChange = ruleChanges.some(({ changeType, oldValue, newValue }) => {
			if (changeType === ChangeType.CREATED && newValue.status === RQ.RULE_STATUS.ACTIVE) {
				return true;
			}
			if (changeType === ChangeType.DELETED && oldValue.status === RQ.RULE_STATUS.ACTIVE) {
				return true;
			}
			if (changeType === ChangeType.MODIFIED) {
				return true;
			}
			return false;
		});
		if (shouldTriggerRuleChange) {
			listener();
		}
	});
	onRecordChange({
		valueFilter: isGroup,
		changeTypes: [ChangeType.MODIFIED], // for newly created or deleted group, there will already be a groupId change in rule
	}, (groupChanges) => {
		const shouldTriggerGroupChange = groupChanges.some(({ oldValue, newValue }) => {
			return oldValue.status !== newValue.status;
		});
		if (shouldTriggerGroupChange) {
			listener();
		}
	});
};
RQ.RulesStore.checkIfNoRulesPresent = async () => {
	const rules = await getRules();
	return rules.length === 0;
};
RQ.RulesStore.getRulesAndGroups = async () => {
	const [rules, groups] = await Promise.all([getRules(), getGroups()]);
	return { rules, groups };
};
