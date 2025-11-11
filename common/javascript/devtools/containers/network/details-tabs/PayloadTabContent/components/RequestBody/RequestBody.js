import React from "react";
import { ObjectInspector } from "@devtools-ds/object-inspector";
import { isRequestBodyParseable } from "../../../../../../utils";
const RequestBodyParsed = ({ networkEvent }) => {
    return (React.createElement(ObjectInspector, { expandLevel: 3, data: JSON.parse(networkEvent.request?.postData?.text), includePrototypes: false, className: "object-inspector" }));
};
const RequestBodySource = ({ networkEvent }) => {
    return React.createElement("div", { className: "request-body-content" }, networkEvent.request?.postData?.text);
};
const RequestBody = ({ networkEvent, parsed }) => {
    if (parsed && isRequestBodyParseable(networkEvent.request.postData?.mimeType)) {
        return React.createElement(RequestBodyParsed, { networkEvent: networkEvent });
    }
    return React.createElement(RequestBodySource, { networkEvent: networkEvent });
};
export default RequestBody;
