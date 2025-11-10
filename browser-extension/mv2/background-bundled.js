
window.RQ = window.RQ || {};
window.RQ.configs = {
  "browser": "chrome",
  "storageType": "local",
  "contextMenuContexts": [
    "browser_action"
  ],
  "env": "prod",
  "WEB_URL": "https://app.requestly.io",
  "OTHER_WEB_URLS": [
    "https://app.requestly.com"
  ],
  "logLevel": "info"
};

/**
 * This module is define as CommonJS Module. We should move it to ES6 Module later on and fix the imports.
 * Right now the imports are defined using require, once changed to ES6 module we can move to import module
 */
if (typeof isReactApp === "undefined") {
  var isReactApp = document.getElementById("root") !== null;
}
const CONSTANTS = {};

CONSTANTS.APP_MODES = {
  DESKTOP: "DESKTOP",
  EXTENSION: "EXTENSION",
  WORDPRESS: "WORDPRESS",
  CLOUDFLARE: "CLOUDFLARE",
  REMOTE: "REMOTE",
};

CONSTANTS.COMPANY_INFO = {
  SUPPORT_EMAIL: "contact@requestly.io",
};

CONSTANTS.VERSION = 3;

//No. of days to show onboarding after signing up
CONSTANTS.ONBOARDING_DAYS_TO_EXPIRE = 7;

CONSTANTS.PUBLIC_NAMESPACE = "__REQUESTLY__";

CONSTANTS.CONSOLE_LOGGER_ENABLED = "console-logger-enabled";

CONSTANTS.IMPLICIT_RULE_TESTING_WIDGET_VISIBILITY = {
  ALL: "all",
  SPECIFIC: "specific",
};

/**
 * We are calling them as BLACK_LIST_DOMAINS
 * however the usage is code is as the URL containing these substrings, We don't touch those requests
 */
CONSTANTS.BLACK_LIST_DOMAINS = ["requestly.in", "requestly.io", "requestly.com", "rq.in", "rq.io", "__rq"];

CONSTANTS.OBJECT_TYPES = {
  GROUP: "group",
  RULE: "rule",
};

CONSTANTS.RULE_TYPES = {
  REDIRECT: "Redirect",
  CANCEL: "Cancel",
  REPLACE: "Replace",
  HEADERS: "Headers",
  USERAGENT: "UserAgent",
  SCRIPT: "Script",
  QUERYPARAM: "QueryParam",
  RESPONSE: "Response",
  REQUEST: "Request",
  DELAY: "Delay",
};

CONSTANTS.DELAY_REQUEST_CONSTANTS = {
  DELAY_PARAM_NAME: "delay", // string to add as query paramName
  DELAY_PARAM_VALUE: "true", // string to add as query paramValue
  MIN_DELAY_VALUE: 1,
  MAX_DELAY_VALUE_NON_XHR: 10000,
  MAX_DELAY_VALUE_XHR: 5000,
  DELAY_TYPE: {
    CLIENT_SIDE: "clientSideDelay",
    SERVER_SIDE: "serverSideDelay",
  },
  REQUEST_TYPE: {
    XHR: "xmlhttprequest",
  },
  METHOD_TYPE: {
    GET: "GET",
  },
};

CONSTANTS.HEADER_NAMES = {
  USER_AGENT: "User-Agent",
};

CONSTANTS.GROUP_STATUS = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
};

CONSTANTS.RULE_STATUS = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
};

CONSTANTS.RULE_KEYS = {
  URL: "Url",
  HOST: "host",
  PATH: "path",
  HEADER: "Header",
  OVERWRITE: "Overwrite",
  IGNORE: "Ignore",
  PARAM: "param",
  VALUE: "value",
};

CONSTANTS.URL_COMPONENTS = {
  PROTOCOL: "Protocol",
  URL: "Url",
  HOST: "host",
  PATH: "path",
  QUERY: "query",
  HASH: "hash",
  ORIGIN: "origin",
};

CONSTANTS.RULE_OPERATORS = {
  EQUALS: "Equals",
  CONTAINS: "Contains",
  MATCHES: "Matches",
  WILDCARD_MATCHES: "Wildcard_Matches",
};

CONSTANTS.RULE_SOURCE_FILTER_TYPES = {
  PAGE_URL: "pageUrl",
  RESOURCE_TYPE: "resourceType",
  REQUEST_METHOD: "requestMethod",
  REQUEST_DATA: "requestPayload",
};

CONSTANTS.MODIFICATION_TYPES = {
  ADD: "Add",
  REMOVE: "Remove",
  REMOVE_ALL: "Remove All",
  MODIFY: "Modify",
  REPLACE: "Replace",
};

CONSTANTS.EXTENSION_MESSAGES = {
  FOCUS_TAB: "focusTab",
  GET_FULL_LOGS: "getFullLogs",
  CLEAR_LOGS_FOR_TAB: "clearLogsForTab",
  CLEAR_LOGS_FOR_DOMAIN: "clearLogsForDomain",
  GET_RULES_AND_GROUPS: "getRulesAndGroups",
  GET_FLAGS: "getFlags",
  GET_TAB_SESSION: "getTabSession",
  GET_API_RESPONSE: "getAPIResponse",
  CHECK_IF_NO_RULES_PRESENT: "checkIfNoRulesPresent",
  GET_EXECUTED_RULES: "getExecutedRules",
  CHECK_IF_EXTENSION_ENABLED: "checkIfExtensionEnabled",
  START_RECORDING_EXPLICITLY: "startRecordingExplicitly",
  STOP_RECORDING: "stopRecording",
  WATCH_RECORDING: "watchRecording",
  TOGGLE_EXTENSION_STATUS: "toggleExtensionStatus",
  SEND_EXTENSION_EVENTS: "sendExtensionEvents",
  NOTIFY_APP_LOADED: "notifyAppLoaded",
  NOTIFY_RECORD_UPDATED: "notifyRecordUpdated",
  START_RECORDING_ON_URL: "startRecordingOnUrl",
  NOTIFY_EXTENSION_UPDATED: "notifyExtensionUpdated",
  TEST_RULE_ON_URL: "testRuleOnUrl",
  SAVE_TEST_RULE_RESULT: "saveTestRuleResult",
  NOTIFY_TEST_RULE_REPORT_UPDATED: "notifyTestRuleReportUpdated",
};

CONSTANTS.HEADERS_TARGET = {
  REQUEST: "Request",
  RESPONSE: "Response",
};

CONSTANTS.REQUEST_TYPES = {
  MAIN_FRAME: "mainFrame",
  PAGE_REQUEST: "pageRequest",
};

CONSTANTS.SCRIPT_TYPES = {
  URL: "url",
  CODE: "code",
};

CONSTANTS.SCRIPT_CODE_TYPES = {
  JS: "js",
  CSS: "css",
};

CONSTANTS.SCRIPT_LOAD_TIME = {
  BEFORE_PAGE_LOAD: "beforePageLoad",
  AFTER_PAGE_LOAD: "afterPageLoad",
  AS_SOON_AS_POSSIBLE: "asSoonAsPossible",
};

CONSTANTS.SCRIPT_LIBRARIES = {
  JQUERY: { name: "jQuery", src: "https://code.jquery.com/jquery-2.2.4.js" },
  UNDERSCORE: {
    name: "Underscore",
    src: "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js",
  },
};

CONSTANTS.REQUEST_BODY_TYPES = {
  STATIC: "static",
  CODE: "code",
};

CONSTANTS.RESPONSE_BODY_TYPES = {
  STATIC: "static",
  CODE: "code",
  LOCAL_FILE: "local_file",
};

CONSTANTS.STORAGE_KEYS = {
  REQUESTLY_SETTINGS: "rq_settings",
  USER_INFO: "user_info",
  LATEST_NOTIFICATION_READ_BY_USER: "latestNotificationReadId",
  SESSION_RECORDING_CONFIG: "sessionRecordingConfig",
  USE_EVENTS_ENGINE: "useEventsEngine",
  SEND_EXECUTION_EVENTS: "sendExecutionEvents",
  TEST_REPORTS: "testReports",
  IMPLICIT_RULE_TESTING_WIDGET_CONFIG: "implicit_rule_testing_widget_config",
};

CONSTANTS.REQUEST_STATE = {
  LOADING: "LOADING",
  COMPLETE: "COMPLETE",
};

if (isReactApp) {
  module.exports = CONSTANTS;
} else {
  /** For legacy apps- browser extension */
  Object.assign(window.RQ, CONSTANTS);
}

RQ.CONSTANTS = RQ.CONSTANTS || {};

RQ.CONSTANTS.RULES_PAGE_URL = RQ.configs.WEB_URL + "/rules/";

RQ.CONSTANTS.RULES_PAGE_URL_PATTERN = RQ.CONSTANTS.RULES_PAGE_URL + "*";

RQ.CONSTANTS.GOODBYE_PAGE_URL = RQ.configs.WEB_URL + "/goodbye/";

// URL For Delay Request API
RQ.CONSTANTS.DELAY_API_URL = RQ.configs.WEB_URL + "/delay/";

RQ.CONSTANTS.UPDATES_PAGE_URL = RQ.configs.WEB_URL + "/updates";

RQ.CONSTANTS.LAST_MAJOR_UPDATE_VERSION = "22.10.26";

RQ.CONSTANTS.LIMITS = {
  NUMBER_SHARED_LISTS: 10,
  NUMBER_EXECUTION_LOGS: 25,
};

RQ.CONSTANTS.MESSAGE_HANDLER_ACTIONS = {
  SUBMIT_EVENT: "submitEvent",
  SUBMIT_ATTR: "submitAttr",
};

RQ.CONSTANTS.TEST_THIS_RULE_MODES = {
  EXPLICIT: "explicit",
  IMPLICIT: "implicit",
};

// Variables exposed directly on RQ object
RQ.CLIENT_MESSAGES = {
  ADD_EVENT: "addEvent",
  GET_SCRIPT_RULES: "getScriptRules",
  GET_USER_AGENT_RULE_PAIRS: "getUserAgentRulePairs",
  OVERRIDE_RESPONSE: "overrideResponse",
  NOTIFY_RULES_APPLIED: "notifyRulesApplied",
  PRINT_CONSOLE_LOGS: "printConsoleLogs",
  NOTIFY_SESSION_RECORDING_STARTED: "notifySessionRecordingStarted",
  NOTIFY_SESSION_RECORDING_STOPPED: "notifySessionRecordingStopped",
  IS_RECORDING_SESSION: "isRecordingSession",
  GET_TAB_SESSION: "getTabSession",
  CACHE_RECORDED_SESSION_ON_PAGE_UNLOAD: "cacheRecordedSessionOnPageUnload",
  NOTIFY_RULE_APPLIED: "notifyRuleApplied",
  GET_APPLIED_RULE_IDS: "getAppliedRuleIds",
  START_RECORDING: "startRecording",
  STOP_RECORDING: "stopRecording",
  IS_EXPLICIT_RECORDING_SESSION: "isExplicitRecordingSession",
  SYNC_APPLIED_RULES: "syncAppliedRules",
  NOTIFY_PAGE_LOADED_FROM_CACHE: "notifyPageLoadedFromCache",
  NOTIFY_RECORD_UPDATED_IN_POPUP: "notifyRecordUpdatedInPopup",
  START_EXPLICIT_RULE_TESTING: "startExplicitRuleTesting",
  START_IMPLICIT_RULE_TESTING: "startImplicitRuleTesting",
};

RQ.CUSTOM_HEADER_PREFIX = "x-rq-";

/*
  List of headers ignored by the browser on URL redirection
*/
RQ.IGNORED_HEADERS_ON_REDIRECT = ["Authorization"];

window.RQ = window.RQ || {};
RQ.Utils = RQ.Utils || {};

RQ.Utils.regexFormat = "^/(.+)/(|i|g|ig|gi)$";

RQ.Utils.toRegex = function (regexStr) {
  const matchRegExp = regexStr.match(new RegExp(RQ.Utils.regexFormat));

  if (!matchRegExp) {
    return null;
  }
  try {
    return new RegExp(matchRegExp[1], matchRegExp[2]);
  } catch {
    return null;
  }
};

RQ.Utils.isValidUrl = function (url) {
  return url.search(/^http:|https:|ftp:|javascript:/) === 0;
};

RQ.Utils.getId = function () {
  return Date.now();
};

RQ.Utils.getCurrentTime = function () {
  return Date.now();
};

RQ.Utils.formatDate = function (dateInMilis, format) {
  const d = new Date(dateInMilis);

  if (dateInMilis && format === "yyyy-mm-dd") {
    let month = d.getMonth() + 1,
      date = d.getDate();

    date = String(date).length < 2 ? "0" + date : String(date);
    month = String(month).length < 2 ? "0" + month : String(month);

    return d.getFullYear() + "-" + month + "-" + date;
  }
};

RQ.Utils.reloadPage = function (wait) {
  wait = wait || 0;

  setTimeout(function () {
    window.location.reload();
  }, wait);
};

RQ.Utils.removeLastPart = function (str, separater) {
  str = str || "";

  // Return original string when separator is not present
  if (str.indexOf(separater) === -1) {
    return str;
  }

  str = str.split(separater);

  // Remove last part
  str.length--;

  return str.join(separater);
};

RQ.Utils.setCookie = function (name, value, maxAge) {
  document.cookie = name + "=" + value + "; path=/" + "; max-age=" + maxAge;
};

RQ.Utils.readCookie = function (name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
};

RQ.Utils.eraseCookie = function (name) {
  RQ.Utils.setCookie(name, "", 1);
};

/**
 *
 * @param url Url from which component has to be extracted
 * @param name Url component name - host, path, url, query, fragment etc.
 */
RQ.Utils.extractUrlComponent = function (url, name) {
  if (!window.dummyAnchor) {
    window.dummyAnchor = document.createElement("a");
  }

  window.dummyAnchor.href = url;

  switch (name) {
    case RQ.URL_COMPONENTS.URL:
      return url;
    case RQ.URL_COMPONENTS.PROTOCOL:
      return window.dummyAnchor.protocol;
    case RQ.URL_COMPONENTS.HOST:
      return window.dummyAnchor.host;
    case RQ.URL_COMPONENTS.PATH:
      return window.dummyAnchor.pathname;
    case RQ.URL_COMPONENTS.QUERY:
      return window.dummyAnchor.search;
    case RQ.URL_COMPONENTS.HASH:
      return window.dummyAnchor.hash;
    case RQ.URL_COMPONENTS.ORIGIN:
      return window.dummyAnchor.origin;
  }

  console.error("Invalid source key", url, name);
};

/**
 *
 * @param queryString e.g. ?a=1&b=2 or a=1 or ''
 * @returns object { paramName -> [value1, value2] }
 */
RQ.Utils.getQueryParamsMap = function (queryString) {
  var map = {},
    queryParams;

  if (!queryString || queryString === "?") {
    return map;
  }

  if (queryString[0] === "?") {
    queryString = queryString.substr(1);
  }

  queryParams = queryString.split("&");

  queryParams.forEach(function (queryParam) {
    var paramName = queryParam.split("=")[0],
      paramValue = queryParam.split("=")[1];

    // We are keeping value of param as array so that in future we can support multiple param values of same name
    // And we do not want to lose the params if url already contains multiple params of same name
    map[paramName] = map[paramName] || [];
    map[paramName].push(paramValue);
  });

  return map;
};

/**
 * Convert a map to keyvalue pair string (Used for query params)
 * @param queryParamsMap
 * @returns {string}
 */
RQ.Utils.convertQueryParamMapToString = function (queryParamsMap) {
  var queryParamsArr = [];

  for (var paramName in queryParamsMap) {
    var values = queryParamsMap[paramName] || [];

    values.forEach(function (paramValue) {
      if (typeof paramValue === "undefined") {
        queryParamsArr.push(paramName);
      } else {
        queryParamsArr.push(paramName + "=" + paramValue);
      }
    });
  }

  return queryParamsArr.join("&");
};

RQ.Utils.getUrlWithoutQueryParamsAndHash = function (url) {
  var urlWithoutHash = url.split("#")[0];

  return urlWithoutHash.split("?")[0];
};

/**
 * Add a Query Param to URL
 * @param {string} url Url to which query string has to be added
 * @param {string} paramName The paramName to be added
 * @param {string} paramValue The paramValue of the paramName
 * @param {boolean} overwrite Whether to overwrite the existing queryStrign or not
 * @returns {string} A well formatted url with addition of given query param
 */
RQ.Utils.addQueryParamToURL = function (url, paramName, paramValue, overwrite) {
  let resultingUrl = url,
    urlWithoutQueryParamsAndHash = RQ.Utils.getUrlWithoutQueryParamsAndHash(url),
    urlHash = RQ.Utils.extractUrlComponent(url, RQ.URL_COMPONENTS.HASH),
    queryString = RQ.Utils.extractUrlComponent(url, RQ.URL_COMPONENTS.QUERY),
    queryParamsMap = RQ.Utils.getQueryParamsMap(queryString);

  if (overwrite) {
    queryParamsMap[paramName] = [];
  } else {
    queryParamsMap[paramName] = queryParamsMap[paramName] || [];
  }

  queryParamsMap[paramName].push(paramValue);

  queryString = RQ.Utils.convertQueryParamMapToString(queryParamsMap);

  resultingUrl = queryString ? urlWithoutQueryParamsAndHash + "?" + queryString : urlWithoutQueryParamsAndHash;
  resultingUrl += urlHash;

  return resultingUrl;
};

