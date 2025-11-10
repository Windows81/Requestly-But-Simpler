/* TYPES */
var RequestMethod;
(function (RequestMethod) {
    RequestMethod["GET"] = "GET";
    RequestMethod["POST"] = "POST";
    RequestMethod["PUT"] = "PUT";
    RequestMethod["PATCH"] = "PATCH";
    RequestMethod["DELETE"] = "DELETE";
    RequestMethod["HEAD"] = "HEAD";
    RequestMethod["OPTIONS"] = "OPTIONS";
})(RequestMethod || (RequestMethod = {}));
var RequestContentType;
(function (RequestContentType) {
    RequestContentType["RAW"] = "text/plain";
    RequestContentType["JSON"] = "application/json";
    RequestContentType["FORM"] = "application/x-www-form-urlencoded";
})(RequestContentType || (RequestContentType = {}));
/* UTIL */
const isFormRequest = (method, contentType, body) => {
    return ![RequestMethod.GET, RequestMethod.HEAD].includes(method) && contentType === RequestContentType.FORM;
};
/* CORE */
export async function getAPIResponse(apiRequest) {
    const method = apiRequest.method || "GET";
    const headers = new Headers();
    const body = apiRequest.body;
    let url = apiRequest.url;
    let finalRequestBody = body;
    if (apiRequest?.queryParams.length) {
        const urlObj = new URL(apiRequest.url);
        const searchParams = new URLSearchParams(urlObj.search);
        apiRequest.queryParams.forEach(({ key, value }) => {
            searchParams.append(key, value);
        });
        urlObj.search = searchParams.toString();
        url = urlObj.toString();
    }
    apiRequest?.headers.forEach(({ key, value }) => {
        headers.append(key, value);
    });
    if (isFormRequest(apiRequest.method, apiRequest.contentType, body)) {
        const formData = new FormData();
        body?.forEach(({ key, value }) => {
            formData.append(key, value);
        });
        const urlSearchParams = new URLSearchParams();
        for (const [param, value] of formData.entries()) {
            urlSearchParams.append(param, value);
        }
        finalRequestBody = urlSearchParams;
    }
    try {
        const requestStartTime = performance.now();
        const response = await fetch(url, {
            method,
            headers,
            body: finalRequestBody,
            credentials: "omit",
        });
        const responseTime = performance.now() - requestStartTime;
        const responseHeaders = [];
        for (const [key, value] of response.headers.entries()) {
            responseHeaders.push({ key, value });
        }
        const responseBlob = await response.blob();
        const contentType = responseHeaders.find((header) => header.key.toLowerCase() === "content-type")?.value;
        let responseBody;
        if (contentType?.includes("image/")) {
            const getImageDataUri = (blob) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = (evt) => resolve(evt.target.result);
                    reader.onerror = () => reject(null);
                    reader.readAsDataURL(blob);
                });
            };
            responseBody = await getImageDataUri(responseBlob);
        }
        else {
            responseBody = await responseBlob.text();
        }
        return {
            body: responseBody,
            time: responseTime,
            headers: responseHeaders,
            status: response.status,
            statusText: response.statusText,
            redirectedUrl: response.url !== url ? response.url : "",
        };
    }
    catch (e) {
        return {
            error: e.message,
        };
    }
}
