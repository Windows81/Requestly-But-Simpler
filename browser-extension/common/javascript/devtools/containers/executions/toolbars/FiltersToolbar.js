import { Input } from "antd";
import React, { useCallback } from "react";
import { ResourceTypeFilter } from "../../../components/ResourceTypeFilter";
const FiltersToolbar = ({ filters, onFiltersChange }) => {
    const onUrlFilterChange = useCallback((newUrlFilter) => {
        onFiltersChange({
            ...filters,
            url: newUrlFilter,
        });
    }, [filters]);
    const onRuleNameFilterChange = useCallback((newRuleNameFilter) => {
        onFiltersChange({
            ...filters,
            ruleName: newRuleNameFilter,
        });
    }, [filters]);
    const onResourceTypeFilterChange = useCallback((newResourceTypeFilter) => {
        onFiltersChange({
            ...filters,
            resourceType: newResourceTypeFilter,
        });
    }, [filters]);
    return (React.createElement("div", { className: "executions-toolbar filters" },
        React.createElement(Input, { className: "url-filter", addonBefore: "URL", placeholder: "Filter by URL", value: filters.url, onChange: (e) => onUrlFilterChange(e.target.value), allowClear: true }),
        React.createElement(Input, { className: "rule-filter", addonBefore: "Rule name", placeholder: "Filter by Rule name", value: filters.ruleName, onChange: (e) => onRuleNameFilterChange(e.target.value), allowClear: true }),
        React.createElement(ResourceTypeFilter, { value: filters.resourceType, onChange: onResourceTypeFilterChange })));
};
export default FiltersToolbar;