/**
 * Adds Delay by running a loop for desired time
 * @param {Number} milliseconds Time in ms for which to add delay
 * @returns {Void} Void
 */
RQ.Utils.addDelay = function (milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
};

/**
 * Generates Id for a execution log- a random 6 digit number is added to current epoch time
 * to generate a unique ID. I works as the number of digits in current time wont be affected
 * by adding an 6 digit number.
 * Also added an unit test to verify ID length
 * @returns {String} id
 */

RQ.Utils.generateExecutionLogId = function () {
  return `executionLog_${Date.now() + Math.floor(Math.random() * 1000000)}`;
};

/**
 * This code is also copied in responseRuleHandler.js So if you change anything inside this, please update there as well
 * And test across multiple sites using Modify Response Rule
 * @param {String} mightBeJSONString
 * @returns JSON Object if the string is JSON String otherwise returns the same string
 */
RQ.Utils.jsonifyValidJSONString = (mightBeJSONString) => {
  if (typeof mightBeJSONString !== "string") return mightBeJSONString;

  try {
    return JSON.parse(mightBeJSONString);
  } catch (e) {
    /* Do Nothing. Unable to parse the param value */
  }

  return mightBeJSONString;
};

/**
 * This code is also copied in responseRuleHandler.js So if you change anything inside this, please update there as well
 * And test across multiple sites using Modify Response Rule
 * @param {String} url
 * @returns JSON Object for the searchParams. Handle decoding of Params and JSON Strings
 */
RQ.Utils.convertSearchParamsToJSON = (url) => {
  const result = {};

  if (!url || url === "?" || url.indexOf("?") === -1) {
    return result;
  }

  // https://stackoverflow.com/a/50147341/816213
  // (URL decoding is already handled in URLSearchParams)
  const searchParamsString = url.split("?")[1];
  const paramsObject = Object.fromEntries(new URLSearchParams(searchParamsString));

  // Traverse paramsObject to convert JSON strings into JSON object
  for (paramName in paramsObject) {
    const paramValue = paramsObject[paramName];
    paramsObject[paramName] = RQ.Utils.jsonifyValidJSONString(paramValue);
  }

  return paramsObject;
};
/**
 * This code is also copied in responseRuleHandler.js So if you change anything inside this, please update there as well
 * And test across multiple sites using Modify Response Rule
 * @param {Object} json
 * @param {String} path -> "a", "a.b", "a.0.b (If a is an array containing list of objects"
 * @returns value or undefined
 */
RQ.Utils.traverseJsonByPath = (jsonObject, path) => {
  if (!path) return;

  const pathParts = path.split(".");

  try {
    // Reach the last node but not the leaf node.
    for (i = 0; i < pathParts.length - 1; i++) {
      jsonObject = jsonObject[pathParts[i]];
    }

    return jsonObject[pathParts[pathParts.length - 1]];
  } catch (e) {
    /* Do nothing */
  }
};

/**
 * Set given value in an Object at given Path. Modifies the original object.
 * @param {Object} incomingObject Object to be modified
 * @param {String} path example -> "a", "a.b", "a.0.b
 * @param {*} value The value to be path
 * @returns value or undefined
 */
RQ.Utils.setObjectValueAtPath = (incomingObject, path, value) => {
  if (typeof incomingObject !== "object" || Array.isArray(incomingObject) || incomingObject === null) return;

  if (typeof path !== "string") return;

  let schema = incomingObject;
  const pList = path.split(".");
  const len = pList.length;
  for (let i = 0; i < len - 1; i++) {
    const elem = pList[i];
    if (!schema[elem]) schema[elem] = {};
    schema = schema[elem];
  }
  schema[pList[len - 1]] = value;
};

RQ.Utils.isOlderVersion = (version, baseVersion) => {
  return (
    version.localeCompare(baseVersion, undefined, {
      numeric: true,
      sensitivity: "base",
    }) === -1
  );
};

RQ.Utils.getPageSourceOrigin = (url) => {
  if (!url) {
    return null;
  }

  return RQ.Utils.extractUrlComponent(url, RQ.URL_COMPONENTS.ORIGIN);
};

RQ.Utils.fireAjax = (requestURL, async) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", requestURL, async);
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 400) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject();
        }
      }
    };
    request.send();
  });
};

RQ.Utils.getAllSupportedWebURLs = () => {
  const webURLsSet = new Set([RQ.configs.WEB_URL, ...RQ.configs.OTHER_WEB_URLS]);
  return [...webURLsSet];
};

RQ.Utils.isAppURL = (url) => {
  return !!url && RQ.Utils.getAllSupportedWebURLs().some((webURL) => url.includes(webURL));
};

window.RQ = window.RQ || {};

RQ.ContentScriptMessageHandler = {
  eventCallbackMap: {},
  requestId: 1,

  constants: {
    CONTENT_SCRIPT: "content_script",
    PAGE_SCRIPT: "page_script",
    SOURCE_FIELD: "source",
    ACTION_USER_LOGGED_IN: "user:loggedIn",
  },

  addMessageListener: function () {
    window.addEventListener("message", this.handleMessageReceived.bind(this));
  },

  getSource: function () {
    return this.constants.CONTENT_SCRIPT;
  },

  registerCallback: function (message, callback) {
    if (!callback) return;

    // Message has requestId when we are sending response
    const requestIdToUse = this.requestId++;
    this.eventCallbackMap[message.action + "_" + requestIdToUse] = callback;
    message.requestId = requestIdToUse;
  },

  invokeCallback: function (event) {
    const callbackRef = this.eventCallbackMap[event.data.action + "_" + event.data.requestId];

    if (typeof callbackRef === "function") {
      // We should remove the entry from map first before executing the callback otherwise we will store stale references of functions
      delete this.eventCallbackMap[event.data.action + "_" + event.data.requestId];
      callbackRef.call(this, event.data.response);
    }
  },

  sendMessage: function (message, callback) {
    if (!message.action) {
      Logger.error("Invalid message. Must contain some action");
      return;
    }

    this.registerCallback(message, callback);

    message[this.constants.SOURCE_FIELD] = this.getSource();
    window.postMessage(message, window.origin);
  },

  sendResponse: function (originalEventData, response) {
    const message = {
      action: originalEventData.action,
      requestId: originalEventData.requestId,
      response: response,
    };

    message[this.constants.SOURCE_FIELD] = this.constants.CONTENT_SCRIPT;
    window.postMessage(message, window.origin);
  },

  handleMessageReceived: function (event) {
    const that = this;

    if (event && !RQ.Utils.isAppURL(event.origin)) {
      if (RQ.configs.logLevel === "debug") {
        console.log("Ignoring message from the following domain", event.origin, event.data);
      }

      return;
    }

    if (event && event.data && event.data.source === this.constants.PAGE_SCRIPT) {
      RQ.configs.logLevel === "debug" && console.log("Received message:", event.data);

      // Check whether it is a response to invoke callback or a request to perform an action
      if (typeof event.data.response !== "undefined") {
        return this.invokeCallback(event);
      }

      // Process actions
      if (event.data.action === "GET_STORAGE_TYPE") {
        StorageService.getStorageType().then((storageType) => {
          that.sendResponse(event.data, { storageType });
        });
      } else if (event.data.action === "SET_STORAGE_TYPE") {
        StorageService.setStorageType(event.data.storageType).then(() => {
          that.sendResponse(event.data, { success: true });
        });
      } else if (event.data.action === "GET_STORAGE_INFO") {
        StorageService.getStorageType().then((storageType) => {
          chrome.storage[storageType].get(null, (superObject) => {
            const storageCachedRecords = [];
            for (let key in superObject) {
              if (superObject[key].hasOwnProperty("objectType") || superObject[key].hasOwnProperty("ruleType")) {
                storageCachedRecords.push(superObject[key]);
              }
            }

            that.sendResponse(event.data, {
              storageType: storageType,
              numItems: storageCachedRecords.length,
              bytesUsed: JSON.stringify(storageCachedRecords).length,
            });
          });
        });
      } else if (event.data.action === "GET_STORAGE_SUPER_OBJECT") {
        StorageService.getStorageType().then((storageType) => {
          chrome.storage[storageType].get(null, (superObject) => {
            that.sendResponse(event.data, superObject);
          });
        });
      } else if (event.data.action === "GET_STORAGE_OBJECT") {
        StorageService.getStorageType().then((storageType) => {
          chrome.storage[storageType].get(event.data.key, (obj) => {
            that.sendResponse(event.data, obj[event.data.key]);
          });
        });
      } else if (event.data.action === "SAVE_STORAGE_OBJECT") {
        StorageService.getStorageType().then((storageType) => {
          chrome.storage[storageType].set(event.data.object, () => {
            that.sendResponse(event.data);
          });
        });
      } else if (event.data.action === "REMOVE_STORAGE_OBJECT") {
        StorageService.getStorageType().then((storageType) => {
          chrome.storage[storageType].remove(event.data.key, () => {
            that.sendResponse(event.data);
          });
        });
      } else if (event.data.action === "CLEAR_STORAGE") {
        StorageService.getStorageType().then((storageType) => {
          chrome.storage[storageType].clear(() => {
            that.sendResponse(event.data);
          });
        });
      } else if (event.data.action === "GET_USER_INFO") {
        StorageService.getRecordFromStorage("user_info", "sync").then((obj) =>
          that.sendResponse(event.data, obj || {})
        );
      } else if (
        [
          RQ.EXTENSION_MESSAGES.FOCUS_TAB,
          RQ.EXTENSION_MESSAGES.GET_FULL_LOGS,
          RQ.EXTENSION_MESSAGES.CLEAR_LOGS_FOR_TAB,
          RQ.EXTENSION_MESSAGES.CLEAR_LOGS_FOR_DOMAIN,
          RQ.EXTENSION_MESSAGES.GET_FLAGS,
          RQ.EXTENSION_MESSAGES.GET_TAB_SESSION,
          RQ.EXTENSION_MESSAGES.GET_API_RESPONSE,
          RQ.EXTENSION_MESSAGES.NOTIFY_APP_LOADED,
          RQ.EXTENSION_MESSAGES.START_RECORDING_ON_URL,
          RQ.EXTENSION_MESSAGES.TEST_RULE_ON_URL,
        ].includes(event.data.action)
      ) {
        this.delegateMessageToBackground(event.data);
      }
    }
  },

  delegateMessageToBackground: function (message) {
    const that = this;
    chrome.runtime.sendMessage(message, (bgResponse) => {
      that.sendResponse(message, bgResponse);
    });
  },

  init: function () {
    this.addMessageListener();
  },
};

RQ.ContentScriptMessageHandler.init();

window.RQ = window.RQ || {};
RQ.UserAgentLibrary = RQ.UserAgentLibrary || {};

RQ.UserAgentLibrary = {
  USER_AGENT: {
    device: {
      android: {
        name: "Android",
        values: {
          phone: {
            name: "Android Phone",
            value:
              "Mozilla/5.0 (Linux; Android 13; Pixel 6 Pro Build/TP1A.220624.021; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/104.0.5112.97 Mobile Safari/537.36", // Pixel 6
          },
          tablet: {
            name: "Android Tablet",
            value:
              "Mozilla/5.0 (Linux; Android 12; SM-X906C Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/80.0.3987.119 Mobile Safari/537.36", // SM Tab S8 ultra
          },
        },
      },
      apple: {
        name: "Apple",
        values: {
          iphone: {
            name: "Apple iPhone",
            value:
              "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/92.0.4515.90 Mobile/15E148 Safari/604.1", // iPhone 12
          },
          ipad: {
            name: "Apple iPad",
            value:
              "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
          },
        },
      },
      windows: {
        name: "Windows",
        values: {
          phone: {
            name: "Windows Phone",
            value:
              "Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; WebView/3.0; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) coc_coc_browser/70.130.340 Chrome/52.0.2743.116 Mobile Safari/537.36 Edge/15.15254",
          },
          tablet: {
            name: "Windows Tablet",
            value: "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0; Touch; NOKIA; Lumia 920)",
          },
        },
      },
      blackberry: {
        name: "Blackberry",
        values: {
          phone: {
            name: "Blackberry Phone",
            value:
              "Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11 (KHTML, like Gecko) Version/7.0.0.187 Mobile Safari/534.11",
          },
          tablet: {
            name: "Blackberry Tablet",
            value:
              "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.0.0; en-US) AppleWebKit/535.8 (KHTML, like Gecko) Version/7.2.0.0 Safari/535.8",
          },
        },
      },
      symbian_phone: {
        name: "Symbian Phone",
        value:
          "Mozilla/5.0 (SymbianOS) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.33 Mobile Safari/533.4 3gpp-gba",
      },
    },
    browser: {
      chrome: {
        name: "Google Chrome",
        values: {
          windows: {
            name: "Chrome on Windows",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          },
          macintosh: {
            name: "Chrome on Macintosh",
            value:
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          },
          linux: {
            name: "Chrome on Linux",
            value:
              "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          },
        },
      },
      firefox: {
        name: "Mozilla Firefox",
        values: {
          windows: {
            name: "Firefox on Windows",
            value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0",
          },
          macintosh: {
            name: "Firfox on Macintosh",
            value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 12.6; rv:104.0) Gecko/20100101 Firefox/104.0",
          },
          linux: {
            name: "Firefox on Linux",
            value: "Mozilla/5.0 (X11; Linux i686; rv:104.0) Gecko/20100101 Firefox/104.0",
          },
        },
      },
      safari: {
        name: "Safari",
        value:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15",
      },
      msie: {
        name: "Microsoft Internet Explorer",
        values: {
          msie11: {
            name: "Internet Explorer 11",
            value: "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko",
          },
        },
      },
      msedge: {
        name: "Microsoft Edge",
        value:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.42",
      },
      opera: {
        name: "Opera",
        value:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 OPR/90.0.4480.107",
      },
    },
  },

  getDefaultUserAgent: function () {
    return (navigator && navigator.userAgent) || "";
  },
};

window.RQ = window.RQ || {};
RQ.DOMUtils = RQ.DOMUtils || {};

/**
 *
 * @param $el Element on which class should be toggled
 * @param className Class to be toggled
 * @param condition Boolean Condition - When true class will be added otherwise removed
 */
RQ.DOMUtils.toggleClass = function ($el, className, condition) {
  condition ? $el.addClass(className) : $el.removeClass(className);
};

if (typeof isReactApp === "undefined") {
  var isReactApp = document.getElementById("root") !== null;
}

var Logger = {
  enabled: false,
  ns: "Requestly: ",

  log(...args) {
    if (this.enabled) {
      console.log(this.ns, ...args);
    }
  },

  error(...args) {
    if (this.enabled) {
      console.error(this.ns, ...args);
    }
  },

  time(...args) {
    if (this.enabled) {
      console.time(...args);
    }
  },

  timeEnd(...args) {
    if (this.enabled) {
      console.timeEnd(...args);
    }
  },

  timeLog(...args) {
    if (this.enabled) {
      console.timeLog(...args);
    }
  },
};

let urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("debug")) {
  Logger.enabled = true;
}

window.rq_debug = () => (Logger.enabled = true);

if (isReactApp) {
  module.exports = Logger;
} else {
  window.RQ = window.RQ || {};
  window.RQ.components = window.RQ.components || {};
  window.RQ.components.logger = Logger;
}

