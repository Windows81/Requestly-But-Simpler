import { ObjectType, Status } from "./types";
import { ChangeType, getAllRecords, getRecord, onRecordChange } from "./storage";
const isRule = (record) => {
    return record && (!!record.ruleType || record.objectType === ObjectType.RULE);
};
const isGroup = (record) => {
    return record && record.objectType === ObjectType.GROUP;
};
export const getRules = async () => {
    const records = await getAllRecords();
    return records.filter(isRule);
};
export const getGroups = async () => {
    const records = (await getAllRecords());
    return records.filter(isGroup);
};
export const getRule = async (id) => {
    return getRecord(id);
};
export const getEnabledRules = async (ruleType) => {
    const rules = await getRules();
    const groups = await getGroups();
    return rules.filter((rule) => {
        if (!rule.status || rule.status === Status.INACTIVE) {
            return false;
        }
        if (ruleType && rule.ruleType !== ruleType) {
            return false;
        }
        if (!rule.groupId) {
            return true;
        }
        const group = groups.find((group) => group.id === rule.groupId);
        if (group.status === Status.ACTIVE) {
            return true;
        }
        return false;
    });
};
export const onRuleOrGroupChange = (listener) => {
    onRecordChange({
        valueFilter: isRule,
    }, (ruleChanges) => {
        const shouldTriggerRuleChange = ruleChanges.some(({ changeType, oldValue, newValue }) => {
            if (changeType === ChangeType.CREATED && newValue.status === Status.ACTIVE) {
                return true;
            }
            if (changeType === ChangeType.DELETED && oldValue.status === Status.ACTIVE) {
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
export const checkIfNoRulesPresent = async () => {
    const rules = await getRules();
    return rules.length === 0;
};
export const getRulesAndGroups = async () => {
    const [rules, groups] = await Promise.all([getRules(), getGroups()]);
    return { rules, groups };
};
