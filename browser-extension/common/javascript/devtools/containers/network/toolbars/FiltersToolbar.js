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
    const onResourceTypeFilterChange = useCallback((newResourceTypeFilter) => {
        onFiltersChange({
            ...filters,
            resourceType: newResourceTypeFilter,
        });
    }, [filters]);
    return (React.createElement("div", { className: "network-toolbar filters" },
        React.createElement(Input, { className: "url-filter", placeholder: "Filter", value: filters.url, onChange: (e) => onUrlFilterChange(e.target.value), allowClear: true }),
        React.createElement(ResourceTypeFilter, { value: filters.resourceType, onChange: onResourceTypeFilterChange })));
};
export default FiltersToolbar;
