
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

RQ.ClientUtils = RQ.ClientUtils || {};

RQ.ClientUtils.executeJS = function (code, attributes, shouldRemove) {
  const script = document.createElement("script");
  if (attributes) {
    attributes.forEach(({ name: attrName, value: attrVal }) => {
      script.setAttribute(attrName, attrVal ?? "");
    });
  } else {
    script.type = "text/javascript";
  }
  script.classList.add(RQ.ClientUtils.getScriptClassAttribute());

  script.appendChild(document.createTextNode(code));
  const parent = document.head || document.documentElement;
  parent.appendChild(script);

  if (shouldRemove) {
    parent.removeChild(script);
  }
};

RQ.ClientUtils.addJSFromURL = function (src, attributes, callback) {
  var script = document.createElement("script");
  if (attributes) {
    attributes.forEach(({ name: attrName, value: attrVal }) => {
      script.setAttribute(attrName, attrVal ?? "");
    });
  } else {
    script.type = "text/javascript";
  }
  script.src = src;
  script.classList.add(RQ.ClientUtils.getScriptClassAttribute());

  if (typeof callback === "function") {
    script.onload = callback;
  }

  (document.head || document.documentElement).appendChild(script);
  return script;
};

RQ.ClientUtils.embedCSS = function (css, attributes) {
  var style = document.createElement("style");
  style.appendChild(document.createTextNode(css));

  if (attributes) {
    attributes.forEach(({ name: attrName, value: attrVal }) => {
      style.setAttribute(attrName, attrVal ?? "");
    });
  }

  style.classList.add(RQ.ClientUtils.getScriptClassAttribute());

  (document.head || document.documentElement).appendChild(style);
  return style;
};

RQ.ClientUtils.addCSSFromURL = function (src, attributes) {
  var link = document.createElement("link");

  if (attributes) {
    attributes.forEach(({ name: attrName, value: attrVal }) => {
      link.setAttribute(attrName, attrVal ?? "");
    });
  } else {
    link.type = "text/css";
    link.rel = "stylesheet";
  }

  link.href = src;
  link.classList.add(RQ.ClientUtils.getScriptClassAttribute());

  (document.head || document.documentElement).appendChild(link);
  return link;
};

RQ.ClientUtils.onPageLoad = function () {
  return new Promise(function (resolve) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", resolve);
    } else {
      resolve();
    }
  });
};

RQ.ClientUtils.getScriptClassAttribute = function () {
  return RQ.PUBLIC_NAMESPACE + "SCRIPT";
};

RQ.ClientUtils.isHTMLDocument = function () {
  return document.doctype?.name === "html" || document instanceof HTMLDocument; // HTMLDocument can't be replaced with Document, as it fails for XML
};

RQ.ClientUtils.sendExecutionEventToBackground = (eventName, eventParams) => {
  const eventTs = Date.now();
  eventParams["log_source"] = "extension";

  chrome.runtime.sendMessage({
    action: RQ.CLIENT_MESSAGES.ADD_EXECUTION_EVENT,
    payload: {
      eventName,
      eventParams,
      eventTs,
    },
  });
};

RQ.ClientUtils.isAppPage = () => {
  const webURLsSet = new Set([RQ.configs.WEB_URL, ...RQ.configs.OTHER_WEB_URLS]);
  return [...webURLsSet].some((webURL) => location.href.includes(webURL));
};

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

document.documentElement.setAttribute("rq-ext-id", chrome.runtime.id);
document.documentElement.setAttribute("rq-ext-version", chrome.runtime.getManifest()["version"]);

chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  switch (message.action) {
    case RQ.EXTENSION_MESSAGES.SEND_EXTENSION_EVENTS:
      RQ.ContentScriptMessageHandler.sendMessage(message, (response) => {
        sendResponse(response);
      });
      return true;

    case RQ.EXTENSION_MESSAGES.NOTIFY_RECORD_UPDATED:
      RQ.ContentScriptMessageHandler.sendMessage(message, (response) => {
        sendResponse(response);
      });
      return true;

    case RQ.EXTENSION_MESSAGES.NOTIFY_TEST_RULE_REPORT_UPDATED:
      RQ.ContentScriptMessageHandler.sendMessage(message);
      break;
  }
});

RQ.SessionRecorder = {};