this.RQ=this.RQ||{},this.RQ.commonUtils=function(t){"use strict";let n;const e=new Uint8Array(16);function o(){if(!n&&(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(e)}const r=[];for(let t=0;t<256;++t)r.push((t+256).toString(16).slice(1));var a={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function u(t,n,e){if(a.randomUUID&&!n&&!t)return a.randomUUID();const u=(t=t||{}).random||(t.rng||o)();if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,n){e=e||0;for(let t=0;t<16;++t)n[e+t]=u[t];return n}return function(t,n=0){return(r[t[n+0]]+r[t[n+1]]+r[t[n+2]]+r[t[n+3]]+"-"+r[t[n+4]]+r[t[n+5]]+"-"+r[t[n+6]]+r[t[n+7]]+"-"+r[t[n+8]]+r[t[n+9]]+"-"+r[t[n+10]]+r[t[n+11]]+r[t[n+12]]+r[t[n+13]]+r[t[n+14]]+r[t[n+15]]).toLowerCase()}(u)}const s="last-updated-ts",c=async(t,n)=>{await(async t=>{await chrome.storage.local.set(t)})({[t]:n})};var d;!function(t){t[t.MODIFIED=0]="MODIFIED",t[t.CREATED=1]="CREATED",t[t.DELETED=2]="DELETED"}(d||(d={}));return t.generateUUID=function(){return u()},t.updateLastUpdatedTS=()=>c(s,Date.now()),Object.defineProperty(t,"__esModule",{value:!0}),t}({});

var Queue = function (maxSize) {
  this.reset = function () {
    this.head = -1;
    this.queue = [];
  };

  this.reset();
  this.maxSize = maxSize || Queue.MAX_SIZE;

  this.increment = function (number) {
    return (number + 1) % this.maxSize;
  };
};

Queue.MAX_SIZE = Math.pow(2, 53) - 1;

Queue.prototype.enQueue = function (record) {
  this.head = this.increment(this.head);
  this.queue[this.head] = record;
};

/**
 * @param record Record to look for
 * @returns Number Position of record in the queue otherwise -1
 */
Queue.prototype.getElementIndex = function (record) {
  return this.queue.indexOf(record);
};

Queue.prototype.print = function () {
  for (var i = 0; i <= this.head; i++) {
    console.log(this.queue[i]);
  }
};

(function (window, chrome) {
  class TabService {
    map = {};

    dataScope = {
      TAB: "tabData", // tab-level data
      PAGE: "pageData", // page-level data, will wipe out when page unloads
    };

    constructor() {
      this.initTabs();
      this.addEventListeners();
    }

    initTabs() {
      chrome.tabs.query({}, (tabs) => {
        this.map = {};
        tabs.forEach((tab) => this.addOrUpdateTab(tab));
      });
    }

    addOrUpdateTab(tab) {
      // A special ID value given to tabs that are not browser tabs (for example, apps and devtools windows)
      if (tab.id !== chrome.tabs.TAB_ID_NONE) {
        this.map[tab.id] = tab;
      }
    }

    createNewTab(url, openerTabId, callback) {
      chrome.tabs.create({ url, openerTabId }, (tab) => {
        callback(tab);
      });
    }

    removeTab(tabId) {
      delete this.map[tabId];
    }

    addEventListeners() {
      chrome.tabs.onCreated.addListener((tab) => this.addOrUpdateTab(tab));

      chrome.tabs.onRemoved.addListener((tabId) => this.removeTab(tabId));

      chrome.tabs.onReplaced.addListener((addedTabId, removedTabId) => {
        this.removeTab(removedTabId);
        chrome.tabs.get(addedTabId, (tab) => this.addOrUpdateTab(tab));
      });

      chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        const existingTab = this.getTab(tabId);

        if (!existingTab) {
          this.addOrUpdateTab(tab);
          return;
        }

        const newTabState = {
          ...tab,
          [this.dataScope.TAB]: existingTab[this.dataScope.TAB] || {},
          [this.dataScope.PAGE]: existingTab[this.dataScope.PAGE] || {},
        };

        this.addOrUpdateTab(newTabState);
      });

      chrome.webRequest.onBeforeRequest.addListener(
        (details) => {
          if (details.type === "main_frame") {
            const tab = this.getTab(details.tabId) || { id: details.tabId };
            this.addOrUpdateTab({ ...tab, url: details.url });
          }
        },
        { urls: ["<all_urls>"] }
      );
    }

    getTabs() {
      return this.map;
    }

    getTab(tabId) {
      return this.map[tabId];
    }

    getTabUrl(tabId) {
      var tab = this.getTab(tabId);
      return tab && tab.url;
    }

    focusTab(tabId) {
      var tab = this.getTab(tabId);

      if (tab && tab.windowId) {
        try {
          chrome.windows.update(tab.windowId, { focused: true }, () => {
            chrome.tabs.highlight({ windowId: tab.windowId, tabs: tab.index });
          });
          return true;
        } catch (e) {
          return false;
        }
      }

      return false;
    }

    closeTab(tabId) {
      chrome.tabs.remove(tabId);
    }

    ensureTabLoadingComplete(tabId) {
      return new Promise((resolve, reject) => {
        const tab = this.getTab(tabId);

        if (tab) {
          if (tab.status === "complete") {
            resolve();
          } else {
            const handler = (currentTabId, tabChangeInfo) => {
              if (currentTabId === tabId && tabChangeInfo.status === "complete") {
                chrome.tabs.onUpdated.removeListener(handler);
                resolve();
              }
            };
            chrome.tabs.onUpdated.addListener(handler);
          }
        } else {
          reject();
        }
      });
    }

    setDataForScope(scope, tabId, key, value) {
      const tab = this.getTab(tabId);

      if (!tab) {
        return;
      }

      // null safe for firefox as in firefox get/set happen before tab updation whereas
      // in chrome get/set happens after tab updation
      if (tab[scope]) {
        tab[scope][key] = value;
      } else {
        tab[scope] = { [key]: value };
      }
    }

    getDataForScope(scope, tabId, key, defaultValue) {
      const tab = this.getTab(tabId);

      if (!tab) {
        return;
      }

      return tab[scope]?.[key] || defaultValue;
    }

    removeDataForScope(scope, tabId, key) {
      const tab = this.getTab(tabId);

      if (!tab || !tab[scope]) {
        return;
      }

      delete tab[scope][key];
    }

    getTabsWithDataFilterForScope(scope, dataFilter) {
      return Object.values(this.getTabs()).filter((tab) => dataFilter(tab[scope] || {}));
    }

    setData(...args) {
      this.setDataForScope(this.dataScope.TAB, ...args);
    }

    getData(...args) {
      return this.getDataForScope(this.dataScope.TAB, ...args);
    }

    removeData(...args) {
      this.removeDataForScope(this.dataScope.TAB, ...args);
    }

    getTabsWithDataFilter(dataFilter) {
      return this.getTabsWithDataFilterForScope(this.dataScope.TAB, dataFilter);
    }

    setPageData(tabId, ...args) {
      this.setDataForScope(this.dataScope.PAGE, tabId, ...args);
    }

    getPageData(tabId, ...args) {
      return this.getDataForScope(this.dataScope.PAGE, tabId, ...args);
    }

    removePageData(tabId, ...args) {
      this.removeDataForScope(this.dataScope.PAGE, tabId, ...args);
    }

    resetPageData(tabId) {
      const tab = this.getTab(tabId);

      if (tab?.[this.dataScope.PAGE]) {
        tab[this.dataScope.PAGE] = {};
      }
    }

    getTabsWithPageDataFilter(dataFilter) {
      return this.getTabsWithDataFilterForScope(this.dataScope.PAGE, dataFilter);
    }

    promisifiedSetIcon(tabId, path) {
      return new Promise((resolve) => {
        chrome.browserAction.setIcon({ tabId, path }, resolve);
      });
    }

    // do not pass tabId to set icon globally
    setExtensionIcon(path, tabId) {
      if (typeof tabId === "undefined") {
        chrome.browserAction.setIcon({ path });
        return;
      }

      // on invoking setIcon multiple times simultaneously in a tab may lead to inconsistency without synchronization
      let setIconSynchronizer = this.getPageData(tabId, "setIconSynchronizer");
      if (!setIconSynchronizer) {
        setIconSynchronizer = Promise.resolve();
      }

      this.setPageData(
        tabId,
        "setIconSynchronizer",
        setIconSynchronizer.then(() => this.promisifiedSetIcon(tabId, path))
      );
    }
  }

  // Create only single instance of TabService
  if (typeof window.tabService === "undefined") {
    window.tabService = new TabService();
  }
})(window, chrome);

/**
 * Wrapper over Chrome Storage Service APIs.
 * Usage
 * StorageService
 *  .getInstance({ cacheRecords: true }, context})
 *  .then(() => ...);
 */

(function (window) {
  // Karma tests complain that StorageService is already defined therefore exit when StorageService already exists
  if (window.StorageService && typeof window.StorageService === "function") {
    return;
  }

  window.StorageService = class {
    /**
     *
     * @param options StorageService constructor options
     * @param context Context on which to bind e.g. getInstance({}, RQ).
     * Since initialization is async therefore context is taken as an argument
     * @returns {Promise<any>}
     */
    static getInstance(options, context) {
      return new Promise((resolve) => {
        StorageService.getStorageType().then((storageType) => {
          options.DB = storageType;
          context.StorageService = new StorageService(options);

          resolve();
        });
      });
    }

    constructor(options) {
      this.DB = options.DB ? chrome.storage[options.DB] : chrome.storage[RQ.configs.storageType];
      this.primaryKeys = options.primaryKeys || ["objectType", "ruleType"];
      this.records = [];
      this.isRecordsFetched = false;
      this.cachingEnabled = options["cacheRecords"];

      if (this.cachingEnabled) {
        chrome.storage.onChanged.addListener(this.updateRecords.bind(this));
      }

      this.saveRecordWithID = this.saveRecordWithID.bind(this);
      this.saveRecord = this.saveRecord.bind(this);
      this.getRecord = this.getRecord.bind(this);
      this.getRecords = this.getRecords.bind(this);
      this.fetchRecords = this.fetchRecords.bind(this);
    }

    static getStorageType() {
      return new Promise((resolve) => {
        StorageService.getRecordFromStorage("storageType", "sync").then((storageType) => {
          // If there is no storageType stored, fallback to default setting
          resolve(storageType || RQ.configs.storageType);
        });
      });
    }

    static setStorageType(newStorageType) {
      return StorageService.saveRecordInStorage({ storageType: newStorageType }, "sync");
    }

    fetchRecords(objectType, forceFetch) {
      const self = this;

      return new Promise((resolve, reject) => {
        /* If records have been read from storage, return the cached values */
        if (self.cachingEnabled && self.isRecordsFetched && !forceFetch) {
          resolve(self.filterRecordsByType(self.records, objectType));
          return;
        }

        // Clear the existing records
        self.records.length = 0;

        self.DB.get(null, function (superObject) {
          for (let key in superObject) {
            if (self.hasPrimaryKey(superObject[key])) {
              self.records.push(superObject[key]);
            }
          }

          self.isRecordsFetched = true;
          resolve(self.filterRecordsByType(self.records, objectType));
        });
      });
    }

    hasPrimaryKey(record) {
      if (record) {
        for (let index = 0; index < this.primaryKeys.length; index++) {
          if (typeof record[this.primaryKeys[index]] !== "undefined") {
            return true;
          }
        }
      }

      return false;
    }

    filterRecordsByType(records, requestedObjectType) {
      if (!requestedObjectType) {
        return records;
      }

      return records.filter((record) => {
        let objectType = record.objectType || RQ.OBJECT_TYPES.RULE;
        return objectType === requestedObjectType;
      });
    }

    saveRecord(object) {
      return new Promise((resolve, reject) => {
        this.DB.set(object, resolve);
      });
    }

    /**
     * Saves the object which contains ID so that we do not need to specify id as the key and whole object as value
     * @param object
     * @returns {Promise<any>}
     */
    saveRecordWithID(object) {
      return new Promise((resolve) => {
        this.DB.set({ [object.id]: object }, resolve);
      });
    }

    static saveRecordInStorage(object, storageType) {
      return new Promise((resolve) => chrome.storage[storageType].set(object, resolve));
    }

    static getRecordFromStorage(key, storageType) {
      return new Promise((resolve) => chrome.storage[storageType].get(key, (obj) => resolve(obj[key])));
    }

    getRecord(key) {
      const self = this;
      return new Promise((resolve) => self.DB.get(key, (obj) => resolve(obj[key])));
    }

    getRecords(keys) {
      const self = this;
      return new Promise((resolve) => self.DB.get(keys, (obj) => resolve(Object.values(obj))));
    }

    removeRecord(key) {
      const self = this;
      return new Promise((resolve) => self.DB.remove(key, resolve));
    }

    getCachedRecord(key) {
      const recordIndex = this.getCachedRecordIndex(key);
      return this.records[recordIndex];
    }

    getCachedRecordIndex(keyToFind) {
      for (let recordIndex = 0; recordIndex < this.records.length; recordIndex++) {
        const recordKey = this.records[recordIndex].id;

        if (recordKey === keyToFind) {
          return recordIndex;
        }
      }

      return -1;
    }

    /**
     * StorageService.records are updated on every add/edit/delete operation
     * So that background rules can be updated which are executed when each request URL is intercepted
     * @param changes SuperObject with key as Object key which is changed with old and new values
     * @param namespace Storage type: 'sync' or 'local'
     */
    updateRecords(changes, namespace) {
      var changedObject, changedObjectIndex, objectExists, changedObjectKey;

      // If storageType is changed then source the data in new storage
      if (namespace === "sync" && changes.hasOwnProperty("storageType") && changes["storageType"].newValue) {
        this.switchStorageType(changes["storageType"].newValue);
        return;
      }

      if (this.DB === chrome.storage[namespace]) {
        for (changedObjectKey in changes) {
          if (!changes.hasOwnProperty(changedObjectKey)) {
            continue;
          }

          changedObject = changes[changedObjectKey];
          changedObjectIndex = this.getCachedRecordIndex(changedObjectKey);
          objectExists = changedObjectIndex !== -1;

          // Add/Update Object operation
          if (typeof changedObject.newValue !== "undefined") {
            // Don't cache records when objects do not contain primaryKeys
            if (!this.hasPrimaryKey(changedObject.newValue)) {
              continue;
            }

            objectExists
              ? (this.records[changedObjectIndex] = changedObject.newValue) /* Update existing object (Edit) */
              : this.records.push(changedObject.newValue); /* Create New Object */
          }

          // Delete Rule Operation
          if (
            typeof changedObject.oldValue !== "undefined" &&
            typeof changedObject.newValue === "undefined" &&
            objectExists
          ) {
            this.records.splice(changedObjectIndex, 1);
          }
        }
      }
    }

    printRecords() {
      this.DB.get(null, function (o) {
        console.log(o);
      });
    }

    clearDB() {
      this.DB.clear();
    }

    switchStorageType(newStorageType) {
      if (chrome.storage[newStorageType] === this.DB) {
        Logger.log("Already on the same storage type. Doing nothing!");
        return;
      }

      Logger.log("Changing default storageType to", newStorageType);

      const existingStorage = this.DB;

      this.DB = chrome.storage[newStorageType];

      // Clear the existing records
      this.records.length = 0;

      const self = this;
      existingStorage.get(null, (superObject) => {
        const keysToRemove = [];
        for (let key in superObject) {
          if (superObject.hasOwnProperty(key) && self.hasPrimaryKey(superObject[key])) {
            // Save data in the new Storage
            chrome.storage[newStorageType].set({ [key]: superObject[key] });
            keysToRemove.push(key);
          }
        }

        // Remove records from existing storage
        existingStorage.remove(keysToRemove);
      });
    }
  };
})(window);

window.RQ = window.RQ || {};

RQ.PreDefinedFunction = function (name, descriptors) {
  this.name = name;

  // Bind all descriptor fields to this object like argument, pattern etc.
  for (var key in descriptors) {
    this[key] = descriptors[key];
  }

  var argumentPattern;
  if (this.argument.constructor === Array && this.argument.length > 0) {
    // multiple arguments
    argumentPattern = this.argument[0];
    for (var index = 1; index < this.argument.length; index++) {
      argumentPattern += "(" + RQ.PreDefinedFunction.patterns.COMMA + this.argument[index] + ")?";
    }
  } else {
    argumentPattern = this.argument;
  }
  this.pattern = this.pattern || new RegExp(this.name + "\\(" + argumentPattern + "\\)", "ig");
};

RQ.PreDefinedFunction.patterns = {
  STRING: "((?!rq_).)+", // matches any string not having rq_ (probably another predefined function)
  NUMBER: "[0-9]+",
  COMMA: " *, *",
};

RQ.PreDefinedFunction.prototype = {
  argument: RQ.PreDefinedFunction.patterns.STRING,

  eval: function (value, requestDetails = {}) {
    var that = this;

    if (typeof this.argumentEvaluator !== "function") {
      return value;
    }

    return value.replace(this.pattern, function (token) {
      var matches = token.match(new RegExp(that.name + "\\((.*)\\)", "i")), // extract argument from rq_func(argument)
        args = [];

      if (matches != null && matches.length > 1) {
        matches[1].split(",").forEach(function (arg) {
          args.push(arg.trim());
        });
        return that.argumentEvaluator.apply(requestDetails, args);
      }

      return token;
    });
  },
};

window.RQ = window.RQ || {};

RQ.PreDefinedFunctions = {};

/**
 * @param name Name of predefined function, mandatory to start with 'rq_'.
 * @param descriptors Set of properties which define this function. Eg: description, usage, argument
 */
RQ.registerPredefinedFunction = function (name, descriptors) {
  RQ.PreDefinedFunctions[name] = new RQ.PreDefinedFunction(name, descriptors);
};

RQ.registerPredefinedFunction("rq_rand", {
  description: "Generate Random Number",

  usage: "rq_rand(4) (Max 8 digits allowed)",

  argument: RQ.PreDefinedFunction.patterns.NUMBER, // rq_rand(argument)

  argumentEvaluator: function (arg) {
    var numDigits = Math.min(arg, 8),
      valueToFit = Math.ceil(Math.random() * Math.pow(10, numDigits));

    // Catch: For <rq_rand(4)>, we may get 3 digit value because leading zeros are omitted from numbers
    valueToFit = valueToFit.toString();
    while (valueToFit.length < numDigits) {
      valueToFit = valueToFit + "0";
    }

    return valueToFit;
  },
});

RQ.registerPredefinedFunction("rq_encode", {
  description: "Encode part of URL",

  usage: "rq_encode(user+test@example.com)",

  argument: RQ.PreDefinedFunction.patterns.STRING,

  argumentEvaluator: encodeURIComponent,
});

RQ.registerPredefinedFunction("rq_decode", {
  description: "Encode part of URL",

  usage: "rq_decode(user%2Btest%40example.com)",

  argument: RQ.PreDefinedFunction.patterns.STRING,

  argumentEvaluator: decodeURIComponent,
});

