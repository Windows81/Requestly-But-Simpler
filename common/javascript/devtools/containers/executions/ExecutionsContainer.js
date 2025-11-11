import React, { useCallback, useEffect, useRef, useState } from "react";
import { PrimaryToolbar, FiltersToolbar } from "./toolbars";
import EmptyContainerPlaceholder from "../../components/EmptyContainerPlaceholder/EmptyContainerPlaceholder";
import { ResourceTable } from "@requestly-ui/resource-table";
import { ResourceTypeFilterValue } from "../../components/ResourceTypeFilter";
import executionTableColumns, { EXECUTION_TABLE_COLUMN_IDS } from "./columns";
import executionDetailsTabs from "./details-tabs";
import { getResourceType } from "./utils";
import { getCurrentColorScheme, matchResourceTypeFilter } from "../../utils";
import "./executionsContainer.scss";
const ExecutionsContainer = () => {
    const [executionEvents, setExecutionEvents] = useState([]);
    const [filters, setFilters] = useState({
        url: "",
        resourceType: ResourceTypeFilterValue.ALL,
        ruleName: "",
    });
    const [settings, setSettings] = useState({
        preserveLog: false,
    });
    const preserveLogRef = useRef(false);
    const clearEvents = useCallback(() => {
        setExecutionEvents([]);
    }, []);
    useEffect(() => {
        preserveLogRef.current = settings.preserveLog;
    }, [settings]);
    useEffect(() => {
        const bgPortConnection = chrome.runtime.connect({ name: "rq_devtools" });
        // Send a heartbeat message to the background script every 15 seconds to keep the connection alive
        setInterval(() => {
            bgPortConnection.postMessage("heartbeat");
        }, 15000);
        bgPortConnection.onMessage.addListener((executionEvent) => {
            setExecutionEvents((executionEvents) => [
                ...executionEvents,
                {
                    ...executionEvent,
                    _resourceType: getResourceType(executionEvent.requestType),
                },
            ]);
        });
        chrome.devtools.network.onNavigated.addListener(() => {
            if (!preserveLogRef.current) {
                clearEvents();
            }
        });
        bgPortConnection.postMessage({
            action: "registerDevTool",
            tabId: chrome.devtools.inspectedWindow.tabId,
        });
    }, [clearEvents]);
    const filterExecutions = useCallback((execution) => {
        if (filters.url && !execution.requestURL.toLowerCase().includes(filters.url.toLowerCase())) {
            return false;
        }
        if (filters.resourceType && !matchResourceTypeFilter(execution._resourceType, filters.resourceType)) {
            return false;
        }
        if (filters.ruleName && !execution.rule.name.toLowerCase().includes(filters.ruleName.toLowerCase())) {
            return false;
        }
        return true;
    }, [filters]);
    return (React.createElement("div", { className: "executions-container" },
        React.createElement(PrimaryToolbar, { clearEvents: clearEvents, settings: settings, onSettingsChange: setSettings }),
        executionEvents.length > 0 ? (React.createElement(React.Fragment, null,
            React.createElement(FiltersToolbar, { filters: filters, onFiltersChange: setFilters }),
            React.createElement(ResourceTable, { colorScheme: getCurrentColorScheme(), resources: executionEvents, columns: executionTableColumns, primaryColumnKeys: [EXECUTION_TABLE_COLUMN_IDS.URL], detailsTabs: executionDetailsTabs, filter: filterExecutions }))) : (React.createElement(EmptyContainerPlaceholder, { lines: [
                "Recording rule executions...",
                "Perform a request or Reload the page to see network requests intercepted and modified by Requestly.",
            ] }))));
};
export default ExecutionsContainer;
