import React from "react";
import { ObjectInspector } from "@devtools-ds/object-inspector";
// Displaying on JSON parsed body for now
// Future Improvements: Form-Data (application/x-www-form-urlencoded)
const RequestBodyParsed = ({ networkEvent }) => {
    let parsedBody = networkEvent.request?.postData?.text;
    try {
        parsedBody = JSON.parse(networkEvent.request?.postData?.text);
    }
    catch (err) {
        console.log("Unable to parse Request Body");
    }
    return React.createElement(ObjectInspector, { expandLevel: 3, data: parsedBody, includePrototypes: false, className: "object-inspector" });
};
export default RequestBodyParsed;