RQ.registerPredefinedFunction("rq_increment", {
  description: "Increment a number optionally by a step",

  usage: "rq_increment(3,5)",

  argument: [RQ.PreDefinedFunction.patterns.NUMBER, RQ.PreDefinedFunction.patterns.NUMBER],

  argumentEvaluator: function (num, step) {
    step = step || 1;
    return parseInt(num) + parseInt(step);
  },
});

RQ.registerPredefinedFunction("rq_decrement", {
  description: "Decrement a number optionally by a step",

  usage: "rq_increment(5,2)",

  argument: [RQ.PreDefinedFunction.patterns.NUMBER, RQ.PreDefinedFunction.patterns.NUMBER],

  argumentEvaluator: function (num, step) {
    step = step || 1;
    return parseInt(num) - parseInt(step);
  },
});

RQ.registerPredefinedFunction("rq_request_initiator_origin", {
  description: "The origin from where the request initiated",

  usage: "rq_request_initiator_origin()",

  argument: [],

  // the function is invoked in the context of network request details object
  argumentEvaluator: function () {
    if (this.initiator && this.initiator !== "null") {
      return this.initiator;
    }

    try {
      const url = new URL(window.tabService.getTabUrl(this.tabId));
      return url.origin;
    } catch (e) {
      return "";
    }
  },
});

const RuleMatcher = {};

/**
 *
 * @param finalString String having $values e.g. http://www.example.com?q=$1&p=$2
 * @param matches Array of matches in Regex and wildcard matches
 * @returns String after replacing $s with match values
 */
RuleMatcher.populateMatchesInString = function (finalString, matches) {
  matches.forEach(function (matchValue, index) {
    // First match is the full string in Regex and empty string in wildcard match
    if (index === 0) {
      return;
    }

    // Issue: 73 We should not leave $i in the Url otherwise browser will encode that.
    // Even if match is not found, just replace that placeholder with empty string
    matchValue = matchValue || "";

    // Replace all $index values in destinationUrl with the matched groups
    finalString = finalString.replace(new RegExp("[$]" + index, "g"), matchValue);
  });

  return finalString;
};

/**
 *
 * @param regexString Value Field in source object
 * @param inputString UrlComponent of Source - host/url/path
 * @param finalString destinationurl - We need to place the values of groups in this string e.g. http://yahoo.com?q=$1
 * @returns {*}
 */
RuleMatcher.checkRegexMatch = function (regexString, inputString, finalString) {
  var regex = RQ.Utils.toRegex(regexString),
    matches;

  // Do not match when regex is invalid or regex does not match with Url
  if (!regex || inputString.search(regex) === -1) {
    return null;
  }

  matches = regex.exec(inputString) || [];
  return RuleMatcher.populateMatchesInString(finalString, matches);
};

/**
 *
 * @param wildCardString
 * @param inputString
 * @param finalString
 */
RuleMatcher.checkWildCardMatch = function (wildCardString, inputString, finalString) {
  var matches = [],
    wildCardSplits,
    index,
    substr,
    positionInInput;

  // Wrap wildCardString and inputString with '|' with front and end to handle * in first and last
  wildCardString = "|" + wildCardString + "|";
  inputString = "|" + inputString + "|";

  // Split with '*'
  wildCardSplits = wildCardString.split("*");

  // Traverse over first array, Search the indexOf first[i] in input
  for (index = 0; index < wildCardSplits.length; index++) {
    substr = wildCardSplits[index];
    positionInInput = inputString.indexOf(substr);

    if (positionInInput === -1) {
      return null;
    } else if (positionInInput === 0) {
      matches.push("");
    } else {
      matches.push(inputString.substr(0, positionInInput));
    }

    inputString = inputString.slice(positionInInput + substr.length);
  }

  return RuleMatcher.populateMatchesInString(finalString, matches);
};

/**
 * Checks if intercepted HTTP Request Url matches with any Rule
 *
 * @param sourceObject Object e.g. { key: 'Url/host/path', operator: 'Contains/Matches/Equals', value: 'google' }
 * @param url Url for which HTTP Request is intercepted.
 * @param destination String e.g. 'http://www.example.com?a=$1'
 *
 * @returns Empty string ('') If rule should be applied and source object does not affect resulting url.
 * In some cases like wildcard match or regex match, resultingUrl will be destination+replaced group variables.
 */
RuleMatcher.matchUrlWithRuleSource = function (sourceObject, url, requestUrlTabId, destination) {
  var operator = sourceObject.operator,
    urlComponent = RQ.Utils.extractUrlComponent(url, sourceObject.key),
    value = sourceObject.value,
    blackListedDomains = RQ.BLACK_LIST_DOMAINS || [];

  if (RQ.Utils.isAppURL(window.tabService.getTabUrl(requestUrlTabId))) {
    return null;
  }

  for (var index = 0; index < blackListedDomains.length; index++) {
    if (url.includes(blackListedDomains[index])) {
      return null;
    }
  }

  return RuleMatcher.matchUrlCriteria(urlComponent, operator, value, destination);
};

/**
 * Checks if intercepted HTTP Request Url matches with any Page Source
 *
 * @param sourceObject Object e.g. { key: 'Url/host/path', operator: 'Contains/Matches/Equals', value: 'google' }
 * @param url Url for which HTTP Request is intercepted.
 *
 * @returns Empty string ('') If rule should be applied and source object does not affect resulting url.
 * In some cases like wildcard match or regex match, resultingUrl will be destination+replaced group variables.
 */
RuleMatcher.matchUrlWithPageSource = function (sourceObject, url) {
  var operator = sourceObject.operator,
    urlComponent = RQ.Utils.extractUrlComponent(url, sourceObject.key),
    value = sourceObject.value;
  isActive = sourceObject.isActive ?? true;

  if (!isActive) return null;

  return RuleMatcher.matchUrlCriteria(urlComponent, operator, value, null);
};

RuleMatcher.matchUrlCriteria = function (urlComponent, operator, value, destination) {
  // urlComponent comes undefined sometimes
  // e.g. pageUrl comes undefined when request is for HTML and tabService returns undefined for -1 tabId
  if (!urlComponent) return;

  const resultingUrl = destination || ""; // Destination Url is not present in all rule types (e.g. Cancel, QueryParam)

  switch (operator) {
    case RQ.RULE_OPERATORS.EQUALS:
      if (value === urlComponent) {
        return resultingUrl;
      }
      break;

    case RQ.RULE_OPERATORS.CONTAINS:
      if (urlComponent.indexOf(value) !== -1) {
        return resultingUrl;
      }
      break;

    case RQ.RULE_OPERATORS.MATCHES: {
      return RuleMatcher.checkRegexMatch(value, urlComponent, resultingUrl);
    }

    case RQ.RULE_OPERATORS.WILDCARD_MATCHES: {
      return RuleMatcher.checkWildCardMatch(value, urlComponent, resultingUrl);
    }
  }

  return null;
};

/**
 *
 * @param pairs RulePairs used in Redirect and Cancel Rules
 * @param url Url which is matched with RulePairs
 * @param requestDetails details of request
 * @returns ResultingUrl which is obtained after applying rulePairs to input Url
 */
RuleMatcher.matchUrlWithRulePairs = function (pairs, url, requestDetails) {
  var pairIndex,
    resultingUrl = url,
    newResultingUrl,
    destination,
    pair;

  for (pairIndex = 0; pairIndex < pairs.length; pairIndex++) {
    pair = pairs[pairIndex];
    destination = typeof pair.destination !== "undefined" ? pair.destination : null; // We pass destination as null in Cancel ruleType

    if (pair?.destination?.startsWith("file://")) {
      continue;
    }

    if (RuleMatcher.matchRequestWithRuleSourceFilters(pair.source.filters, requestDetails)) {
      newResultingUrl = RuleMatcher.matchUrlWithRuleSource(
        pair.source,
        resultingUrl,
        requestDetails.tabId,
        pair.destination
      );
      if (newResultingUrl !== null) {
        resultingUrl = newResultingUrl;
      }
    }
  }

  return resultingUrl !== url ? resultingUrl : null;
};

RuleMatcher.matchRequestWithRuleSourceFilters = function (sourceFilters, requestDetails) {
  if (!sourceFilters || !requestDetails) {
    return true;
  }

  if (!Array.isArray(sourceFilters)) {
    sourceFilters = [sourceFilters];
  }

  return sourceFilters.every((sourceObject) => {
    for (let filter in sourceObject) {
      let filterValues = sourceObject[filter] || [];

      // RQLY-61 Handle pageUrl value is object instead of array So wrap inside array
      if (filterValues?.constructor?.name === "Object") filterValues = [filterValues];

      switch (filter) {
        case RQ.RULE_SOURCE_FILTER_TYPES.PAGE_URL:
          const matched = filterValues.every((pageUrlFilter) =>
            RuleMatcher.matchPageUrlFilter(pageUrlFilter, requestDetails)
          );
          if (!matched) {
            return false;
          }
          break;

        case RQ.RULE_SOURCE_FILTER_TYPES.REQUEST_METHOD:
          if (!filterValues.some((requestMethodFilter) => requestDetails.method === requestMethodFilter)) {
            return false;
          }
          break;

        case RQ.RULE_SOURCE_FILTER_TYPES.RESOURCE_TYPE:
          if (!filterValues.some((requestTypeFilter) => requestDetails.type === requestTypeFilter)) {
            return false;
          }
          break;
      }
    }

    return true;
  });
};

RuleMatcher.matchPageUrlFilter = function (pageUrlFilter, requestDetails) {
  const pageUrl = window.tabService.getTabUrl(requestDetails.tabId);
  return RuleMatcher.matchUrlCriteria(pageUrl, pageUrlFilter.operator, pageUrlFilter.value) !== null;
};

/**
 * Matches given value with predefined function patterns,
 * If pattern exists, replaces the pattern with computed value otherwise returns the original value
 * @param value
 * @param requestDetails
 */
RuleMatcher.matchValueForPredefinedFunctions = function (value, requestDetails) {
  if (!value) return value;

  for (var preDefFuncName in RQ.PreDefinedFunctions) {
    var preDefFunc = RQ.PreDefinedFunctions[preDefFuncName];
    value = preDefFunc.eval(value, requestDetails);
  }

  return value;
};

/* SCOPE */
const EventActions = {};
/* STATE */
EventActions.eventsToWrite = [];
EventActions.executionEventsToWrite = [];
EventActions.eventWriterInterval = null;
EventActions.batchesWaitingForAck = [];
EventActions.eventsCount = 0;
EventActions.EVENTS_LIMIT = 50000;
EventActions.STORE_EVENTS_KEY = "eventBatches";
EventActions.STORE_EXECUTION_EVENTS_KEY = "executionEventBatches";

/* UTILITIES */

EventActions.queueEventToWrite = (event) => {
  EventActions.eventsToWrite.push(event);
};

EventActions.queueExecutionEventToWrite = (event) => {
  EventActions.executionEventsToWrite.push(event);
};

EventActions.getAllEventBatches = async () => {
  const eventBatches = (await RQ.StorageService.getRecord(EventActions.STORE_EVENTS_KEY)) || {};
  const executionEventBatches = (await RQ.StorageService.getRecord(EventActions.STORE_EXECUTION_EVENTS_KEY)) || {};

  return [eventBatches, executionEventBatches];
};

EventActions.deleteBatches = async (batchIds) => {
  const [batches, executionBatches] = await EventActions.getAllEventBatches();

  if (batches) {
    batchIds.forEach((id) => {
      if (batches[id]) {
        EventActions.eventsCount -= batches[id].events.length;
        delete batches[id];
      }
    });
  }

  if (executionBatches) {
    batchIds.forEach((id) => {
      if (executionBatches[id]) {
        EventActions.eventsCount -= executionBatches[id].events.length;
        delete executionBatches[id];
      }
    });
  }

  const newStoredBatches = {};
  newStoredBatches[EventActions.STORE_EVENTS_KEY] = batches;
  newStoredBatches[EventActions.STORE_EXECUTION_EVENTS_KEY] = executionBatches;

  await RQ.StorageService.saveRecord(newStoredBatches);
};

EventActions.getAllEventsToWrite = () => {
  /* also removes from the local events buffer */
  const _eventsToWrite = [...EventActions.eventsToWrite];
  EventActions.eventsToWrite = [];

  const _executionEventsToWrite = [...EventActions.executionEventsToWrite];
  EventActions.executionEventsToWrite = [];

  return [_eventsToWrite, _executionEventsToWrite];
};

/* batches recognised for sending here are added to batchesWaitingForAck */
EventActions.getBatchesToSend = async () => {
  let batchesToSend = [];

  const [eventBatches, executionEventBatches] = await EventActions.getAllEventBatches();
  const allEventBatches = { ...eventBatches, ...executionEventBatches };

  batchesToSend = Object.keys(allEventBatches)
    .filter((batchId) => !EventActions.batchesWaitingForAck.includes(batchId))
    .map((batchIdToSend) => {
      EventActions.batchesWaitingForAck.push(batchIdToSend);
      return allEventBatches[batchIdToSend];
    });

  return batchesToSend;
};

/* ACKNOWLEDGEMENT HANDLERS */

EventActions.stopWaitingForAcknowledgement = (batchId) => {
  const batchIndex = EventActions.batchesWaitingForAck.findIndex((batch) => batch === batchId);
  if (batchIndex !== -1) {
    EventActions.batchesWaitingForAck.splice(batchIndex, 1);
  }
};

EventActions.handleAcknowledgements = async (acknowledgedBatchIds) => {
  const batchesToDelete = acknowledgedBatchIds.filter((acknowledgedBatch) =>
    EventActions.batchesWaitingForAck.includes(acknowledgedBatch)
  );

  if (batchesToDelete.length > 0) {
    await EventActions.deleteBatches(batchesToDelete);

    batchesToDelete.forEach((batchId) => {
      EventActions.stopWaitingForAcknowledgement(batchId);
    });
  }
};

/* CORE */

// MAIN SENDING ENGINE
EventActions.sendExtensionEvents = async () => {
  const useEngine = await RQ.StorageService.getRecord(RQ.STORAGE_KEYS.USE_EVENTS_ENGINE);

  if (useEngine !== false && BG.isAppOnline) {
    const eventBatchesPayload = await EventActions.getBatchesToSend();
    if (eventBatchesPayload?.length === 0) return;

    const extensionEventsMessage = {
      action: RQ.EXTENSION_MESSAGES.SEND_EXTENSION_EVENTS,
      eventBatches: eventBatchesPayload,
    };

    const response = await BG.Methods.sendMessageToApp(extensionEventsMessage);

    if (response?.wasMessageSent) {
      await EventActions.handleAcknowledgements(response.payload.ackIds);
    } else {
      eventBatchesPayload.forEach((batch) => {
        EventActions.stopWaitingForAcknowledgement(batch.id);
      });
    }
  }
};

EventActions.writeEventsToLocalStorage = async () => {
  if (EventActions.eventsCount > EventActions.EVENTS_LIMIT) {
    EventActions.clearAllEventBatches();
    EventActions.eventsCount = 0;
    return;
  }

  const _sendExecutionEvents = await RQ.StorageService.getRecord(RQ.STORAGE_KEYS.SEND_EXECUTION_EVENTS);

  const createBatch = (eventsArray, isExecutionEventBatch = false) => {
    let batchId = RQ.commonUtils.generateUUID();

    if (isExecutionEventBatch) {
      batchId = "execution_" + batchId;
    }

    return {
      id: batchId,
      events: eventsArray,
      createdTs: Date.now(),
    };
  };

  const [_eventsToWrite, _executionEventsToWrite] = EventActions.getAllEventsToWrite();

  let newEventsBatch = null,
    newExecutionEventsBatch = null;

  if (_eventsToWrite.length) {
    EventActions.eventsCount += _eventsToWrite.length;
    newEventsBatch = createBatch(_eventsToWrite);
  }

  if (_sendExecutionEvents !== false && _executionEventsToWrite.length) {
    EventActions.eventsCount += _executionEventsToWrite.length;
    newExecutionEventsBatch = createBatch(_executionEventsToWrite, true);
  }

  return EventActions.getAllEventBatches().then(([batchesInStorage, executionBatchesInStorage]) => {
    if (newEventsBatch) {
      batchesInStorage[newEventsBatch.id] = newEventsBatch;
    }
    if (newExecutionEventsBatch) {
      executionBatchesInStorage[newExecutionEventsBatch.id] = newExecutionEventsBatch;
    }

    const newStoredBatches = {};
    newStoredBatches[EventActions.STORE_EVENTS_KEY] = batchesInStorage;
    newStoredBatches[EventActions.STORE_EXECUTION_EVENTS_KEY] = executionBatchesInStorage;

    return RQ.StorageService.saveRecord(newStoredBatches).then(() => {
      EventActions.sendExtensionEvents();
    });
  });
};

EventActions.setEventsCount = async () => {
  const [batchesInStorage, executionBatchesInStorage] = await EventActions.getAllEventBatches();

  EventActions.eventsCount = Object.values({ ...batchesInStorage, ...executionBatchesInStorage })?.reduce(
    (total, { events }) => total + events.length,
    0
  );
};

EventActions.startPeriodicEventWriter = async (intervalTime = 10000) => {
  if (!EventActions.eventWriterInterval) {
    EventActions.eventWriterInterval = setInterval(async () => {
      await EventActions.writeEventsToLocalStorage();
    }, intervalTime);
  }

  return EventActions.eventWriterInterval;
};

