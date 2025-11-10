export var ObjectType;
(function (ObjectType) {
    ObjectType["GROUP"] = "group";
    ObjectType["RULE"] = "rule";
})(ObjectType || (ObjectType = {}));
export var Status;
(function (Status) {
    Status["ACTIVE"] = "Active";
    Status["INACTIVE"] = "Inactive";
})(Status || (Status = {}));
export var RuleType;
(function (RuleType) {
    RuleType["REDIRECT"] = "Redirect";
    RuleType["CANCEL"] = "Cancel";
    RuleType["REPLACE"] = "Replace";
    RuleType["HEADERS"] = "Headers";
    RuleType["USERAGENT"] = "UserAgent";
    RuleType["SCRIPT"] = "Script";
    RuleType["QUERYPARAM"] = "QueryParam";
    RuleType["RESPONSE"] = "Response";
    RuleType["REQUEST"] = "Request";
    RuleType["DELAY"] = "Delay";
})(RuleType || (RuleType = {}));
export var SourceKey;
(function (SourceKey) {
    SourceKey["URL"] = "Url";
    SourceKey["HOST"] = "host";
    SourceKey["PATH"] = "path";
})(SourceKey || (SourceKey = {}));
export var SourceOperator;
(function (SourceOperator) {
    SourceOperator["EQUALS"] = "Equals";
    SourceOperator["CONTAINS"] = "Contains";
    SourceOperator["MATCHES"] = "Matches";
    SourceOperator["WILDCARD_MATCHES"] = "Wildcard_Matches";
})(SourceOperator || (SourceOperator = {}));
export var SourceFilterTypes;
(function (SourceFilterTypes) {
    SourceFilterTypes["PAGE_DOMAINS"] = "pageDomains";
    SourceFilterTypes["REQUEST_METHOD"] = "requestMethod";
    SourceFilterTypes["RESOURCE_TYPE"] = "resourceType";
    SourceFilterTypes["REQUEST_PAYLOAD"] = "requestPayload";
})(SourceFilterTypes || (SourceFilterTypes = {}));
export var ResourceType;
(function (ResourceType) {
    ResourceType["XHR"] = "xmlhttprequest";
    ResourceType["JS"] = "script";
    ResourceType["CSS"] = "stylesheet";
    ResourceType["Image"] = "image";
    ResourceType["Media"] = "media";
    ResourceType["Font"] = "font";
    ResourceType["WebSocket"] = "websocket";
    ResourceType["MainDocument"] = "main_frame";
    ResourceType["IFrameDocument"] = "sub_frame";
})(ResourceType || (ResourceType = {}));
var HttpRequestMethod;
(function (HttpRequestMethod) {
    HttpRequestMethod["GET"] = "GET";
    HttpRequestMethod["POST"] = "POST";
    HttpRequestMethod["PUT"] = "PUT";
    HttpRequestMethod["DELETE"] = "DELETE";
    HttpRequestMethod["PATCH"] = "PATCH";
    HttpRequestMethod["OPTIONS"] = "OPTIONS";
    HttpRequestMethod["CONNECT"] = "CONNECT";
    HttpRequestMethod["HEAD"] = "HEAD";
})(HttpRequestMethod || (HttpRequestMethod = {}));
export var AutoRecordingMode;
(function (AutoRecordingMode) {
    AutoRecordingMode["CUSTOM"] = "custom";
    AutoRecordingMode["ALL_PAGES"] = "allPages";
})(AutoRecordingMode || (AutoRecordingMode = {}));
export var StorageKey;
(function (StorageKey) {
    StorageKey["SESSION_RECORDING_CONFIG"] = "sessionRecordingConfig";
})(StorageKey || (StorageKey = {}));
export var ScriptCodeType;
(function (ScriptCodeType) {
    ScriptCodeType["JS"] = "js";
    ScriptCodeType["CSS"] = "css";
})(ScriptCodeType || (ScriptCodeType = {}));
export var ScriptType;
(function (ScriptType) {
    ScriptType["URL"] = "url";
    ScriptType["CODE"] = "code";
})(ScriptType || (ScriptType = {}));
