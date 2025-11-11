import blueCoreIcon from "../../icons/bluecore-icon.svg";
import { getDecodedBase64Data } from "../utils";
export class BlueCore {
    name = "BlueCore";
    icon = blueCoreIcon;
    urlPatterns = ["api.bluecore.app/api/track", "onsitestats.bluecore.com/events"];
    identify(url, method) {
        // TODO: Identify using url + method
        return this.urlPatterns.some((pattern) => url.includes(pattern));
    }
    getGetRequestPayload(event) {
        // TODO: Each url can have variations for payload, ie for some URL payload key can be different
        const url = event.request.url;
        const params = new URLSearchParams(url);
        const base64Data = params.get("stats_type");
        const eventDetails = getDecodedBase64Data(base64Data);
        // Match schema with post method payload
        return { event: eventDetails?.event_type, properties: eventDetails };
    }
    getPostRequestPayload(event) {
        const postData = event.request.postData;
        if (!postData) {
            return null;
        }
        if (!postData.mimeType.includes("urlencoded")) {
            return null;
        }
        const params = new URLSearchParams(postData.text);
        const base64Data = params.get("data");
        const eventDetails = getDecodedBase64Data(base64Data);
        return eventDetails;
    }
    getEventPayloadByMethod(event) {
        switch (event.request.method) {
            case "GET": {
                return this.getGetRequestPayload(event);
            }
            case "POST": {
                return this.getPostRequestPayload(event);
            }
            default: {
                return null;
            }
        }
    }
    groupEventProperties(event) {
        if (!event) {
            return null;
        }
        const parentGroupMapping = {
            products: {
                properties: { products: { label: "Product" } },
            },
            event: { properties: { token: { label: "Token" } } },
            device: {
                properties: {
                    os: { label: "OS" },
                    browser: { label: "Browser" },
                    device: { label: "Device" },
                },
            },
            user: {
                properties: {
                    distinct_id: { label: "Distinct ID" },
                    original_user_type: { label: "Original User Type" },
                    current_user_type: { label: "Type" },
                    session_pvc: { label: "Session PVC" },
                    day_pvc: { label: "Day PVC" },
                },
            },
            source: {
                properties: {
                    mp_lib: { label: "Library" },
                    url: { label: "URL" },
                    bc_source_detail: { label: "BC Source Detail" },
                    bc_source_medium: { label: "BC Source Medium" },
                    event_source: { label: "Event Source" },
                },
            },
            metadata: { properties: { bc_track_metadata_trigger: { label: "Track Metadata Trigger" } } },
            miscellaneous: {
                properties: {
                    bc_track_metadata_product_attributes: { label: "bc_track_metadata_product_attributes" },
                    bc_track_metadata_trigger: { label: "bc_track_metadata_trigger" },
                    integration_version: { label: "integration_version" },
                    session_id_v2: { label: "session_id_v2" },
                },
            },
        };
        const result = Object.entries(event.properties).reduce((result, [eventKey, eventValue]) => {
            Object.keys(parentGroupMapping).forEach((groupkey) => {
                const isExist = Object.keys(parentGroupMapping[groupkey].properties).find((propertyKey) => {
                    return eventKey === propertyKey;
                });
                const eventLabel = parentGroupMapping[groupkey]?.properties?.[eventKey]?.label ?? eventKey;
                result = isExist
                    ? {
                        ...result,
                        [groupkey]: {
                            ...(result[groupkey] ?? {}),
                            [eventLabel]: eventValue,
                        },
                    }
                    : result;
            });
            return result;
        }, {});
        // rawEvent for rendering it as a json
        return { event: event.event, properties: result, rawEvent: event };
    }
    getEventDetails(event) {
        const payload = this.getEventPayloadByMethod(event);
        if (!payload) {
            return null;
        }
        return this.groupEventProperties(payload);
    }
}