EventActions.stopPeriodicEventWriter = () => {
  if (EventActions.eventWriterInterval) {
    clearInterval(EventActions.eventWriterInterval);
    EventActions.eventWriterInterval = null;
  }
};

EventActions.clearExecutionEvents = async () => {
  await RQ.StorageService.removeRecord(EventActions.STORE_EXECUTION_EVENTS_KEY);
};

EventActions.clearAllEventBatches = async () => {
  await RQ.StorageService.removeRecord(EventActions.STORE_EVENTS_KEY);
  EventActions.clearExecutionEvents();
};

RQ.flags = ["response_rule_enabled"];

class ExtensionIconManager {
  #isExtensionDisabled = false;

  #icons = {
    DEFAULT: "/resources/images/48x48.png",
    DISABLED: "/resources/images/48x48_greyscale.png",
    RULE_EXECUTED: "/resources/images/48x48_green.png",
    DEFAULT_WITH_REC: "/resources/images/48x48_rec.png",
    RULE_EXECUTED_WITH_REC: "/resources/images/48x48_green_rec.png",
  };

  #CONSTANTS = {
    PAGE_DATA_ICON_CONFIG: "extensionIconConfig",
  };

  constructor() {
    chrome.tabs.onUpdated.addListener((tabId) => {
      this.#updateIconState(tabId);
    });
  }

  #getDefaultConfig() {
    return {
      ruleExecuted: false,
      isRecording: false,
    };
  }

  #getIcon(config) {
    if (this.#isExtensionDisabled) {
      return this.#icons.DISABLED;
    }

    if (config.ruleExecuted) {
      if (config.isRecording) {
        return this.#icons.RULE_EXECUTED_WITH_REC;
      }

      return this.#icons.RULE_EXECUTED;
    }

    if (config.isRecording) {
      return this.#icons.DEFAULT_WITH_REC;
    }

    return this.#icons.DEFAULT;
  }

  #updateIconState(tabId, newConfigKey, newConfigValue) {
    let config =
      window.tabService.getPageData(tabId, this.#CONSTANTS.PAGE_DATA_ICON_CONFIG) || this.#getDefaultConfig();

    if (newConfigKey && config[newConfigKey] !== newConfigValue) {
      config = { ...config, [newConfigKey]: newConfigValue };
      window.tabService.setPageData(tabId, this.#CONSTANTS.PAGE_DATA_ICON_CONFIG, config);
    }

    window.tabService.setExtensionIcon(this.#getIcon(config), tabId);
  }

  #updateIconStateForAllTabs() {
    const tabsWithIconConfig = window.tabService.getTabsWithPageDataFilter((pageData) => {
      return !!pageData[this.#CONSTANTS.PAGE_DATA_ICON_CONFIG];
    });
    tabsWithIconConfig.forEach((tab) => this.#updateIconState(tab.id));
  }

  markExtensionEnabled = () => {
    this.#isExtensionDisabled = false;
    window.tabService.setExtensionIcon(this.#icons.DEFAULT);
    this.#updateIconStateForAllTabs();
  };

  markExtensionDisabled = () => {
    this.#isExtensionDisabled = true;
    window.tabService.setExtensionIcon(this.#icons.DISABLED);
    this.#updateIconStateForAllTabs();
  };

  markRuleExecuted(tabId) {
    this.#updateIconState(tabId, "ruleExecuted", true);
  }

  markRecording(tabId) {
    this.#updateIconState(tabId, "isRecording", true);
  }

  markNotRecording(tabId) {
    this.#updateIconState(tabId, "isRecording", false);
  }
}

RQ.extensionIconManager = new ExtensionIconManager();

let BG = {};
BG = window.BG = {
  Methods: {},
  statusSettings: {
    id: RQ.STORAGE_KEYS.REQUESTLY_SETTINGS,
    avoidCache: true,
    isExtensionEnabled: true,
  },
  userInfo: {
    id: RQ.STORAGE_KEYS.USER_INFO,
    avoidCache: true,
    installationDate: Date.now(),
    planName: "",
    isLoggedIn: "",
  },
  isAppOnline: false,
  extensionStatusContextMenuId: -1,
  modifiedRequestsPool: new Queue(1000),
};

BG.TAB_SERVICE_DATA = {
  CLIENT_PORT: "clientPort",
  CLIENT_LOAD_SUBSCRIBERS: "clientLoadSubscribers",
  SESSION_RECORDING: "sessionRecording",
  APPLIED_RULE_DETAILS: "appliedRuleDetails",
  TEST_RULE_DATA: "testRuleData",
};

/**
 * Applies replace rule on given url
 * @param rule definition
 * @param url Url on which rule is to be applied
 * @param details details of request
 * @returns resultingUrl after applying replace rule
 */
BG.Methods.applyReplaceRule = function (rule, url, details) {
  let pairs = rule.pairs,
    pair = null,
    from = null,
    isFromPartRegex,
    resultingUrl = url;

  for (let i = 0; i < pairs.length; i++) {
    pair = pairs[i];
    pair.from = pair.from || "";

    if (pair.source && !RuleMatcher.matchRequestWithRuleSourceFilters(pair.source.filters, details)) {
      continue;
    }

    // If Source Value exists and does not match, proceed with next pair
    if (
      pair.source &&
      pair.source.value &&
      RuleMatcher.matchUrlWithRuleSource(pair.source, resultingUrl, details.tabId) === null
    ) {
      continue;
    }

    // When string pair.from looks like a RegExp, create a RegExp object from it
    from = RQ.Utils.toRegex(pair.from);
    isFromPartRegex = from !== null;

    from = from || pair.from;

    // Use String.match method when from is Regex otherwise use indexOf
    // Issue-86: String.match("?a=1") fails with an error
    if ((isFromPartRegex && resultingUrl.match(from)) || resultingUrl.indexOf(from) !== -1) {
      resultingUrl = resultingUrl.replace(from, pair.to);
    }
  }

  return resultingUrl !== url ? resultingUrl : null;
};

BG.Methods.applyQueryParamModification = function (modification, url) {
  var resultingUrl = url,
    urlWithoutQueryParams = RQ.Utils.getUrlWithoutQueryParamsAndHash(url),
    urlHash = RQ.Utils.extractUrlComponent(url, RQ.URL_COMPONENTS.HASH),
    queryString = RQ.Utils.extractUrlComponent(url, RQ.URL_COMPONENTS.QUERY),
    queryParamsMap = RQ.Utils.getQueryParamsMap(queryString),
    paramName = modification.param,
    paramValue = modification.value;

  switch (modification.type) {
    case RQ.MODIFICATION_TYPES.ADD:
      if (modification.actionWhenParamExists === "Overwrite") {
        queryParamsMap[paramName] = [];
        queryParamsMap[paramName].push(paramValue);

        queryString = RQ.Utils.convertQueryParamMapToString(queryParamsMap);
        resultingUrl = queryString ? urlWithoutQueryParams + "?" + queryString : urlWithoutQueryParams;
        resultingUrl += urlHash;
      }

      if (modification.actionWhenParamExists === "Ignore") {
        resultingUrl = url;
      }
      break;

    case RQ.MODIFICATION_TYPES.REMOVE:
      if (paramName in queryParamsMap) {
        delete queryParamsMap[paramName];

        queryString = RQ.Utils.convertQueryParamMapToString(queryParamsMap);

        resultingUrl = queryString ? urlWithoutQueryParams + "?" + queryString : urlWithoutQueryParams;
        resultingUrl += urlHash;
      }
      break;

    case RQ.MODIFICATION_TYPES.REMOVE_ALL:
      resultingUrl = urlWithoutQueryParams + urlHash;
      break;
  }

  return resultingUrl;
};

/**
 * Apply list of query param modifications to given url
 * @param modifications
 * @param url
 * @returns Final Url after applying the given modifications to input url
 */
BG.Methods.applyQueryParamModifications = function (modifications, url) {
  var resultingUrl = url;

  modifications.forEach(function (modification) {
    resultingUrl = BG.Methods.applyQueryParamModification(modification, resultingUrl);
  });

  return resultingUrl;
};

BG.Methods.applyQueryParamRule = function (rule, url, details) {
  var pairs = rule.pairs,
    pair = null,
    resultingUrl = url;

  for (var i = 0; i < pairs.length; i++) {
    pair = pairs[i];

    // If Source does not match, proceed with next pair
    if (
      !RuleMatcher.matchRequestWithRuleSourceFilters(pair.source.filters, details) ||
      RuleMatcher.matchUrlWithRuleSource(pair.source, url, details.tabId) === null
    ) {
      continue;
    }

    resultingUrl = BG.Methods.applyQueryParamModifications(pair.modifications, resultingUrl);
  }

  return resultingUrl !== url ? resultingUrl : null;
};

BG.Methods.applyDelayRequestRule = function (rule, url, details) {
  var pairs = rule.pairs,
    pair = null,
    resultingUrl = url,
    delay = null,
    delayType = null;

  // add params delay=true
  const backlistDelayParams = {
    paramName: RQ.DELAY_REQUEST_CONSTANTS.DELAY_PARAM_NAME,
    paramValue: RQ.DELAY_REQUEST_CONSTANTS.DELAY_PARAM_VALUE,
  };

  for (var i = 0; i < pairs.length; i++) {
    pair = pairs[i];

    // If Source does not match, proceed with next pair
    if (
      !RuleMatcher.matchRequestWithRuleSourceFilters(pair.source.filters, details) ||
      RuleMatcher.matchUrlWithRuleSource(pair.source, url, details.tabId) === null
    ) {
      continue;
    }

    // If Source Value exists and does not match, proceed with next pair
    if (
      pair.source &&
      pair.source.value &&
      RuleMatcher.matchUrlWithRuleSource(pair.source, resultingUrl, details.tabId) === null
    ) {
      continue;
    }

    resultingUrl = RuleMatcher.matchValueForPredefinedFunctions(resultingUrl, details);

    delay = pair.delay;

    if (
      details.type !== RQ.DELAY_REQUEST_CONSTANTS.REQUEST_TYPE.XHR &&
      details.method === RQ.DELAY_REQUEST_CONSTANTS.METHOD_TYPE.GET
    ) {
      delayType = RQ.DELAY_REQUEST_CONSTANTS.DELAY_TYPE.SERVER_SIDE;
      delay = pair.delay;
    } else {
      delayType = RQ.DELAY_REQUEST_CONSTANTS.DELAY_TYPE.CLIENT_SIDE;
      delay = Math.min(pair.delay, RQ.DELAY_REQUEST_CONSTANTS.MAX_DELAY_VALUE_XHR);
    }

    if (delayType === "serverSideDelay") {
      resultingUrl = RQ.CONSTANTS.DELAY_API_URL + `${delay}/${resultingUrl}`;
    } else {
      // adds delay=true query string
      resultingUrl = RQ.Utils.addQueryParamToURL(
        resultingUrl,
        backlistDelayParams.paramName,
        backlistDelayParams.paramValue,
        false
      );

      // If multiple matching pairs are present, delay is applied on the first pair matched.
      RQ.Utils.addDelay(delay);
    }

    return resultingUrl;
  }

  return null;
};

BG.Methods.addHeader = function (headers, newHeader) {
  headers.push({ name: newHeader.name, value: newHeader.value });
};

BG.Methods.removeHeader = function (headers, name) {
  for (var i = headers.length - 1; i >= 0; i--) {
    var header = headers[i];
    if (header.name && header.name.toLowerCase() === name.toLowerCase()) {
      headers.splice(i, 1);
    }
  }
};

BG.Methods.modifyHeaderIfExists = function (headers, newHeader) {
  for (var i = headers.length - 1; i >= 0; i--) {
    var header = headers[i];
    if (header.name && header.name.toLowerCase() === newHeader.name.toLowerCase()) {
      header.value = newHeader.value;
      break;
    }
  }
};

BG.Methods.replaceHeader = function (headers, newHeader) {
  BG.Methods.removeHeader(headers, newHeader.name);
  BG.Methods.addHeader(headers, newHeader);
};

BG.Methods.getHeaderValue = (headers = [], headerName) => {
  const headerObject = headers.find(({ name }) => name.toLowerCase() === headerName.toLowerCase());
  return headerObject?.value;
};

BG.Methods.copyIgnoredHeadersOnRedirect = (originalHeaders) => {
  let isHeadersModified = false;
  RQ.IGNORED_HEADERS_ON_REDIRECT.forEach((headerName) => {
    const customHeaderName = RQ.CUSTOM_HEADER_PREFIX + headerName;
    const customHeaderValue = BG.Methods.getHeaderValue(originalHeaders, customHeaderName);
    const originalHeaderValue = BG.Methods.getHeaderValue(originalHeaders, headerName);

    // Check if value is present in custom header and original header is not present
    if (customHeaderValue) {
      if (!originalHeaderValue) {
        // If original header is not present, copy the value from custom header to original header
        BG.Methods.addHeader(originalHeaders, { name: headerName, value: customHeaderValue });
      }
      // remove the custom header
      BG.Methods.removeHeader(originalHeaders, customHeaderName);
      isHeadersModified = true;
    }
  });
  return isHeadersModified;
};

BG.Methods.addCORSHeaderForCustomHeaders = (originalHeaders, requestMethod) => {
  let isHeadersModified = false;
  if (!RQ.IGNORED_HEADERS_ON_REDIRECT?.length || requestMethod !== "OPTIONS") return isHeadersModified;

  const customRQHeaderNames = RQ.IGNORED_HEADERS_ON_REDIRECT.map(
    (headerName) => RQ.CUSTOM_HEADER_PREFIX + headerName
  ).join(",");

  const originalValue = BG.Methods.getHeaderValue(originalHeaders, "access-control-allow-headers");
  if (originalValue === "*") {
    isHeadersModified = false;
  } else {
    BG.Methods.addHeader(originalHeaders, {
      name: "access-control-allow-headers",
      value: customRQHeaderNames,
    });
    isHeadersModified = true;
  }

  return isHeadersModified;
};

/**
 *
 * @param originalHeaders Original Headers present in the HTTP(s) request
 * @param headersTarget Request/Response (Where Modification is to be done)
 * @param details (Actual details object)
 * @returns originalHeaders with modifications if modified else returns {code}null{/code}
 */
BG.Methods.modifyHeaders = function (originalHeaders, headersTarget, details) {
  var rule,
    ruleType,
    rulePairs,
    rulePair,
    isRuleApplied = false,
    isHeadersModified = false,
    modifications,
    modification,
    url = details.url,
    mainFrameUrl = BG.Methods.getMainFrameUrl(details),
    enabledRules = BG.Methods.getEnabledRules();

  // Forwards Auth Header to the redirected URL. Refer: https://github.com/requestly/requestly/issues/1208
  if (headersTarget === RQ.HEADERS_TARGET.REQUEST) {
    isHeadersModified = BG.Methods.copyIgnoredHeadersOnRedirect(originalHeaders);
  } else {
    isHeadersModified = BG.Methods.addCORSHeaderForCustomHeaders(originalHeaders, details.method);
  }

  for (var i = 0; i < enabledRules.length; i++) {
    rule = enabledRules[i];
    ruleType = rule.ruleType;

    if ([RQ.RULE_TYPES.HEADERS, RQ.RULE_TYPES.USERAGENT].indexOf(ruleType) === -1) {
      continue;
    }

    rulePairs = rule.pairs || [];

    for (var index = 0; index < rulePairs.length; index++) {
      rulePair = rulePairs[index];

      if (rule.version > 1) {
        if (!RuleMatcher.matchRequestWithRuleSourceFilters(rulePair.source.filters, details)) {
          continue;
        }
        modifications = rulePair.modifications?.[headersTarget] || [];
      } else {
        modifications = [rulePair];
      }

      for (var modificationIndex = 0; modificationIndex < modifications.length; ++modificationIndex) {
        modification = modifications[modificationIndex];

        // We generate modificationType, target etc for UA rule in this method. These fields are not persisted
        if (ruleType === RQ.RULE_TYPES.USERAGENT) {
          modification = BG.Methods.getUserAgentHeaderModification(modification);
        }

        if ((!(rule.version > 1) && modification.target !== headersTarget) || !modification.header) {
          continue;
        }

        if (!RuleMatcher.matchRequestWithRuleSourceFilters(rulePair.source.filters, details)) {
          continue;
        }

        // If Source Value exists and does not match, proceed with next pair
        // In UA Rule Type, we match Source Object with mainFrame as well
        if (
          rulePair.source &&
          RuleMatcher.matchUrlWithRuleSource(rulePair.source, url, details.tabId) === null &&
          !(
            ruleType === RQ.RULE_TYPES.USERAGENT &&
            rulePair.source.requestType === RQ.REQUEST_TYPES.MAIN_FRAME &&
            mainFrameUrl &&
            RuleMatcher.matchUrlWithRuleSource(rulePair.source, mainFrameUrl, details.tabId) !== null
          )
        ) {
          continue;
        }

        isRuleApplied = true;

        // Check if user has used predefinedFunction in (add/modify) header value
        var valueWithPreDefFunctionsApplied = RuleMatcher.matchValueForPredefinedFunctions(modification.value, details);

        switch (modification.type) {
          case RQ.MODIFICATION_TYPES.ADD:
            BG.Methods.addHeader(originalHeaders, {
              name: modification.header,
              value: valueWithPreDefFunctionsApplied,
            });
            break;

          case RQ.MODIFICATION_TYPES.REMOVE:
            BG.Methods.removeHeader(originalHeaders, modification.header);
            break;

          case RQ.MODIFICATION_TYPES.MODIFY:
            BG.Methods.modifyHeaderIfExists(originalHeaders, {
              name: modification.header,
              value: valueWithPreDefFunctionsApplied,
            });
            break;

          // This ensures header is sent only once.
          // If it is not present, we will add this header otherwise modify the existing one
          case RQ.MODIFICATION_TYPES.REPLACE:
            BG.Methods.replaceHeader(originalHeaders, {
              name: modification.header,
              value: valueWithPreDefFunctionsApplied,
            });
            break;
        }

        BG.Methods.logRuleApplied(
          rule,
          details,
          `modified ${headersTarget === RQ.HEADERS_TARGET.REQUEST ? "request" : "response"} headers`
        );
      }
    }
  }

  // If rule is not applied and we return headers object without any change, then chrome treats them as modification
  // And some websites break due to this.
  return isRuleApplied || isHeadersModified ? originalHeaders : null;
};

BG.Methods.getMainFrameUrl = function (details) {
  return window.tabService.getTabUrl(details.tabId);
};

BG.Methods.isTopDocumentRequest = (requestDetails) => {
  // documentLifeCycle is only used by chrome
  const isDocumentLifeCycleActive = requestDetails.documentLifecycle
    ? requestDetails.documentLifecycle === "active"
    : true;

  return requestDetails.type === "main_frame" && isDocumentLifeCycleActive;
};

BG.Methods.getUserAgentHeaderModification = function (ruleModification) {
  return {
    target: RQ.HEADERS_TARGET.REQUEST,
    type: RQ.MODIFICATION_TYPES.REPLACE,
    header: RQ.HEADER_NAMES.USER_AGENT,
    value: ruleModification.userAgent,
  };
};

BG.Methods.getMatchingRulePairs = function (sourceUrl, ruleType, requestDetails) {
  if (!BG.statusSettings.isExtensionEnabled) return [];

  return BG.Methods.getEnabledRules()
    .filter(function (enabledRule) {
      return !ruleType || enabledRule.ruleType === ruleType;
    })
    .reduce(function (matchedRulePairsSoFar, enabledRule) {
      var matchedRulePairs = enabledRule.pairs.filter(function (pair) {
        return RuleMatcher.matchUrlWithRuleSource(pair.source, sourceUrl, requestDetails.tabId) !== null;
      });
      return matchedRulePairsSoFar.concat(matchedRulePairs);
    }, []);
};

BG.Methods.getEnabledRules = function () {
  var enabledRules = [],
    allRules = [],
    groups = {};

  RQ.StorageService.records.forEach(function (record) {
    if (!record.objectType || record.objectType === RQ.OBJECT_TYPES.RULE) {
      allRules.push(record);
    } else if (record.objectType === RQ.OBJECT_TYPES.GROUP) {
      groups[record.id] = record;
    }
  });

  allRules.forEach(function (rule) {
    var group = rule.groupId && groups[rule.groupId];

    if (rule.status === RQ.RULE_STATUS.ACTIVE && (!group || group.status === RQ.GROUP_STATUS.ACTIVE)) {
      enabledRules.push(rule);
    }
  });

  return enabledRules;
};

BG.Methods.getMatchingRules = function (sourceUrl, ruleType, details) {
  if (!BG.statusSettings.isExtensionEnabled) return [];

  return BG.Methods.getEnabledRules().filter(function (rule) {
    return (
      (!ruleType || rule.ruleType === ruleType) &&
      RuleMatcher.matchUrlWithRulePairs(rule.pairs, sourceUrl, details) !== null
    );
  });
};

BG.Methods.modifyUrl = function (details) {
  var requestUrl = details.url,
    resultingUrl = null,
    enabledRules;

  // Do not modify OPTIONS request since preflight requests cannot be redirected
  if (details.method.toLowerCase() === "options") {
    return;
  }

  // Do not modify URL again if it has been already processed earlier
  if (details.requestId && BG.modifiedRequestsPool.getElementIndex(details.requestId) > -1) {
    return;
  }

  enabledRules = BG.Methods.getEnabledRules();

  for (var i = 0; i < enabledRules.length; i++) {
    var rule = enabledRules[i],
      processedUrl = null;

    switch (rule.ruleType) {
      case RQ.RULE_TYPES.REDIRECT:
        // Introduce Pairs: Transform the Redirect Rule Model to new Model to support multiple entries (pairs)
        if (typeof rule.source !== "undefined" && typeof rule.destination !== "undefined") {
          rule.pairs = [
            {
              source: {
                key: RQ.RULE_KEYS.URL,
                operator: rule.source.operator,
                value: rule.source.values[0],
              },
              destination: rule.destination,
            },
          ];

          delete rule.source;
          delete rule.destination;
        }

        processedUrl = RuleMatcher.matchUrlWithRulePairs(rule.pairs, requestUrl, details);
        processedUrl = RuleMatcher.matchValueForPredefinedFunctions(processedUrl, details);

        break;

      // In case of Cancel Request, destination url is 'javascript:'
      case RQ.RULE_TYPES.CANCEL:
        // Introduce Pairs: Transform the Cancel Rule Model to new Model to support multiple entries (pairs)
        if (typeof rule.source !== "undefined") {
          rule.pairs = [
            {
              source: {
                key: RQ.RULE_KEYS.URL,
                operator: rule.source.operator,
                value: rule.source.values[0],
              },
            },
          ];

          delete rule.source;
        }

        processedUrl = RuleMatcher.matchUrlWithRulePairs(rule.pairs, requestUrl, details);
        if (processedUrl !== null) {
          processedUrl = "javascript:";
        }
        break;

      case RQ.RULE_TYPES.REPLACE:
        processedUrl = BG.Methods.applyReplaceRule(rule, requestUrl, details);
        processedUrl = RuleMatcher.matchValueForPredefinedFunctions(processedUrl, details);

        break;

      case RQ.RULE_TYPES.QUERYPARAM:
        processedUrl = BG.Methods.applyQueryParamRule(rule, requestUrl, details);
        processedUrl = RuleMatcher.matchValueForPredefinedFunctions(processedUrl, details);

        break;

      case RQ.RULE_TYPES.DELAY:
        processedUrl = BG.Methods.applyDelayRequestRule(rule, requestUrl, details);

        break;
    }

    if (processedUrl) {
      // allow other rules to apply on resultingUrl
      requestUrl = resultingUrl = processedUrl;
      BG.Methods.logRuleApplied(rule, details, "redirected to " + resultingUrl);
    }
  }

  if (resultingUrl) {
    BG.modifiedRequestsPool.enQueue(details.requestId);
    return { redirectUrl: resultingUrl };
  }
};

BG.Methods.logRuleApplied = function (rule, requestDetails, modification) {
  if (requestDetails.tabId === chrome.tabs.TAB_ID_NONE) {
    // Requests which are fired from non-tab pages like background, chrome-extension page
    return;
  }

  BG.Methods.sendLogToDevTools(rule, requestDetails, modification);
  BG.Methods.sendAppliedRuleDetailsToClient(rule, requestDetails);
};

BG.Methods.onBeforeRequest = (details) => {
  return BG.Methods.modifyUrl(details);
};

BG.Methods.modifyHeadersForSessionReplayPlayer = ({
  headersToUpdate,
  ruleModifiedHeaders,
  requestDetails,
  originalHeaders,
}) => {
  if (!BG.statusSettings.isExtensionEnabled) return null;

  try {
    const requestInitiator = new URL(requestDetails.initiator ?? requestDetails.originUrl); // firefox does not contain "initiator"
    const isAppInitiator = requestInitiator.origin?.includes(RQ.configs.WEB_URL);
    const fontTypes = ["woff", "woff2", "otf", "ttf", "eot"];
    const requestURL = new URL(requestDetails.url);
    const isFontResourceLink = fontTypes.some((type) => requestURL.pathname?.endsWith(type));

    if (isAppInitiator && (requestDetails.type === "font" || isFontResourceLink)) {
      const formattedHeaders = Object.keys(headersToUpdate).map((key) => ({
        name: key,
        value: headersToUpdate[key],
      }));

      const modifyHeaders = (headers) => {
        return headers
          .filter((header) => !(header?.name?.toLowerCase() in headersToUpdate))
          .concat(...formattedHeaders);
      };

      return !ruleModifiedHeaders ? modifyHeaders(originalHeaders) : modifyHeaders(ruleModifiedHeaders);
    }
  } catch (e) {
    // do nothing
  }

  return ruleModifiedHeaders;
};

BG.Methods.modifyRequestHeadersListener = function (details) {
  var modifiedHeaders = BG.Methods.modifyHeaders(details.requestHeaders, RQ.HEADERS_TARGET.REQUEST, details);

  try {
    const requestURL = new URL(details.url);

    // Overriding referer header since for session replay player
    // it's value is app.requestly.io, which break some websites eg apple.com
    const requestHeaders = { referer: requestURL.origin + "/" };

    modifiedHeaders = BG.Methods.modifyHeadersForSessionReplayPlayer({
      requestDetails: details,
      headersToUpdate: requestHeaders,
      ruleModifiedHeaders: modifiedHeaders,
      originalHeaders: details.requestHeaders,
    });
  } catch (e) {
    // do nothing
  }

  if (modifiedHeaders !== null) {
    return { requestHeaders: modifiedHeaders };
  }
};

BG.Methods.onHeadersReceived = function (details) {
  let modifiedHeaders = BG.Methods.modifyHeaders(details.responseHeaders, RQ.HEADERS_TARGET.RESPONSE, details);

  try {
    const requestInitiator = new URL(details.initiator ?? details.originUrl); // firefox does not contain "initiator"

    // This bypasses the CORS error in session replay player
    const corsHeaders = {
      "access-control-allow-methods": "*",
      "access-control-allow-headers": "*",
      "access-control-allow-credentials": "true",
      "access-control-allow-origin": requestInitiator.origin,
    };

    modifiedHeaders = BG.Methods.modifyHeadersForSessionReplayPlayer({
      requestDetails: details,
      headersToUpdate: corsHeaders,
      ruleModifiedHeaders: modifiedHeaders,
      originalHeaders: details.responseHeaders,
    });
  } catch (e) {
    // do nothing
  }

  if (modifiedHeaders !== null) {
    return { responseHeaders: modifiedHeaders };
  }
};

BG.Methods.getRulesAndGroups = function () {
  const rules = RQ.StorageService.records.filter(function (record) {
    return record.objectType === RQ.OBJECT_TYPES.RULE;
  });

  const groups = RQ.StorageService.records.filter(function (record) {
    return record.objectType === RQ.OBJECT_TYPES.GROUP;
  });

  return { rules, groups };
};

BG.Methods.getPinnedRules = function () {
  return RQ.StorageService.records.filter(function (record) {
    return record.objectType === RQ.OBJECT_TYPES.RULE && record.isFavourite;
  });
};

/**
 *
 * @param {Boolean} populateChildren
 * @returns
 */
BG.Methods.getPinnedGroups = function (populateChildren) {
  const pinnedGroups = {};

  RQ.StorageService.records.forEach((record) => {
    if (record.objectType === RQ.OBJECT_TYPES.GROUP && record.isFavourite) {
      pinnedGroups[record.id] = { ...record, children: [] };
    }
  });

  if (populateChildren) {
    RQ.StorageService.records.forEach((record) => {
      if (!record.objectType || record.objectType === RQ.OBJECT_TYPES.RULE) {
        if (record.groupId && pinnedGroups[record.groupId]) {
          pinnedGroups[record.groupId].children.push(record);
        }
      }
    });
  }

  return Object.values(pinnedGroups);
};

BG.Methods.checkIfNoRulesPresent = function () {
  const hasRules = RQ.StorageService.records.some(function (record) {
    return record.objectType === RQ.OBJECT_TYPES.RULE;
  });

  return !hasRules;
};

BG.Methods.registerListeners = function () {
  if (!chrome.webRequest.onBeforeRequest.hasListener(BG.Methods.onBeforeRequest)) {
    chrome.webRequest.onBeforeRequest.addListener(BG.Methods.onBeforeRequest, { urls: ["<all_urls>"] }, ["blocking"]);
  }

  if (!chrome.webRequest.onBeforeSendHeaders.hasListener(BG.Methods.modifyRequestHeadersListener)) {
    var onBeforeSendHeadersOptions = ["blocking", "requestHeaders"];
    if (chrome.webRequest.OnBeforeSendHeadersOptions.EXTRA_HEADERS) {
      onBeforeSendHeadersOptions.push(chrome.webRequest.OnBeforeSendHeadersOptions.EXTRA_HEADERS);
    }

    chrome.webRequest.onBeforeSendHeaders.addListener(
      BG.Methods.modifyRequestHeadersListener,
      { urls: ["<all_urls>"] },
      onBeforeSendHeadersOptions
    );
  }

  if (!chrome.webRequest.onHeadersReceived.hasListener(BG.Methods.onHeadersReceived)) {
    var onHeadersReceivedOptions = ["blocking", "responseHeaders"];
    if (chrome.webRequest.OnHeadersReceivedOptions.EXTRA_HEADERS) {
      onHeadersReceivedOptions.push(chrome.webRequest.OnHeadersReceivedOptions.EXTRA_HEADERS);
    }

    chrome.webRequest.onHeadersReceived.addListener(
      BG.Methods.onHeadersReceived,
      { urls: ["<all_urls>"] },
      onHeadersReceivedOptions
    );
  }
};

// http://stackoverflow.com/questions/23001428/chrome-webrequest-onbeforerequest-removelistener-how-to-stop-a-chrome-web
// Documentation: https://developer.chrome.com/extensions/events
BG.Methods.unregisterListeners = function () {
  chrome.webRequest.onBeforeRequest.removeListener(BG.Methods.onBeforeRequest);
  chrome.webRequest.onBeforeSendHeaders.removeListener(BG.Methods.modifyRequestHeadersListener);
  chrome.webRequest.onHeadersReceived.removeListener(BG.Methods.onHeadersReceived);
};

BG.Methods.disableExtension = function () {
  BG.statusSettings["isExtensionEnabled"] = false;
  RQ.StorageService.saveRecord({ rq_settings: BG.statusSettings }).then(BG.Methods.handleExtensionDisabled);
};

BG.Methods.enableExtension = function () {
  BG.statusSettings["isExtensionEnabled"] = true;
  RQ.StorageService.saveRecord({ rq_settings: BG.statusSettings }).then(BG.Methods.handleExtensionEnabled);
};

BG.Methods.handleExtensionDisabled = function () {
  BG.Methods.unregisterListeners();
  chrome.contextMenus.update(BG.extensionStatusContextMenuId, {
    title: "Activate Requestly",
    onclick: BG.Methods.enableExtension,
  });

  BG.Methods.stopRecordingOnAllTabs();
  BG.Methods.sendMessageToAllAppTabs({ isExtensionEnabled: false });
  RQ.extensionIconManager.markExtensionDisabled();

  Logger.log("Requestly disabled");
};

BG.Methods.handleExtensionEnabled = function () {
  BG.Methods.registerListeners();
  chrome.contextMenus.update(BG.extensionStatusContextMenuId, {
    title: "Deactivate Requestly",
    onclick: BG.Methods.disableExtension,
  });

  RQ.extensionIconManager.markExtensionEnabled();
  BG.Methods.sendMessageToAllAppTabs({ isExtensionEnabled: true });

  Logger.log("Requestly enabled");
};

BG.Methods.checkIfExtensionEnabled = async function () {
  const alreadyStoredSettings = await RQ.StorageService.getRecord(RQ.STORAGE_KEYS.REQUESTLY_SETTINGS);
  BG.statusSettings = alreadyStoredSettings || BG.statusSettings;
  return BG.statusSettings["isExtensionEnabled"];
};

BG.Methods.toggleExtensionStatus = async function () {
  const alreadyStoredSettings = await RQ.StorageService.getRecord(RQ.STORAGE_KEYS.REQUESTLY_SETTINGS);
  BG.statusSettings = alreadyStoredSettings || BG.statusSettings;
  const extensionEnabledStatus = BG.statusSettings["isExtensionEnabled"];
  const updatedStatus = !extensionEnabledStatus;

  BG.statusSettings["isExtensionEnabled"] = updatedStatus;
  RQ.StorageService.saveRecord({ rq_settings: BG.statusSettings }).then(
    updatedStatus ? BG.Methods.handleExtensionEnabled() : BG.Methods.handleExtensionDisabled()
  );

  return updatedStatus;
};

BG.Methods.readExtensionStatus = function () {
  RQ.StorageService.getRecord(RQ.STORAGE_KEYS.REQUESTLY_SETTINGS).then((alreadyStoredSettings) => {
    BG.statusSettings = alreadyStoredSettings || BG.statusSettings;
    BG.statusSettings["isExtensionEnabled"]
      ? BG.Methods.handleExtensionEnabled()
      : BG.Methods.handleExtensionDisabled();
  });
};

BG.Methods.createContextMenu = function (title, contexts) {
  return chrome.contextMenus.create({ title, contexts, type: "normal" });
};

BG.Methods.sendMessageToAllAppTabs = function (messageObject) {
  BG.Methods.getAppTabs().then((tabs) => {
    tabs.forEach((tab) => {
      BG.Methods.sendMessageToClient(tab.id, messageObject);
    });
  });
};

BG.Methods.getAppTabs = async () => {
  const webURLs = RQ.Utils.getAllSupportedWebURLs();
  let appTabs = [];

  for (const webURL of webURLs) {
    const tabs = await new Promise((resolve) => chrome.tabs.query({ url: webURL + "/*" }, resolve));
    appTabs = [...appTabs, ...tabs];
  }

  if (appTabs.length === 0) {
    BG.isAppOnline = false;
  }
  return appTabs;
};

/**
 * Sends the message to requestly app. It takes tabId as an argument because if the app is open or not is uncertain. So there is another
 * utility, getAppTabs() which checks if app is open and returns its tabId. After being sure that the app is open, this function is called.
 * @param {Object} messageObject
 * @param {Number} tabId
 * @param {Number} timeout
 * @returns Promise resolving to {wasMessageSent,payload} from app or timeout error
 */
BG.Methods.sendMessageToApp = async (messageObject, timeout = 2000) => {
  const sendMessageToTab = (messageObject, tabId) => {
    return new Promise((resolve) => {
      BG.Methods.sendMessageToClient(tabId, messageObject, (response) => {
        resolve(response);
      });
    });
  };

  const lastTriedTabIds = [];

  while (BG.isAppOnline) {
    /* Getting one app tab (that we haven't tried sending) */
    const appTabId = await BG.Methods.getAppTabs().then((tabs) => {
      const filteredTab = tabs.find((tab) => !lastTriedTabIds.includes(tab.id));
      if (filteredTab) {
        lastTriedTabIds.push(filteredTab.id);
        return filteredTab.id;
      } else {
        BG.isAppOnline = false;
        return null;
      }
    });

    if (!appTabId) break;

    const response = await Promise.race([
      sendMessageToTab(messageObject, appTabId),
      new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), timeout)),
    ])
      .then((payload) => {
        if (payload) {
          return { wasMessageSent: true, payload };
        }
        return { wasMessageSent: false };
      })
      .catch((err) => {
        // todo: can add check if timeout based on err
        return { wasMessageSent: false };
      });

    if (response?.wasMessageSent) {
      return response;
    }
  }
  return null;
};

BG.Methods.handleExtensionInstalledOrUpdated = function (details) {
  if (details.reason === "install") {
    // Set installation date in storage so that we can take decisions based on usage time in future
    // we dont need it now as it is being handled in the UI and saved in firebase
    // RQ.StorageService.saveRecord({ user_info: BG.userInfo });

    chrome.tabs.create({ url: RQ.configs.WEB_URL + "/extension-installed" });
  }

  if (details.reason === "update") {
    const shouldOpenUpdatesPage = RQ.Utils.isOlderVersion(
      details.previousVersion,
      RQ.CONSTANTS.LAST_MAJOR_UPDATE_VERSION
    );

    if (shouldOpenUpdatesPage) {
      chrome.tabs.create({ url: RQ.CONSTANTS.UPDATES_PAGE_URL });
    }

    BG.Methods.getAppTabs().then((tabs) => {
      tabs.forEach((tab) => {
        chrome.tabs.executeScript(tab.id, {
          code: `window.postMessage({
            action: "${RQ.EXTENSION_MESSAGES.NOTIFY_EXTENSION_UPDATED}",
            oldVersion: "${details.previousVersion}",
            newVersion: "${chrome.runtime.getManifest().version}"
          }, "*")`,
        });
      });
    });
  }

  Logger.log("Requestly: " + details.reason);
};

BG.Methods.addListenerForExtensionMessages = function () {
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    switch (message.action) {
      case RQ.CLIENT_MESSAGES.ADD_EVENT:
        EventActions.queueEventToWrite(message.payload);
        break;

      case RQ.CLIENT_MESSAGES.ADD_EXECUTION_EVENT:
        EventActions.queueExecutionEventToWrite(message.payload);
        break;

      case RQ.CLIENT_MESSAGES.GET_SCRIPT_RULES:
        if (message.url) {
          sendResponse(
            BG.Methods.getMatchingRules(message.url, RQ.RULE_TYPES.SCRIPT, {
              tabId: sender.tab.id,
            })
          );
        }
        break;

      case RQ.CLIENT_MESSAGES.GET_USER_AGENT_RULE_PAIRS:
        if (message.url) {
          sendResponse(BG.Methods.getMatchingRulePairs(message.url, RQ.RULE_TYPES.USERAGENT, { tabId: sender.tab.id }));
        }
        break;

      case RQ.CLIENT_MESSAGES.NOTIFY_RULES_APPLIED:
        if (message.rules) {
          message.rules.forEach(function (rule) {
            BG.Methods.logRuleApplied(
              rule,
              {
                tabId: sender.tab.id,
                url: message.url,
                method: message.method,
                type: message.type,
                timeStamp: message.timeStamp,
              },
              message.modification
            );
          });
        }
        if (message.ruleIds) {
          message.ruleIds.forEach((ruleId) => {
            RQ.StorageService.getRecord(ruleId).then((rule) => {
              BG.Methods.logRuleApplied(
                rule,
                {
                  tabId: sender.tab.id,
                  url: message.url,
                  method: message.method,
                  type: message.type,
                  timeStamp: message.timeStamp,
                },
                message.modification
              );
            });
          });
        }
        break;

      case RQ.EXTENSION_MESSAGES.FOCUS_TAB:
        if (message.tabId) {
          sendResponse(window.tabService.focusTab(message.tabId));
        }
        break;

      case RQ.EXTENSION_MESSAGES.GET_RULES_AND_GROUPS:
        sendResponse(BG.Methods.getRulesAndGroups());
        break;

      case RQ.EXTENSION_MESSAGES.GET_PINNED_RULES:
        sendResponse(BG.Methods.getPinnedRules());
        break;

      case RQ.EXTENSION_MESSAGES.GET_PINNED_GROUPS:
        sendResponse(BG.Methods.getPinnedGroups(message.populateChildren));
        break;

      case RQ.EXTENSION_MESSAGES.CHECK_IF_NO_RULES_PRESENT:
        sendResponse(BG.Methods.checkIfNoRulesPresent());
        break;

      case RQ.EXTENSION_MESSAGES.GET_FLAGS:
        sendResponse(RQ.flags);
        break;

      case RQ.CLIENT_MESSAGES.NOTIFY_SESSION_RECORDING_STARTED:
        BG.Methods.onSessionRecordingStartedNotification(sender.tab.id, message.markRecordingIcon);
        break;

      case RQ.CLIENT_MESSAGES.NOTIFY_SESSION_RECORDING_STOPPED:
        BG.Methods.onSessionRecordingStoppedNotification(sender.tab.id);
        break;

      case RQ.CLIENT_MESSAGES.NOTIFY_RECORD_UPDATED_IN_POPUP:
        BG.Methods.sendMessageToApp({ action: RQ.EXTENSION_MESSAGES.NOTIFY_RECORD_UPDATED });
        return true;

      case RQ.EXTENSION_MESSAGES.START_RECORDING_EXPLICITLY:
        BG.Methods.startRecordingExplicitly(message.tab ?? sender.tab, message.showWidget);
        break;

      case RQ.EXTENSION_MESSAGES.STOP_RECORDING:
        BG.Methods.stopRecording(message.tabId ?? sender.tab.id, message.openRecording);
        break;

      case RQ.EXTENSION_MESSAGES.WATCH_RECORDING:
        BG.Methods.watchRecording(message.tabId ?? sender.tab.id);
        break;

      case RQ.EXTENSION_MESSAGES.GET_TAB_SESSION:
        BG.Methods.getTabSession(message.tabId, sendResponse);
        return true;

      case RQ.EXTENSION_MESSAGES.GET_API_RESPONSE:
        BG.Methods.getAPIResponse(message.apiRequest).then(sendResponse);
        return true;

      case RQ.EXTENSION_MESSAGES.GET_EXECUTED_RULES:
        BG.Methods.getExecutedRules(message.tabId, sendResponse);
        return true;

      case RQ.CLIENT_MESSAGES.NOTIFY_PAGE_LOADED_FROM_CACHE:
        BG.Methods.onPageLoadedFromCacheNotification(sender.tab, message.payload);
        break;

      case RQ.EXTENSION_MESSAGES.CHECK_IF_EXTENSION_ENABLED:
        BG.Methods.checkIfExtensionEnabled().then(sendResponse);
        return true;

      case RQ.EXTENSION_MESSAGES.TOGGLE_EXTENSION_STATUS:
        BG.Methods.toggleExtensionStatus().then(sendResponse);
        return true;

      case RQ.EXTENSION_MESSAGES.NOTIFY_APP_LOADED:
        BG.Methods.onAppLoadedNotification();
        break;

      case RQ.EXTENSION_MESSAGES.START_RECORDING_ON_URL:
        BG.Methods.launchUrlAndStartRecording(message.url);
        break;

      case RQ.CLIENT_MESSAGES.CACHE_RECORDED_SESSION_ON_PAGE_UNLOAD:
        BG.Methods.cacheRecordedSessionOnClientPageUnload(sender.tab.id, message.payload);
        break;

      case RQ.EXTENSION_MESSAGES.TEST_RULE_ON_URL:
        BG.Methods.launchUrlAndStartRuleTesting(message, sender.tab.id);
        break;

      case RQ.EXTENSION_MESSAGES.SAVE_TEST_RULE_RESULT:
        BG.Methods.saveTestRuleResult(message, sender.tab);
        break;
    }
  });
};