RQ.SessionRecorder.setup = () => {
  RQ.SessionRecorder.isInitialized = false;
  RQ.SessionRecorder.isRecording = false;
  RQ.SessionRecorder.isExplicitRecording = false;
  RQ.SessionRecorder.markRecordingIcon = false;
  RQ.SessionRecorder.widgetPosition = null;
  RQ.SessionRecorder.showWidget = false;
  RQ.SessionRecorder.recordingStartTime = null;
  RQ.SessionRecorder.sendResponseCallbacks = {};
  RQ.SessionRecorder.recordingMode;

  const isTopDocument = !RQ.SessionRecorder.isIframe();

  chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
    // messages for all the frames
    switch (message.action) {
      case RQ.CLIENT_MESSAGES.START_RECORDING:
        RQ.SessionRecorder.startRecording(message.payload).then(() => {
          // only the top document should send confirmation
          if (isTopDocument) {
            sendResponse();
          }
        });
        return true;

      case RQ.CLIENT_MESSAGES.STOP_RECORDING:
        RQ.SessionRecorder.sendMessageToClient("stopRecording", null);
        break;
    }

    // messages for only the top document
    if (isTopDocument) {
      switch (message.action) {
        case RQ.CLIENT_MESSAGES.IS_RECORDING_SESSION:
          sendResponse(RQ.SessionRecorder.isRecording);
          break;

        case RQ.CLIENT_MESSAGES.IS_EXPLICIT_RECORDING_SESSION:
          sendResponse(RQ.SessionRecorder.isExplicitRecording);
          break;

        case RQ.CLIENT_MESSAGES.GET_TAB_SESSION:
          RQ.SessionRecorder.sendMessageToClient("getSessionData", null, (session) =>
            sendResponse({
              ...session,
              recordingMode: RQ.SessionRecorder.recordingMode,
            })
          );
          return true;
      }
    }
  });
};

RQ.SessionRecorder.startRecording = async (options = {}) => {
  const {
    config,
    previousSession,
    notify,
    explicit = false,
    widgetPosition,
    showWidget,
    recordingStartTime,
    markRecordingIcon = true,
  } = options;

  await RQ.SessionRecorder.initialize();

  if (!explicit && RQ.SessionRecorder.isExplicitRecording) {
    return;
  }

  RQ.SessionRecorder.sendMessageToClient("startRecording", {
    relayEventsToTop: RQ.SessionRecorder.isIframe(),
    console: true,
    network: true,
    maxDuration: (config?.maxDuration || 5) * 60 * 1000, // minutes -> milliseconds
    previousSession: !RQ.SessionRecorder.isIframe() ? previousSession : null,
  });

  if (notify) {
    RQ.SessionRecorder.showToast();
  }

  RQ.SessionRecorder.isExplicitRecording = explicit;
  RQ.SessionRecorder.widgetPosition = widgetPosition;
  RQ.SessionRecorder.showWidget = showWidget;
  RQ.SessionRecorder.recordingMode = explicit ? "manual" : "auto";
  RQ.SessionRecorder.markRecordingIcon = markRecordingIcon;

  if (explicit) {
    RQ.SessionRecorder.recordingStartTime = recordingStartTime ?? Date.now();
    RQ.SessionRecorder.hideAutoModeWidget();
  }
};

RQ.SessionRecorder.initialize = () => {
  return new Promise((resolve) => {
    if (RQ.SessionRecorder.isInitialized) {
      resolve();
    }

    RQ.ClientUtils.addJSFromURL(chrome.runtime.getURL("libs/requestly-web-sdk.js"), null, () => {
      RQ.ClientUtils.executeJS(`(${RQ.SessionRecorder.bootstrapClient.toString()})('${RQ.PUBLIC_NAMESPACE}')`);
      RQ.SessionRecorder.addMessageListeners();
      RQ.SessionRecorder.isInitialized = true;
      resolve();
    });
  });
};

RQ.SessionRecorder.isIframe = () => {
  return window.top !== window;
};

