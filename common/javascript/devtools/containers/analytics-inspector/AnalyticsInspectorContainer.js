import React, { useCallback, useEffect, useRef, useState } from "react";
import EmptyContainerPlaceholder from "../../components/EmptyContainerPlaceholder/EmptyContainerPlaceholder";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import getAnalyticsVendorsRegistry from "src/vendors";
import { VendorEventPanel } from "./components/VendorEventPanel/VendorEventPanel";
import { PrimaryToolbar } from "./toolbars";
import "./analyticsInspectorContainer.scss";
const AnalyticsInspectorContainer = () => {
    const analyticsVendorsRegistry = getAnalyticsVendorsRegistry();
    const [vendorEvents, setVendorEvents] = useState({});
    const [settings, setSettings] = useState({
        preserveLog: false,
    });
    const preserveLogRef = useRef(false);
    const clearEvents = useCallback(() => {
        setVendorEvents({});
    }, []);
    useEffect(() => {
        chrome.devtools.network.onRequestFinished.addListener((networkEvent) => {
            const vendor = analyticsVendorsRegistry.getInstance().getVendorByUrl(networkEvent.request.url);
            // If there is no matching vendor for this network request, do nothing.
            if (!vendor)
                return;
            setVendorEvents((prev) => {
                const existingEvents = prev[vendor.name] || [];
                return { ...prev, [vendor.name]: [...existingEvents, networkEvent] };
            });
        });
        chrome.devtools.network.onNavigated.addListener(() => {
            if (!preserveLogRef.current) {
                clearEvents();
            }
        });
    }, [clearEvents]);
    useEffect(() => {
        preserveLogRef.current = settings.preserveLog;
    }, [settings]);
    return (React.createElement("div", { className: "analytics-inspector-container" },
        React.createElement(PrimaryToolbar, { clearEvents: clearEvents, settings: settings, onSettingsChange: setSettings }),
        Object.keys(vendorEvents).length === 0 ? (React.createElement(EmptyContainerPlaceholder, { lines: [
                "Recording Analytics events...",
                "We only support a few analytics providers right now. More providers will be added soon.",
                React.createElement("div", { className: "add-vendor-link", onClick: () => {
                        window.open("https://github.com/requestly/requestly/issues/2179", "_blank", "noopener,noreferrer");
                    } }, "Is your platform missing? Request to add your analytics provider."),
            ] })) : (React.createElement("div", { className: "vendor-events-container" }, Object.keys(vendorEvents).map((vendor) => {
            const vendorInstance = analyticsVendorsRegistry.getInstance().getVendorByName(vendor);
            return (React.createElement(Collapse, { key: vendor, className: "vendor-event-details", expandIcon: ({ isActive }) => React.createElement(CaretRightOutlined, { rotate: isActive ? 90 : 0 }) },
                React.createElement(Collapse.Panel, { key: vendor, header: React.createElement("div", { className: "vendor-events-collapse-header" },
                        React.createElement("span", { className: "vendor-icon", dangerouslySetInnerHTML: { __html: vendorInstance.icon } }),
                        React.createElement("span", { className: "vendor-name" }, vendor)) }, vendorEvents[vendor].map((event, index) => {
                    const eventDetails = vendorInstance.getEventDetails(event);
                    return React.createElement(VendorEventPanel, { key: index, vendorName: vendor, eventDetails: eventDetails });
                }))));
        })))));
};
export default AnalyticsInspectorContainer;