BG.Methods.handleClientPortConnections = () => {
  const notifyClientSubscribers = (tabId) => {
    const clientLoadSubscribers = window.tabService.getData(tabId, BG.TAB_SERVICE_DATA.CLIENT_LOAD_SUBSCRIBERS) || [];
    window.tabService.removeData(tabId, BG.TAB_SERVICE_DATA.CLIENT_LOAD_SUBSCRIBERS);
    clientLoadSubscribers.forEach((subscriber) => subscriber());
  };

  chrome.webNavigation.onCommitted.addListener((navigatedTabData) => {
    const tabId = navigatedTabData.tabId;
    if (!tabId) {
      return;
    }

    const clientPortData = window.tabService.getData(tabId, BG.TAB_SERVICE_DATA.CLIENT_PORT);
    if (
      clientPortData &&
      clientPortData?.sender?.documentLifecycle !== "active" &&
      navigatedTabData.frameId === 0 &&
      navigatedTabData.documentLifecycle === "active"
    ) {
      window.tabService.setData(tabId, BG.TAB_SERVICE_DATA.CLIENT_PORT, {
        ...clientPortData,
        sender: {
          ...clientPortData.sender,
          documentLifecycle: navigatedTabData.documentLifecycle,
        },
      });

      notifyClientSubscribers(tabId);
      BG.Methods.onClientPageLoad({
        id: tabId,
        url: navigatedTabData.url,
      });
    }
  });

  chrome.runtime.onConnect.addListener((port) => {
    const senderTab = port.sender.tab;

    // for devtools and blocked pages, senderTab is not available
    if (!senderTab) {
      return;
    }

    const tabId = senderTab.id;

    window.tabService.resetPageData(senderTab.id);
    window.tabService.setData(tabId, BG.TAB_SERVICE_DATA.CLIENT_PORT, port);

    if (!port.sender.documentLifecycle || port.sender.documentLifecycle === "active") {
      notifyClientSubscribers(tabId);
      BG.Methods.onClientPageLoad(senderTab);
    }

    // It is recommended to remove the onConnect listener after connection has been established.
    // Port is only used to notify the background of client loaded, so we can disconnect it to remove the listener
    port.disconnect();

    port.onDisconnect.addListener(() => {
      window.tabService.removeData(tabId, BG.TAB_SERVICE_DATA.CLIENT_PORT);

      chrome.tabs.executeScript(
        tabId,
        {
          code: "chrome.runtime.connect()",
        },
        () => {
          if (chrome.runtime.lastError) {
            // ignore
          }
        }
      );
    });
  });
};