RQ.SessionRecorder.addMessageListeners = () => {
  if (RQ.SessionRecorder.isIframe()) {
    return;
  }

  window.addEventListener("message", function (event) {
    if (event.source !== window || event.data.source !== "requestly:client") {
      return;
    }

    if (event.data.response) {
      RQ.SessionRecorder.sendResponseToRuntime(event.data.action, event.data.payload);
    } else if (event.data.action === "sessionRecordingStarted") {
      RQ.SessionRecorder.isRecording = true;

      chrome.runtime.sendMessage({
        action: RQ.CLIENT_MESSAGES.NOTIFY_SESSION_RECORDING_STARTED,
        markRecordingIcon: RQ.SessionRecorder.markRecordingIcon,
      });

      if (RQ.SessionRecorder.showWidget) {
        if (RQ.SessionRecorder.isExplicitRecording) {
          RQ.SessionRecorder.showManualModeRecordingWidget();
        } else {
          RQ.SessionRecorder.showAutoModeRecordingWidget();
        }
      }
    } else if (event.data.action === "sessionRecordingStopped") {
      RQ.SessionRecorder.isRecording = false;
      RQ.SessionRecorder.isExplicitRecording = false;
      RQ.SessionRecorder.showWidget = false;
      RQ.SessionRecorder.recordingStartTime = null;
      RQ.SessionRecorder.markRecordingIcon = false;

      RQ.SessionRecorder.hideManualModeWidget();
      RQ.SessionRecorder.hideAutoModeWidget();

      chrome.runtime.sendMessage({
        action: RQ.CLIENT_MESSAGES.NOTIFY_SESSION_RECORDING_STOPPED,
      });
    }
  });

  window.addEventListener("beforeunload", () => {
    RQ.SessionRecorder.sendMessageToClient("getSessionData", null, (session) => {
      chrome.runtime.sendMessage({
        action: RQ.CLIENT_MESSAGES.CACHE_RECORDED_SESSION_ON_PAGE_UNLOAD,
        payload: {
          session,
          widgetPosition: RQ.SessionRecorder.widgetPosition,
          recordingMode: RQ.SessionRecorder.recordingMode,
          recordingStartTime: RQ.SessionRecorder.recordingStartTime,
        },
      });
    });
  });
};

RQ.SessionRecorder.sendResponseToRuntime = (action, payload) => {
  RQ.SessionRecorder.sendResponseCallbacks[action]?.(payload);
  delete RQ.SessionRecorder.sendResponseCallbacks[action];
};

RQ.SessionRecorder.sendMessageToClient = (action, payload, sendResponseCallback) => {
  window.postMessage({ source: "requestly:extension", action, payload }, window.location.href);
  if (sendResponseCallback) {
    RQ.SessionRecorder.sendResponseCallbacks[action] = sendResponseCallback;
  }
};

/**
 * Do not refer other function/variables from this function.
 * This function will be injected in website and will run in a different JS context.
 */
RQ.SessionRecorder.bootstrapClient = (namespace) => {
  window[namespace] = window[namespace] || {};

  const sendMessageToExtension = (action, payload) => {
    window.postMessage({ source: "requestly:client", action, payload }, window.location.href);
  };

  const sendResponseToExtension = (action, payload) => {
    window.postMessage({ source: "requestly:client", response: true, action, payload }, window.location.href);
  };

  window.addEventListener("message", function (event) {
    // We only accept messages from ourselves
    if (event.source !== window || event.data.source !== "requestly:extension") {
      return;
    }

    if (event.data.action === "startRecording") {
      window[namespace]?.sessionRecorder?.stop?.();
      window[namespace].sessionRecorder = new Requestly.SessionRecorder(event.data.payload);
      window[namespace].sessionRecorder.start();
      sendMessageToExtension("sessionRecordingStarted");
    } else if (event.data.action === "stopRecording") {
      window[namespace].sessionRecorder.stop();
      sendMessageToExtension("sessionRecordingStopped");
    } else if (event.data.action === "getSessionData") {
      try {
        sendResponseToExtension(event.data.action, window[namespace].sessionRecorder.getSession());
      } catch (err) {
        const error = err instanceof Error ? err.message : String(err);
        sendResponseToExtension(event.data.action, error);
        throw err;
      }
    }
  });
};

RQ.SessionRecorder.showToast = () => {
  const rqToast = document.createElement("rq-toast");
  rqToast.classList.add("rq-element");
  rqToast.setAttribute("heading", "Requestly is recording session on this tab!");
  rqToast.setAttribute("icon-path", chrome.runtime.getURL("resources/images/128x128.png"));
  rqToastContent = `
  <div slot="content">
    You can save up to last 5 minutes anytime by clicking on Requestly extension icon to save & upload activity for this tab.
  </div>
  `;
  try {
    rqToast.innerHTML = rqToastContent;
  } catch (e) {
    const trustedTypesPolicy = window.trustedTypes?.createPolicy?.("rq-html-policy", {
      createHTML: (html) => html,
    });
    rqToast.innerHTML = trustedTypesPolicy.createHTML(rqToastContent);
  }

  document.documentElement.appendChild(rqToast);
};

