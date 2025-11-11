import React, { useMemo, useContext, createContext, useReducer, useEffect, useCallback } from "react";
import { EXTENSION_MESSAGES } from "../../../constants";
import { recordsInitialState, recordsReducer } from "./recordsReducer";
import { RecordsActionType } from "./types";
import { saveRecord } from "../../../storage";
import { updateLastUpdatedTS } from "../../../utils";
const RecordsContext = createContext(null);
export const RecordsProvider = ({ children }) => {
    const [{ rules, groups }, recordsDispatch] = useReducer(recordsReducer, recordsInitialState);
    useEffect(() => {
        chrome.runtime.sendMessage({ action: EXTENSION_MESSAGES.GET_RULES_AND_GROUPS }, (records) => {
            recordsDispatch({
                type: RecordsActionType.INITIALIZE_RULES_AND_GROUPS,
                payload: records,
            });
        });
    }, []);
    const updateRule = useCallback((updatedRule, isUpdateFromPinnedRecords = false) => {
        const updatedRuleCopy = { ...updatedRule };
        delete updatedRuleCopy.isRemoved;
        saveRecord(updatedRuleCopy.id, updatedRuleCopy);
        recordsDispatch({
            type: RecordsActionType.UPDATE_RULE,
            payload: { rule: updatedRule, isUpdateFromPinnedRecords },
        });
        updateLastUpdatedTS();
        chrome.runtime.sendMessage({
            action: EXTENSION_MESSAGES.NOTIFY_RECORD_UPDATED_IN_POPUP,
        });
    }, []);
    const updateGroup = useCallback((updatedGroup) => {
        const updatedGroupCopy = { ...updatedGroup };
        delete updatedGroupCopy.isRemoved;
        saveRecord(updatedGroupCopy.id, updatedGroupCopy);
        recordsDispatch({
            type: RecordsActionType.UPDATE_GROUP,
            payload: updatedGroup,
        });
        updateLastUpdatedTS();
        chrome.runtime.sendMessage({
            action: EXTENSION_MESSAGES.NOTIFY_RECORD_UPDATED_IN_POPUP,
        });
    }, []);
    const pinnedGroups = useMemo(() => Object.values(groups).reduce((pinnedGroups, group) => group.isFavourite || (!group.isFavourite && group.isRemoved)
        ? [
            ...pinnedGroups,
            {
                ...group,
                children: Object.values(rules).filter((rule) => rule.groupId === group.id),
            },
        ]
        : pinnedGroups, []), [rules, groups]);
    const pinnedRules = useMemo(() => {
        const groupIdSet = pinnedGroups.reduce((result, group) => result.add(group.id), new Set());
        return Object.values(rules).filter((rule) => !groupIdSet.has(rule.groupId) && (rule.isFavourite || (!rule.isFavourite && rule.isRemoved)));
    }, [rules, groups]);
    const values = useMemo(() => ({
        rules,
        groups,
        updateRule,
        updateGroup,
        pinnedRules,
        pinnedGroups,
        recordsDispatch,
    }), [rules, groups, pinnedRules, pinnedGroups]);
    return React.createElement(RecordsContext.Provider, { value: values }, children);
};
export const useRecords = () => useContext(RecordsContext);