BG.Methods.isConnectedToClient = (tabId) => {
  const clientPortData = window.tabService.getData(tabId, BG.TAB_SERVICE_DATA.CLIENT_PORT);
  // sender.documentLifeCycle is only used by chrome and not firefox
  if (clientPortData) {
    if (clientPortData.sender?.documentLifecycle) {
      return clientPortData.sender?.documentLifecycle === "active";
    }
    return true;
  }
  return false;
};

BG.Methods.sendMessageToClient = (tabId, ...restArgs) => {
  const send = () => chrome.tabs.sendMessage(tabId, ...restArgs);

  if (BG.Methods.isConnectedToClient(tabId)) {
    send();
  } else {
    const clientLoadSubscribers = window.tabService.getData(tabId, BG.TAB_SERVICE_DATA.CLIENT_LOAD_SUBSCRIBERS) || [];
    clientLoadSubscribers.push(send);
    window.tabService.setData(tabId, BG.TAB_SERVICE_DATA.CLIENT_LOAD_SUBSCRIBERS, clientLoadSubscribers);
  }
};

BG.Methods.getSessionRecordingConfig = async (url) => {
  const sessionRecordingConfig = await RQ.StorageService.getRecord(RQ.STORAGE_KEYS.SESSION_RECORDING_CONFIG);
  const isAutoRecordingActive = sessionRecordingConfig?.autoRecording?.isActive;
  let pageSources = sessionRecordingConfig?.pageSources || [];

  if (sessionRecordingConfig?.autoRecording) {
    if (!sessionRecordingConfig.autoRecording?.isActive) {
      return null;
    } else if (sessionRecordingConfig.autoRecording?.mode === "allPages") {
      pageSources = [
        {
          value: "*",
          key: "Url",
          isActive: true,
          operator: "Wildcard_Matches",
        },
      ];
    }
  }

  const shouldRecord =
    BG.statusSettings.isExtensionEnabled &&
    (isAutoRecordingActive ?? true) &&
    pageSources.some((pageSource) => RuleMatcher.matchUrlWithPageSource(pageSource, url) !== null);

  return shouldRecord ? sessionRecordingConfig : null;
};

BG.Methods.onSessionRecordingStartedNotification = (tabId, markRecordingIcon = true) => {
  if (markRecordingIcon) {
    RQ.extensionIconManager.markRecording(tabId);
  }
};

BG.Methods.onSessionRecordingStoppedNotification = (tabId) => {
  RQ.extensionIconManager.markNotRecording(tabId);
};

BG.Methods.cacheRecordedSessionOnClientPageUnload = (tabId, payload) => {
  const sessionRecordingData = window.tabService.getData(tabId, BG.TAB_SERVICE_DATA.SESSION_RECORDING);

  if (sessionRecordingData) {
    window.tabService.setData(tabId, BG.TAB_SERVICE_DATA.SESSION_RECORDING, {
      ...sessionRecordingData,
      previousSession: payload.session,
      widgetPosition: payload.widgetPosition,
      recordingStartTime: payload.recordingStartTime,
    });
  }
};

BG.Methods.onAppLoadedNotification = () => {
  BG.isAppOnline = true;

  RQ.StorageService.getRecord(RQ.STORAGE_KEYS.USE_EVENTS_ENGINE).then((useEngine) => {
    if (useEngine === false) {
      EventActions.stopPeriodicEventWriter();
    } else {
      EventActions.startPeriodicEventWriter();
    }
  });

  RQ.StorageService.getRecord(RQ.STORAGE_KEYS.SEND_EXECUTION_EVENTS).then(async (sendExecutionEvents) => {
    if (sendExecutionEvents === false) {
      await EventActions.clearExecutionEvents();
    }
  });

  EventActions.sendExtensionEvents();
};

BG.Methods.onClientPageLoad = (tab) => {
  BG.Methods.handleRuleExecutionsOnClientPageLoad(tab);
  BG.Methods.handleTestRuleOnClientPageLoad(tab);
  BG.Methods.handleSessionRecordingOnClientPageLoad(tab);
};

BG.Methods.handleRuleExecutionsOnClientPageLoad = async (tab) => {
  const cachedAppliedRules = BG.Methods.getCachedAppliedRuleDetails(tab.id);

  if (cachedAppliedRules?.length > 0) {
    RQ.extensionIconManager.markRuleExecuted(tab.id);

    BG.Methods.sendMessageToClient(
      tab.id,
      {
        action: RQ.CLIENT_MESSAGES.SYNC_APPLIED_RULES,
        appliedRuleDetails: cachedAppliedRules,
        isConsoleLoggerEnabled: await RQ.StorageService.getRecord(RQ.CONSOLE_LOGGER_ENABLED),
      },
      () => {
        window.tabService.removeData(tab.id, BG.TAB_SERVICE_DATA.APPLIED_RULE_DETAILS);
      }
    );
  }
};

BG.Methods.onPageLoadedFromCacheNotification = async (tab, payload = {}) => {
  if (payload.hasExecutedRules) {
    RQ.extensionIconManager.markRuleExecuted(tab.id);
  }

  if (payload.isRecordingSession) {
    RQ.extensionIconManager.markRecording(tab.id);
  }

  await BG.Methods.handleSessionRecordingOnClientPageLoad(tab);
};