RQ.SessionRecorder.showManualModeRecordingWidget = () => {
  let widget = RQ.SessionRecorder.getManualModeWidget();

  if (!widget) {
    widget = document.createElement("rq-session-recording-widget");
    widget.classList.add("rq-element");
    document.documentElement.appendChild(widget);

    widget.addEventListener("stop", () => {
      chrome.runtime.sendMessage({
        action: RQ.EXTENSION_MESSAGES.STOP_RECORDING,
        openRecording: true,
      });
    });

    widget.addEventListener("discard", () => {
      chrome.runtime.sendMessage({
        action: RQ.EXTENSION_MESSAGES.STOP_RECORDING,
      });
    });

    widget.addEventListener("moved", (evt) => {
      RQ.SessionRecorder.widgetPosition = evt.detail;
    });
  }

  const recordingLimitInMilliseconds = 5 * 60 * 1000; // 5 mins * 60 secs * 1000 ms
  const recordingTime = Date.now() - RQ.SessionRecorder.recordingStartTime;
  const currentRecordingTime = recordingTime <= recordingLimitInMilliseconds ? recordingTime : null;

  widget.dispatchEvent(
    new CustomEvent("show", {
      detail: {
        currentRecordingTime,
        position: RQ.SessionRecorder.widgetPosition,
      },
    })
  );
};

RQ.SessionRecorder.hideManualModeWidget = () => {
  const widget = RQ.SessionRecorder.getManualModeWidget();
  widget?.dispatchEvent(new CustomEvent("hide"));
};

RQ.SessionRecorder.getManualModeWidget = () => {
  return document.querySelector("rq-session-recording-widget");
};

RQ.SessionRecorder.showAutoModeRecordingWidget = () => {
  const tagName = "rq-session-recording-auto-mode-widget";
  let widget = document.querySelector(tagName);

  if (!widget) {
    widget = document.createElement(tagName);
    widget.classList.add("rq-element");
    document.documentElement.appendChild(widget);

    widget.addEventListener("watch", () => {
      chrome.runtime.sendMessage({
        action: RQ.EXTENSION_MESSAGES.WATCH_RECORDING,
      });
    });

    widget.addEventListener("moved", (evt) => {
      RQ.SessionRecorder.widgetPosition = evt.detail;
    });
  }

  widget.dispatchEvent(
    new CustomEvent("show", {
      detail: {
        position: RQ.SessionRecorder.widgetPosition,
      },
    })
  );
};

RQ.SessionRecorder.hideAutoModeWidget = () => {
  let widget = document.querySelector("rq-session-recording-auto-mode-widget");
  widget?.dispatchEvent(new CustomEvent("hide"));
};

(function () {
  if (!RQ.ClientUtils.isHTMLDocument()) {
    return;
  }

  chrome.runtime.sendMessage(
    {
      action: RQ.EXTENSION_MESSAGES.CHECK_IF_EXTENSION_ENABLED,
    },
    (isExtensionEnabled) => {
      if (isExtensionEnabled) {
        if (window.top === window) {
          chrome.runtime.connect(); // connect to background
          window.addEventListener("pageshow", (event) => {
            if (event.persisted) {
              chrome.runtime.sendMessage({
                action: RQ.CLIENT_MESSAGES.NOTIFY_PAGE_LOADED_FROM_CACHE,
                payload: {
                  hasExecutedRules: RQ.RuleExecutionHandler.hasExecutedRules(),
                  isRecordingSession: RQ.SessionRecorder.isRecording,
                },
              });
            }
          });
        }

        if (!RQ.ClientUtils.isAppPage()) {
          RQ.RuleExecutionHandler.setup();
          RQ.RequestResponseRuleHandler.setup();
          RQ.ScriptRuleHandler.setup();
          RQ.UserAgentRuleHandler.setup();
        }

        // register custom elements
        RQ.ClientUtils.addJSFromURL(chrome.runtime.getURL("libs/customElements.js"));

        RQ.SessionRecorder.setup();
      }
    }
  );
})();