BG.Methods.handleSessionRecordingOnClientPageLoad = async (tab) => {
  let sessionRecordingData = window.tabService.getData(tab.id, BG.TAB_SERVICE_DATA.SESSION_RECORDING);

  if (!sessionRecordingData) {
    const sessionRecordingConfig = await BG.Methods.getSessionRecordingConfig(tab.url);

    if (sessionRecordingConfig) {
      sessionRecordingData = { config: sessionRecordingConfig, url: tab.url };
      const recordingMode = sessionRecordingConfig?.autoRecording?.mode;

      sessionRecordingData.showWidget = recordingMode === "custom";

      if (recordingMode === "allPages") {
        sessionRecordingData.markRecordingIcon = false;
      }

      window.tabService.setData(tab.id, BG.TAB_SERVICE_DATA.SESSION_RECORDING, sessionRecordingData);
    }
  } else if (!sessionRecordingData.explicit) {
    // stop recording if config was changed to turn off auto-recording for the session URL
    const sessionRecordingConfig = await BG.Methods.getSessionRecordingConfig(sessionRecordingData.url);

    if (!sessionRecordingConfig) {
      BG.Methods.stopRecording(tab.id);
      return;
    }
  }

  if (sessionRecordingData) {
    BG.Methods.sendMessageToClient(
      tab.id,
      {
        action: RQ.CLIENT_MESSAGES.START_RECORDING,
        payload: sessionRecordingData,
      },
      () => {
        window.tabService.setData(tab.id, BG.TAB_SERVICE_DATA.SESSION_RECORDING, {
          ...sessionRecordingData,
          notify: false,
          previousSession: null,
        });
      }
    );
  }
};

BG.Methods.handleTestRuleOnClientPageLoad = (tab) => {
  const testRuleData = window.tabService.getData(tab.id, BG.TAB_SERVICE_DATA.TEST_RULE_DATA);

  if (testRuleData) {
    BG.Methods.sendMessageToClient(tab.id, {
      action: RQ.CLIENT_MESSAGES.START_EXPLICIT_RULE_TESTING,
      ruleId: testRuleData.ruleId,
      record: testRuleData.record,
    });
  } else {
    BG.Methods.sendMessageToClient(tab.id, {
      action: RQ.CLIENT_MESSAGES.START_IMPLICIT_RULE_TESTING,
    });
  }
};

BG.Methods.saveTestReport = async (ruleId, url, appliedStatus) => {
  const testReports = (await RQ.StorageService.getRecord(RQ.STORAGE_KEYS.TEST_REPORTS)) ?? {};

  const ruleTestReports = Object.values(testReports)
    .filter((testReport) => testReport.ruleId === ruleId)
    .sort((a, b) => (a.timestamp < b.timestamp ? 1 : a.timestamp > b.timestamp ? -1 : 0));

  if (ruleTestReports.length > 2) {
    delete testReports[ruleTestReports[2].id];
  }

  const newTestReportId = RQ.commonUtils.generateUUID();
  testReports[newTestReportId] = {
    timestamp: Date.now(),
    ruleId,
    appliedStatus,
    url,
    id: newTestReportId,
  };

  await RQ.StorageService.saveRecord({
    [RQ.STORAGE_KEYS.TEST_REPORTS]: testReports,
  });

  return newTestReportId;
};

BG.Methods.launchUrlAndStartRuleTesting = (payload, openerTabId) => {
  BG.Methods.launchUrl(payload.url, openerTabId).then((tab) => {
    window.tabService.setData(tab.id, BG.TAB_SERVICE_DATA.TEST_RULE_DATA, {
      url: payload.url,
      ruleId: payload.ruleId,
      record: payload.record,
    });
  });
};

BG.Methods.saveTestRuleResult = (payload, senderTab) => {
  const testRuleData = window.tabService.getData(senderTab.id, BG.TAB_SERVICE_DATA.TEST_RULE_DATA);
  const testRuleUrl = testRuleData.url ?? senderTab.url;

  BG.Methods.saveTestReport(payload.ruleId, testRuleUrl, payload.appliedStatus).then((test_id) => {
    const isParentTabFocussed = window.tabService.focusTab(senderTab.openerTabId);
    if (!isParentTabFocussed) {
      // create new tab with URL if opener tab does not exist
      chrome.tabs.create(
        {
          url: `${RQ.configs.WEB_URL}/rules/editor/edit/${payload.ruleId}`,
        },
        (tab) => {
          window.tabService.ensureTabLoadingComplete(tab.id).then(() => {
            BG.Methods.sendMessageToClient(tab.id, {
              action: RQ.EXTENSION_MESSAGES.NOTIFY_TEST_RULE_REPORT_UPDATED,
              testReportId: test_id,
              testPageTabId: senderTab.id,
              record: testRuleData.record,
              appliedStatus: payload.appliedStatus,
            });
          });
        }
      );
    } else {
      BG.Methods.sendMessageToClient(senderTab.openerTabId, {
        action: RQ.EXTENSION_MESSAGES.NOTIFY_TEST_RULE_REPORT_UPDATED,
        testReportId: test_id,
        testPageTabId: senderTab.id,
        record: testRuleData.record,
        appliedStatus: payload.appliedStatus,
      });
    }
  });
};

BG.Methods.startRecordingExplicitly = async (tab, showWidget = true) => {
  const sessionRecordingConfig = await BG.Methods.getSessionRecordingConfig(tab.url);

  const sessionRecordingDataExist = !!window.tabService.getData(tab.id, BG.TAB_SERVICE_DATA.SESSION_RECORDING);
  // Auto recording is on for current tab if sessionRecordingConfig exist,
  // so forcefully start explicit recording.
  if (!sessionRecordingConfig && sessionRecordingDataExist) {
    return;
  }

  const sessionRecordingData = { explicit: true, showWidget };
  window.tabService.setData(tab.id, BG.TAB_SERVICE_DATA.SESSION_RECORDING, sessionRecordingData);

  BG.Methods.sendMessageToClient(tab.id, {
    action: RQ.CLIENT_MESSAGES.START_RECORDING,
    payload: sessionRecordingData,
  });
};

BG.Methods.launchUrlAndStartRecording = (url) => {
  BG.Methods.launchUrl(url).then((tab) => {
    window.tabService.setData(tab.id, BG.TAB_SERVICE_DATA.SESSION_RECORDING, {
      notify: true,
      explicit: true,
      showWidget: true,
    });
  });
};

BG.Methods.launchUrl = (url, openerTabId) => {
  return new Promise((resolve) => {
    window.tabService.createNewTab(url, openerTabId, resolve);
  });
};

BG.Methods.stopRecording = (tabId, openRecording) => {
  BG.Methods.sendMessageToClient(tabId, { action: RQ.CLIENT_MESSAGES.STOP_RECORDING }, () => {
    window.tabService.removeData(tabId, BG.TAB_SERVICE_DATA.SESSION_RECORDING);
  });

  if (openRecording) {
    BG.Methods.watchRecording(tabId);
  }
};

BG.Methods.watchRecording = (tabId) => {
  chrome.tabs.create({ url: `${RQ.configs.WEB_URL}/sessions/draft/${tabId}` });
};

BG.Methods.stopRecordingOnAllTabs = () => {
  Object.values(window.tabService.getTabs()).forEach(({ id: tabId }) => {
    if (tabId && window.tabService.getData(tabId, BG.TAB_SERVICE_DATA.SESSION_RECORDING)) {
      BG.Methods.stopRecording(tabId);
    }
  });
};

BG.Methods.getExecutedRules = async (tabId, callback) => {
  BG.Methods.sendMessageToClient(
    tabId,
    {
      action: RQ.CLIENT_MESSAGES.GET_APPLIED_RULE_IDS,
    },
    async (appliedRuleIds) => {
      if (appliedRuleIds?.length > 0) {
        callback(await RQ.StorageService.getRecords(appliedRuleIds));
      } else {
        callback([]);
      }
    }
  );
};

BG.Methods.getCachedAppliedRuleDetails = (tabId) => {
  const appliedRuleDetails = window.tabService.getData(tabId, BG.TAB_SERVICE_DATA.APPLIED_RULE_DETAILS, []);

  return appliedRuleDetails;
};

BG.devtools = {}; // tabId -> port
BG.Methods.listenDevtools = function () {
  chrome.runtime.onConnect.addListener(function (port) {
    if (port.name !== "rq_devtools") {
      return;
    }

    port.onMessage.addListener(function (msg) {
      if (msg.action === "registerDevTool") {
        BG.devtools[msg.tabId] = port;
      }
    });

    // Remove port when destroyed (eg when devtools instance is closed)
    port.onDisconnect.addListener(function () {
      const tabId = Object.keys(BG.devtools).find((tabId) => BG.devtools[tabId] === port);
      delete BG.devtools[tabId];
    });
  });
};

BG.Methods.sendLogToDevTools = function (rule, requestDetails, modification) {
  const devTool = BG.devtools[requestDetails.tabId];

  if (!devTool) {
    return;
  }

  devTool.postMessage({
    rule,
    modification,
    timestamp: requestDetails.timeStamp || Date.now(),
    requestURL: requestDetails.url,
    requestType: requestDetails.type,
    requestMethod: requestDetails.method,
  });
};

BG.Methods.listenCommands = function () {
  chrome.commands.onCommand.addListener((command) => {
    if (command === "reload") {
      chrome.runtime.reload();
    }
  });
};

/**
 * Generates Object to render Execution Logs
 *
 * @param {Object} Metadata for execution logs
 * @returns {Object} Object to be used to render execution logs
 */
function buildExecutionLogObject({ ruleName, requestDetails, modification }) {
  const executionLogId = RQ.Utils.generateExecutionLogId();

  const executionLogObject = {
    id: executionLogId,
    requestMethod: requestDetails.method,
    timestamp: requestDetails.timeStamp,
    url: requestDetails.url,
    requestType: requestDetails.type,
    ruleName,
    modification,
  };

  if (requestDetails.type !== "main_frame") {
    executionLogObject.pageSourceUrl = window.tabService.getTabUrl(requestDetails.tabId);
  }

  return executionLogObject;
}

/**
 * Appends new execution log to the existing array
 *
 * @param {Array} existingLogs logs fetched from storage
 * @param {Object} newLogObject the new log object to append
 * @returns {Array}
 */
function appendExecutionLog(existingLogs, newLogObject) {
  if (existingLogs) {
    const newLogs = [...existingLogs];
    if (newLogs.length === RQ.CONSTANTS.LIMITS.NUMBER_EXECUTION_LOGS) {
      newLogs.shift();
    }
    return [...newLogs, newLogObject];
  }
  return [newLogObject];
}

/**
 * Saves the executionLogs to storage
 *
 * @param {Object} rule all rule data
 * @param {Object} requestDetails all request details
 * @param {String} modification the modifications applied by the rule
 */
BG.Methods.saveExecutionLog = async function (rule, requestDetails, modification) {
  const storageKey = `execution_${rule.id}`;
  const existingExecutionLogs = await RQ.StorageService.getRecord(storageKey);
  const logObject = buildExecutionLogObject({
    ruleName: rule.name,
    requestDetails,
    modification,
  });

  const newExecutionLogs = appendExecutionLog(existingExecutionLogs, logObject);

  RQ.StorageService.saveRecord({
    [storageKey]: newExecutionLogs,
  });
};

BG.Methods.isNonBrowserTab = (tabId) => {
  // A special ID value given to tabs that are not browser tabs (for example, apps and devtools windows)
  return tabId === chrome.tabs.TAB_ID_NONE;
};

BG.Methods.sendLogToConsoleLogger = async function (rule, requestDetails, modification) {
  if (BG.Methods.isNonBrowserTab(requestDetails.tabId)) {
    // content script will not be available for console logging
    return;
  }

  const storageKey = RQ.CONSOLE_LOGGER_ENABLED;
  const isConsoleLoggerEnabled = await RQ.StorageService.getRecord(storageKey);

  BG.Methods.sendMessageToClient(
    requestDetails.tabId,
    {
      action: RQ.CLIENT_MESSAGES.PRINT_CONSOLE_LOGS,
      requestDetails,
      rule,
      modification,
      isConsoleLoggerEnabled,
    },
    { frameId: requestDetails.frameId }
  );
};

/**
 * Generates Object to render Execution Logs
 *
 * @param {Object} existingExecutionCount The current object
 * @param {String} ruleType Type of Rule to be incremented
 * @returns {Object} Updated Object to be used to save execution counter
 */
function buildExecutionCountObject({ existingExecutionCount, ruleType }) {
  const today = new Date();
  const mm = today.getMonth() + 1; // +1 since 0=JAN,11=DEC
  const yyyy = today.getFullYear();

  existingExecutionCount = existingExecutionCount || {};

  if (existingExecutionCount?.[yyyy]?.[mm]?.[ruleType]) {
    // Increment if already exists
    existingExecutionCount[yyyy][mm][ruleType] = existingExecutionCount[yyyy][mm][ruleType] + 1;
  } else {
    // Set 1 if doesn't already exist
    RQ.Utils.setObjectValueAtPath(existingExecutionCount, `${yyyy}.${mm}.${ruleType}`, 1);
  }

  return existingExecutionCount;
}

/**
 * Increments the execution counter
 *
 * @param {Object} rule all rule data
 */
BG.Methods.saveExecutionCount = async function (rule) {
  const existingExecutionCount = await RQ.StorageService.getRecord("ec");
  const executionCountObject = buildExecutionCountObject({
    existingExecutionCount,
    ruleType: rule.ruleType,
  });
  RQ.StorageService.saveRecord({ ec: executionCountObject });
};

BG.Methods.getTabSession = (tabId, callback) => {
  BG.Methods.sendMessageToClient(tabId, { action: RQ.CLIENT_MESSAGES.GET_TAB_SESSION }, { frameId: 0 }, callback);
};

BG.Methods.getAPIResponse = async (apiRequest) => {
  const method = apiRequest.method || "GET";
  const headers = new Headers();
  let body = apiRequest.body;
  let url = apiRequest.url;

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

  if (!["GET", "HEAD"].includes(method) && apiRequest.contentType === "application/x-www-form-urlencoded") {
    const formData = new FormData();
    body?.forEach(({ key, value }) => {
      formData.append(key, value);
    });
    body = new URLSearchParams(formData);
  }

  try {
    const requestStartTime = performance.now();
    const response = await fetch(url, { method, headers, body, credentials: "omit" });
    const responseTime = performance.now() - requestStartTime;

    const responseHeaders = [];
    response.headers.forEach((value, key) => {
      responseHeaders.push({ key, value });
    });

    const responseBlob = await response.blob();
    const contentType = responseHeaders.find((header) => header.key.toLowerCase() === "content-type")?.value;

    let responseBody;
    if (contentType?.includes("image/")) {
      const getImageDataUri = (blob) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (evt) => resolve(evt.target.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      };
      responseBody = await getImageDataUri(responseBlob);
    } else {
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
  } catch (e) {
    return null;
  }
};

BG.Methods.sendAppliedRuleDetailsToClient = async (rule, requestDetails) => {
  const { tabId } = requestDetails;

  // Cache execution details until content script loads
  if (BG.Methods.isTopDocumentRequest(requestDetails)) {
    const appliedRuleDetails = window.tabService.getData(tabId, BG.TAB_SERVICE_DATA.APPLIED_RULE_DETAILS, []);
    appliedRuleDetails?.push({
      rule,
      requestDetails,
    });

    window.tabService.setData(tabId, BG.TAB_SERVICE_DATA.APPLIED_RULE_DETAILS, appliedRuleDetails);
  } else {
    BG.Methods.sendMessageToClient(
      tabId,
      {
        action: RQ.CLIENT_MESSAGES.NOTIFY_RULE_APPLIED,
        rule,
      },
      () => {
        if (!chrome.runtime.lastError) {
          RQ.extensionIconManager.markRuleExecuted(tabId);
        }
      }
    );
  }
};

BG.Methods.init = function () {
  // Create contextMenu Action to Enable/Disable Requestly (Default Options)
  chrome.contextMenus.removeAll();
  BG.extensionStatusContextMenuId = BG.Methods.createContextMenu(
    "Deactivate Requestly",
    RQ.configs.contextMenuContexts
  );

  // Handle extension install/update - https://developer.chrome.com/extensions/runtime#event-onStartup
  chrome.runtime.onInstalled.addListener(BG.Methods.handleExtensionInstalledOrUpdated);

  chrome.runtime.setUninstallURL(RQ.CONSTANTS.GOODBYE_PAGE_URL);

  StorageService.getInstance({ cacheRecords: true }, RQ).then(() => {
    Logger.log("StorageService Initialized", RQ.StorageService);

    // Fetch records
    RQ.StorageService.fetchRecords().then(BG.Methods.readExtensionStatus);
    EventActions.setEventsCount();
  });

  // Add Listener to reply to requests from extension content scripts or popup
  BG.Methods.addListenerForExtensionMessages();

  BG.Methods.handleClientPortConnections();

  BG.Methods.listenDevtools();

  BG.Methods.listenCommands();

  EventActions.startPeriodicEventWriter();
};

// Background Initialization Code
(function () {
  try {
    BG.Methods.init();
  } catch (e) {
    // Do nothing
  }
})();
