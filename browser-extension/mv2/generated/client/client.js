
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

this.RQ=this.RQ||{},this.RQ.RulesStore=function(e){"use strict";var t,n,s,a,u,r,l,o,i;!function(e){e.GROUP="group",e.RULE="rule"}(t||(t={})),function(e){e.ACTIVE="Active",e.INACTIVE="Inactive"}(n||(n={})),function(e){e.REDIRECT="Redirect",e.CANCEL="Cancel",e.REPLACE="Replace",e.HEADERS="Headers",e.USERAGENT="UserAgent",e.SCRIPT="Script",e.QUERYPARAM="QueryParam",e.RESPONSE="Response",e.REQUEST="Request",e.DELAY="Delay"}(s||(s={})),function(e){e.URL="Url",e.HOST="host",e.PATH="path"}(a||(a={})),function(e){e.EQUALS="Equals",e.CONTAINS="Contains",e.MATCHES="Matches",e.WILDCARD_MATCHES="Wildcard_Matches"}(u||(u={})),function(e){e.CUSTOM="custom",e.ALL_PAGES="allPages"}(r||(r={})),function(e){e.SESSION_RECORDING_CONFIG="sessionRecordingConfig"}(l||(l={})),function(e){e.JS="js",e.CSS="css"}(o||(o={})),function(e){e.URL="url",e.CODE="code"}(i||(i={}));const c="local",E=async()=>{const e=await(async()=>new Promise((e=>{chrome.storage[c].get(null,e)})))();return Object.values(e).filter((e=>!!e))};var R;!function(e){e[e.MODIFIED=0]="MODIFIED",e[e.CREATED=1]="CREATED",e[e.DELETED=2]="DELETED"}(R||(R={}));const T=(e,t)=>{chrome.storage.onChanged.addListener(((n,s)=>{if(s===c){const s=[];Object.entries(n).forEach((([t,n])=>{let a,u;if(void 0!==n.newValue)a=void 0!==n.oldValue?R.MODIFIED:R.CREATED,u=n.newValue;else{if(void 0===n.oldValue)return;a=R.DELETED,u=n.oldValue}e?.changeTypes?.length&&!e.changeTypes.includes(a)||e?.keyFilter&&t!==e.keyFilter||e?.valueFilter&&!e.valueFilter(u)||s.push({changeType:a,key:t,...n})})),s.length&&t(s)}}))},D=e=>e&&(!!e.ruleType||e.objectType===t.RULE),C=e=>e&&e.objectType===t.GROUP,I=async()=>(await E()).filter(D),g=async()=>(await E()).filter(C);return e.checkIfNoRulesPresent=async()=>0===(await I()).length,e.getEnabledRules=async e=>{const t=await I(),s=await g();return t.filter((t=>{if(!t.status||t.status===n.INACTIVE)return!1;if(e&&t.ruleType!==e)return!1;if(!t.groupId)return!0;return s.find((e=>e.id===t.groupId)).status===n.ACTIVE}))},e.getGroups=g,e.getRule=async e=>(async e=>new Promise((t=>{chrome.storage[c].get(e,(n=>t(n[e])))})))(e),e.getRules=I,e.getRulesAndGroups=async()=>{const[e,t]=await Promise.all([I(),g()]);return{rules:e,groups:t}},e.onRuleOrGroupChange=e=>{T({valueFilter:D},(t=>{t.some((({changeType:e,oldValue:t,newValue:s})=>e===R.CREATED&&s.status===n.ACTIVE||(e===R.DELETED&&t.status===n.ACTIVE||e===R.MODIFIED)))&&e()})),T({valueFilter:C,changeTypes:[R.MODIFIED]},(t=>{t.some((({oldValue:e,newValue:t})=>e.status!==t.status))&&e()}))},Object.defineProperty(e,"__esModule",{value:!0}),e}({});

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

RQ.ClientRuleMatcher = (namespace) => {
  const RuleSourceKey = {
    URL: "Url",
    HOST: "host",
    PATH: "path",
  };

  const RuleSourceOperator = {
    EQUALS: "Equals",
    CONTAINS: "Contains",
    MATCHES: "Matches",
    WILDCARD_MATCHES: "Wildcard_Matches",
  };

  const toRegex = (regexStr) => {
    const matchRegExp = regexStr.match(new RegExp("^/(.+)/(|i|g|ig|gi)$"));

    if (!matchRegExp) {
      return null;
    }

    try {
      return new RegExp(matchRegExp[1], matchRegExp[2]);
    } catch {
      return null;
    }
  };

  const checkRegexMatch = (regexString, inputString) => {
    if (!regexString.startsWith("/")) {
      regexString = `/${regexString}/`; // Keeping enclosing slashes for regex as optional
    }

    const regex = toRegex(regexString);
    return regex?.test(inputString);
  };

  const checkWildCardMatch = (wildCardString, inputString) => {
    const regexString = "/^" + wildCardString.replaceAll("*", ".*") + "$/";
    return checkRegexMatch(regexString, inputString);
  };

  const extractUrlComponent = (url, key) => {
    const urlObj = new URL(url);

    switch (key) {
      case RuleSourceKey.URL:
        return url;
      case RuleSourceKey.HOST:
        return urlObj.host;
      case RuleSourceKey.PATH:
        return urlObj.pathname;
    }
  };

  window[namespace] = window[namespace] || {};
  window[namespace].matchSourceUrl = (sourceObject, url) => {
    const urlComponent = extractUrlComponent(url, sourceObject.key);
    const value = sourceObject.value;

    if (!urlComponent) {
      return false;
    }

    switch (sourceObject.operator) {
      case RuleSourceOperator.EQUALS:
        if (value === urlComponent) {
          return true;
        }
        break;

      case RuleSourceOperator.CONTAINS:
        if (urlComponent.indexOf(value) !== -1) {
          return true;
        }
        break;

      case RuleSourceOperator.MATCHES: {
        return checkRegexMatch(value, urlComponent);
      }

      case RuleSourceOperator.WILDCARD_MATCHES: {
        return checkWildCardMatch(value, urlComponent);
      }
    }

    return false;
  };
};

RQ.ScriptRuleHandler = {};

RQ.ScriptRuleHandler.setup = function () {
  const message = {
    action: RQ.CLIENT_MESSAGES.GET_SCRIPT_RULES,
    url: window.location.href,
  };
  chrome.runtime.sendMessage(message, function (rules) {
    if (rules && rules.constructor === Array) {
      RQ.ScriptRuleHandler.handleRules(rules);

      chrome.runtime.sendMessage({
        action: RQ.CLIENT_MESSAGES.NOTIFY_RULES_APPLIED,
        url: window.location.href,
        rules: rules,
        modification: "executed script",
        method: "GET",
        type: "document",
        timeStamp: Date.now(),
      });
    }
  });
};

RQ.ScriptRuleHandler.handleRules = function (rules) {
  return new Promise(function (resolve) {
    var libraries = [],
      scripts = [];

    rules.forEach(function (rule) {
      var pair = rule.pairs[0];

      pair.libraries &&
        pair.libraries.forEach(function (library) {
          if (!libraries.includes(library)) {
            libraries.push(library);
          }
        });

      scripts = scripts.concat(pair.scripts || []);
    });

    var cssScripts = scripts.filter(function (script) {
      return script.codeType === RQ.SCRIPT_CODE_TYPES.CSS;
    });

    var jsScripts = scripts.filter(function (script) {
      return !script.codeType || script.codeType === RQ.SCRIPT_CODE_TYPES.JS;
    });

    RQ.ScriptRuleHandler.handleCSSScripts(cssScripts)
      .then(function () {
        return RQ.ScriptRuleHandler.handleJSLibraries(libraries);
      })
      .then(function () {
        return RQ.ScriptRuleHandler.handleJSScripts(jsScripts);
      })
      .then(resolve);
  });
};

RQ.ScriptRuleHandler.handleCSSScripts = function (cssScripts) {
  return new Promise(function (resolve) {
    cssScripts.forEach(RQ.ScriptRuleHandler.includeCSS);
    resolve();
  });
};

RQ.ScriptRuleHandler.handleJSLibraries = function (libraries) {
  return new Promise(function (resolve) {
    RQ.ScriptRuleHandler.addLibraries(libraries, resolve);
  });
};

RQ.ScriptRuleHandler.handleJSScripts = function (jsScripts) {
  return new Promise(function (resolve) {
    var prePageLoadScripts = [],
      postPageLoadScripts = [];

    jsScripts.forEach(function (script) {
      if (script.loadTime === RQ.SCRIPT_LOAD_TIME.BEFORE_PAGE_LOAD) {
        prePageLoadScripts.push(script);
      } else {
        postPageLoadScripts.push(script);
      }
    });

    RQ.ScriptRuleHandler.includeJSScriptsInOrder(prePageLoadScripts, function () {
      RQ.ClientUtils.onPageLoad().then(function () {
        RQ.ScriptRuleHandler.includeJSScriptsInOrder(postPageLoadScripts, resolve);
      });
    });
  });
};

RQ.ScriptRuleHandler.addLibraries = function (libraries, callback, index) {
  index = index || 0;

  if (index >= libraries.length) {
    typeof callback === "function" && callback();
    return;
  }

  var libraryKey = libraries[index],
    library = RQ.SCRIPT_LIBRARIES[libraryKey],
    addNextLibraries = function () {
      RQ.ScriptRuleHandler.addLibraries(libraries, callback, index + 1);
    };

  if (library) {
    RQ.ClientUtils.addJSFromURL(library.src, null, addNextLibraries);
  } else {
    addNextLibraries();
  }
};

RQ.ScriptRuleHandler.includeJSScriptsInOrder = function (scripts, callback, index) {
  index = index || 0;

  if (index >= scripts.length) {
    typeof callback === "function" && callback();
    return;
  }

  RQ.ScriptRuleHandler.includeJS(scripts[index], function () {
    RQ.ScriptRuleHandler.includeJSScriptsInOrder(scripts, callback, index + 1);
  });
};

RQ.ScriptRuleHandler.includeJS = function (script, callback) {
  if (!script.value) throw new Error("Script value is empty");

  if (script.type === RQ.SCRIPT_TYPES.URL) {
    RQ.ClientUtils.addJSFromURL(script.value, script.attributes, callback);
    return;
  }

  if (script.type === RQ.SCRIPT_TYPES.CODE) {
    RQ.ClientUtils.executeJS(script.value, script.attributes);
  }

  typeof callback === "function" && callback();
};

RQ.ScriptRuleHandler.includeCSS = function (script, callback) {
  if (script.type === RQ.SCRIPT_TYPES.URL) {
    RQ.ClientUtils.addCSSFromURL(script.value, script.attributes);
    return;
  }

  if (script.type === RQ.SCRIPT_TYPES.CODE) {
    RQ.ClientUtils.embedCSS(script.value, script.attributes);
  }
  typeof callback === "function" && callback();
};

RQ.UserAgentRuleHandler = {};

RQ.UserAgentRuleHandler.setup = function () {
  const message = {
    action: RQ.CLIENT_MESSAGES.GET_USER_AGENT_RULE_PAIRS,
    url: window.location.href,
  };
  chrome.runtime.sendMessage(message, function (rulePairs) {
    if (rulePairs && rulePairs.constructor === Array && rulePairs.length > 0) {
      RQ.UserAgentRuleHandler.handleRulePairs(rulePairs);
    }
  });
};

RQ.UserAgentRuleHandler.handleRulePairs = function (rulePairs) {
  var finalUserAgentRulePair = rulePairs[rulePairs.length - 1], // only last user agent will finally be applied
    userAgent = finalUserAgentRulePair.userAgent,
    platform = RQ.UserAgentRuleHandler.getPlatformFromUserAgent(userAgent),
    vendor = RQ.UserAgentRuleHandler.getVendorFromUserAgent(userAgent);

  RQ.ClientUtils.executeJS(
    `Object.defineProperty(window.navigator, 'userAgent', { get: function() { return '${userAgent}'; } });`
  );
  RQ.ClientUtils.executeJS(
    `Object.defineProperty(window.navigator, 'vendor', { get: function() { return '${vendor}'; } });`
  );

  if (platform) {
    // override platform only if it could be derived from userAgent
    RQ.ClientUtils.executeJS(
      `Object.defineProperty(window.navigator, 'platform', { get: function() { return '${platform}'; } });`
    );
  }
};

RQ.UserAgentRuleHandler.getPlatformFromUserAgent = function (userAgent) {
  var PLATFORMS = {
    Macintosh: "MacIntel",
    Android: "Android",
    Linux: "Linux",
    iPhone: "iPhone",
    iPad: "iPad",
    Windows: "Win32",
  };

  for (var key in PLATFORMS) {
    if (userAgent.includes(key)) {
      return PLATFORMS[key];
    }
  }
};

RQ.UserAgentRuleHandler.getVendorFromUserAgent = function (userAgent) {
  var VENDORS = {
    iPhone: "Apple Computer, Inc.",
    iPad: "Apple Computer, Inc.",
    Chrome: "Google Inc.",
  };

  for (var key in VENDORS) {
    if (userAgent.includes(key)) {
      return VENDORS[key];
    }
  }

  return ""; // vendor is empty string for others
};

RQ.RequestResponseRuleHandler = {};
RQ.RequestResponseRuleHandler.isInitialized = false;
RQ.RequestResponseRuleHandler.cachedResponseRuleIds = new Set();

RQ.RequestResponseRuleHandler.setup = () => {
  // TODO: store the extension status in background and watch for changes here
  chrome.runtime.sendMessage(
    {
      action: RQ.EXTENSION_MESSAGES.CHECK_IF_EXTENSION_ENABLED,
    },
    (isExtensionEnabled) => {
      RQ.ClientUtils.executeJS(
        `
        window.${RQ.PUBLIC_NAMESPACE} = window.${RQ.PUBLIC_NAMESPACE} || {};
        window.${RQ.PUBLIC_NAMESPACE}.isExtensionEnabled = ${isExtensionEnabled};
      `,
        null,
        true
      );
    }
  );

  RQ.RulesStore.getRules().then((rules) => {
    const doRequestResponseRulesExist = rules.some((rule) => {
      return [RQ.RULE_TYPES.REQUEST, RQ.RULE_TYPES.RESPONSE].includes(rule.ruleType);
    });

    const doRedirectRulesExist = rules.some((rule) => {
      return [RQ.RULE_TYPES.REDIRECT, RQ.RULE_TYPES.REPLACE].includes(rule.ruleType);
    });

    if (doRequestResponseRulesExist || doRedirectRulesExist) {
      RQ.RequestResponseRuleHandler.init();
    }
  });

  RQ.RulesStore.onRuleOrGroupChange(() => {
    if (!RQ.RequestResponseRuleHandler.isInitialized) {
      RQ.RequestResponseRuleHandler.init();
    }
    RQ.RequestResponseRuleHandler.updateRulesCache();
  });
};

RQ.RequestResponseRuleHandler.init = function () {
  // we match request rules on client-side whereas response rules are still matched in background
  RQ.ClientUtils.executeJS(`(${RQ.ClientRuleMatcher.toString()})('${RQ.PUBLIC_NAMESPACE}')`);

  RQ.RequestResponseRuleHandler.updateRulesCache();

  window.addEventListener("message", function (event) {
    // We only accept messages from ourselves
    if (event.source !== window || event.data.from !== "requestly") {
      return;
    }

    if (event.data.type === "request_rule_applied") {
      chrome.runtime.sendMessage({
        action: RQ.CLIENT_MESSAGES.NOTIFY_RULES_APPLIED,
        ruleIds: [event.data.id],
        modification: "modified request body",
        ...event.data.requestDetails,
      });
    } else if (event.data.type === "response_rule_applied") {
      chrome.runtime.sendMessage({
        action: RQ.CLIENT_MESSAGES.NOTIFY_RULES_APPLIED,
        ruleIds: [event.data.id],
        modification: "modified response",
        ...event.data.requestDetails,
      });
    }
  });

  const clientArgs = {
    namespace: RQ.PUBLIC_NAMESPACE,
    customHeaderPrefix: RQ.CUSTOM_HEADER_PREFIX,
    ignoredHeadersOnRedirect: RQ.IGNORED_HEADERS_ON_REDIRECT,
  };

  RQ.ClientUtils.executeJS(`(${this.interceptAJAXRequests.toString()})(${JSON.stringify(clientArgs)})`);

  RQ.RequestResponseRuleHandler.isInitialized = true;
};

RQ.RequestResponseRuleHandler.cacheRequestRules = async () => {
  const requestRules = await RQ.RulesStore.getEnabledRules(RQ.RULE_TYPES.REQUEST);
  RQ.ClientUtils.executeJS(
    `
    window.${RQ.PUBLIC_NAMESPACE} = window.${RQ.PUBLIC_NAMESPACE} || {};
    window.${RQ.PUBLIC_NAMESPACE}.requestRules = ${JSON.stringify(requestRules)};
  `,
    null,
    true
  );
};

RQ.RequestResponseRuleHandler.cacheResponseRules = async () => {
  const responseRules = await RQ.RulesStore.getEnabledRules(RQ.RULE_TYPES.RESPONSE);
  RQ.ClientUtils.executeJS(
    `
    window.${RQ.PUBLIC_NAMESPACE} = window.${RQ.PUBLIC_NAMESPACE} || {};
    window.${RQ.PUBLIC_NAMESPACE}.responseRules = ${JSON.stringify(responseRules)};
  `,
    null,
    true
  );
};

RQ.RequestResponseRuleHandler.cacheRedirectRules = async () => {
  const redirectRules = await RQ.RulesStore.getEnabledRules(RQ.RULE_TYPES.REDIRECT);
  RQ.ClientUtils.executeJS(
    `
    window.${RQ.PUBLIC_NAMESPACE} = window.${RQ.PUBLIC_NAMESPACE} || {};
    window.${RQ.PUBLIC_NAMESPACE}.redirectRules = ${JSON.stringify(redirectRules)};
  `,
    null,
    true
  );
};

RQ.RequestResponseRuleHandler.cacheReplaceRules = async () => {
  const replaceRules = await RQ.RulesStore.getEnabledRules(RQ.RULE_TYPES.REPLACE);
  RQ.ClientUtils.executeJS(
    `
    window.${RQ.PUBLIC_NAMESPACE} = window.${RQ.PUBLIC_NAMESPACE} || {};
    window.${RQ.PUBLIC_NAMESPACE}.replaceRules = ${JSON.stringify(replaceRules)};
  `,
    null,
    true
  );
};

RQ.RequestResponseRuleHandler.updateRulesCache = async () => {
  RQ.RequestResponseRuleHandler.cacheRequestRules();
  RQ.RequestResponseRuleHandler.cacheResponseRules();
  RQ.RequestResponseRuleHandler.cacheRedirectRules();
  RQ.RequestResponseRuleHandler.cacheReplaceRules();
};

/**
 * Do not refer other function/variables from this function.
 * This function will be injected in website and will run in different JS context.
 */

RQ.RequestResponseRuleHandler.interceptAJAXRequests = function ({
  namespace,
  customHeaderPrefix = "",
  ignoredHeadersOnRedirect = [],
}) {
  window[namespace] = window[namespace] || {};
  window[namespace].requestRules = [];
  window[namespace].responseRules = [];
  window[namespace].redirectRules = [];
  window[namespace].replaceRules = [];
  let isDebugMode = false;

  // Some frames are sandboxes and throw DOMException when accessing localStorage
  try {
    isDebugMode = window && window.localStorage && localStorage.isDebugMode;
  } catch (e) {}

  const isExtensionEnabled = () => {
    return window[namespace].isExtensionEnabled ?? true;
  };

  const getAbsoluteUrl = (url) => {
    const dummyLink = document.createElement("a");
    dummyLink.href = url;
    return dummyLink.href;
  };

  const isNonJsonObject = (obj) => {
    return [
      Blob,
      ArrayBuffer,
      Object.getPrototypeOf(Uint8Array), // TypedArray instance type
      DataView,
      FormData,
      URLSearchParams,
    ].some((nonJsonType) => obj instanceof nonJsonType);
  };

  /**
   * @param {Object} json
   * @param {String} path -> "a", "a.b", "a.0.b (If a is an array containing list of objects"
   * Also copied in shared/utils.js for the sake of testing
   */
  const traverseJsonByPath = (jsonObject, path) => {
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

  const matchesSourceFilters = ({ requestData, method }, sourceFilters) => {
    const sourceFiltersArray = Array.isArray(sourceFilters) ? sourceFilters : [sourceFilters];

    return (
      !sourceFiltersArray.length ||
      sourceFiltersArray.some((sourceFilter) => {
        if (sourceFilter?.requestMethod?.length && !sourceFilter.requestMethod.includes(method)) {
          return false;
        }

        let requestPayloadFilter = sourceFilter?.requestPayload;

        if (!requestPayloadFilter) return true;
        if (typeof requestPayloadFilter === "object" && Object.keys(requestPayloadFilter).length === 0) return true;

        // We only allow request payload targeting when requestData is JSON
        if (!requestData || typeof requestData !== "object") return false;
        if (Object.keys(requestData).length === 0) return false;

        requestPayloadFilter = requestPayloadFilter || {};
        const targetedKey = requestPayloadFilter?.key;
        const targetedValue = requestPayloadFilter?.value;

        // tagetedKey is the json path e.g. a.b.0.c
        if (targetedKey && typeof targetedValue !== undefined) {
          const valueInRequestData = traverseJsonByPath(requestData, targetedKey);
          const operator = requestPayloadFilter?.operator;

          if (!operator || operator === "Equals") {
            return valueInRequestData === targetedValue;
          }

          if (operator === "Contains") {
            return valueInRequestData.includes(targetedValue);
          }
        }

        return false;
      })
    );
  };

  const matchRuleSource = ({ url, requestData, method }, rule) => {
    const modification = rule.pairs[0];
    const ruleSource = modification.source;

    return (
      window[namespace].matchSourceUrl(ruleSource, url) &&
      matchesSourceFilters({ requestData, method }, ruleSource?.filters)
    );
  };

  const getRequestRule = (url) => {
    if (!isExtensionEnabled()) {
      return null;
    }

    return window[namespace].requestRules?.findLast((rule) =>
      window[namespace].matchSourceUrl(rule.pairs[0].source, url)
    );
  };

  const getResponseRule = ({ url, requestData, method }) => {
    if (!isExtensionEnabled()) {
      return null;
    }

    return window[namespace].responseRules?.findLast((rule) => {
      return matchRuleSource({ url, requestData, method }, rule);
    });
  };

  const getMatchingRedirectRule = (url) => {
    if (!isExtensionEnabled()) {
      return null;
    }

    return window[namespace].redirectRules?.findLast((rule) =>
      rule.pairs.some((pair) => window[namespace].matchSourceUrl(pair.source, url))
    );
  };

  const getMatchingReplaceRule = (url) => {
    if (!isExtensionEnabled()) {
      return null;
    }

    return window[namespace].replaceRules?.findLast((rule) =>
      rule.pairs.some((pair) => window[namespace].matchSourceUrl(pair.source, url))
    );
  };

  const shouldServeResponseWithoutRequest = (responseRule) => {
    const responseModification = responseRule.pairs[0].response;
    return responseModification.type === "static" && responseModification.serveWithoutRequest;
  };

  const getFunctionFromCode = (code) => {
    return new Function("args", `return (${code})(args);`);
  };

  const getCustomRequestBody = (requestRule, args) => {
    const modification = requestRule.pairs[0].request;
    if (modification.type === "static") {
      requestBody = modification.value;
    } else {
      requestBody = getFunctionFromCode(modification.value)(args);
    }

    if (typeof requestBody !== "object" || isNonJsonObject(requestBody)) {
      return requestBody;
    }

    return JSON.stringify(requestBody);
  };

  /**
   * @param mightBeJSONString string which might be JSON String or normal String
   * @param doStrictCheck should return empty JSON if invalid JSON string
   */
  const jsonifyValidJSONString = (mightBeJSONString, doStrictCheck) => {
    const defaultValue = doStrictCheck ? {} : mightBeJSONString;

    if (typeof mightBeJSONString !== "string") {
      return defaultValue;
    }

    try {
      return JSON.parse(mightBeJSONString);
    } catch (e) {
      /* Do Nothing. Unable to parse the param value */
    }

    return defaultValue;
  };

  const isJSON = (data) => {
    const parsedJson = jsonifyValidJSONString(data);
    return parsedJson !== data; // if data is not a JSON, jsonifyValidJSONString() returns same value
  };

  const notifyRequestRuleApplied = (message) => {
    window.postMessage(
      {
        from: "requestly",
        type: "request_rule_applied",
        id: message.ruleDetails.id,
        requestDetails: message["requestDetails"],
      },
      window.location.href
    );
  };

  const notifyResponseRuleApplied = (message) => {
    window.postMessage(
      {
        from: "requestly",
        type: "response_rule_applied",
        id: message.rule.id,
        requestDetails: message["requestDetails"],
      },
      window.location.href
    );
  };

  const isPromise = (obj) =>
    !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";

  const isContentTypeJSON = (contentType) => !!contentType?.includes("application/json");

  // XHR Implementation
  const updateXhrReadyState = (xhr, readyState) => {
    Object.defineProperty(xhr, "readyState", { writable: true });
    xhr.readyState = readyState;
    xhr.dispatchEvent(new CustomEvent("readystatechange"));
  };

  const resolveXHR = (xhr, responseData) => {
    xhr.dispatchEvent(new ProgressEvent("loadstart"));

    // update response headers
    const contentType = isJSON(responseData) ? "application/json" : "text/plain";
    xhr.getResponseHeader = (key) => {
      if (key.toLowerCase() === "content-type") {
        return contentType;
      }
      return null;
    };
    updateXhrReadyState(xhr, xhr.HEADERS_RECEIVED);
    updateXhrReadyState(xhr, xhr.LOADING);

    // mark resolved
    updateXhrReadyState(xhr, xhr.DONE);
  };

  const OriginalXMLHttpRequest = XMLHttpRequest;

  const createProxyXHRObject = function () {
    const actualXhr = this;

    const dispatchEventToActualXHR = (type, e) => {
      isDebugMode && console.log("[RQ]", `on${type}`, e);
      actualXhr.dispatchEvent(
        new ProgressEvent(type, {
          lengthComputable: e?.lengthComputable,
          loaded: e?.loaded,
          total: e?.total,
        })
      );
    };

    const updateActualXHRReadyState = (readyState) => {
      updateXhrReadyState(actualXhr, readyState);
    };

    const onReadyStateChange = async function () {
      isDebugMode &&
        console.log("[RQ]", "onReadyStateChange", {
          state: this.readyState,
          status: this.status,
          response: this.response,
          xhr: this,
          url: this._requestURL,
        });
      if (!this.responseRule) {
        return;
      }
      const responseModification = this.responseRule.pairs[0].response;

      if (this.readyState === this.HEADERS_RECEIVED) {
        // For network failures, responseStatus=0 but we still return customResponse with status=200
        const responseStatus = parseInt(responseModification.statusCode || this.status) || 200;
        const responseStatusText = responseModification.statusText || this.statusText;

        Object.defineProperties(actualXhr, {
          status: {
            get: () => responseStatus,
          },
          statusText: {
            get: () => responseStatusText,
          },
          getResponseHeader: {
            value: this.getResponseHeader.bind(this),
          },
          getAllResponseHeaders: {
            value: this.getAllResponseHeaders.bind(this),
          },
        });

        updateActualXHRReadyState(this.HEADERS_RECEIVED);
      } else if (this.readyState === this.DONE) {
        const responseType = this.responseType;
        const contentType = this.getResponseHeader("content-type");

        let customResponse =
          responseModification.type === "code"
            ? getFunctionFromCode(responseModification.value)({
                method: this._method,
                url: this._requestURL,
                requestHeaders: this._requestHeaders,
                requestData: jsonifyValidJSONString(this._requestData),
                responseType: contentType,
                response: this.response,
                responseJSON: jsonifyValidJSONString(this.response, true),
              })
            : responseModification.value;

        // Convert customResponse back to rawText
        // response.value is String and evaluator method might return string/object
        if (isPromise(customResponse)) {
          customResponse = await customResponse;
        }

        isDebugMode &&
          console.log("[RQ]", "Rule Applied - customResponse", { customResponse, responseType, contentType });

        const isUnsupportedResponseType = responseType && !["json", "text"].includes(responseType);

        // We do not support statically modifying responses of type - blob, arraybuffer, document etc.
        if (responseModification.type === "static" && isUnsupportedResponseType) {
          customResponse = this.response;
        }

        if (
          !isUnsupportedResponseType &&
          typeof customResponse === "object" &&
          !(customResponse instanceof Blob) &&
          (responseType === "json" || isContentTypeJSON(contentType))
        ) {
          customResponse = JSON.stringify(customResponse);
        }
        Object.defineProperty(actualXhr, "response", {
          get: function () {
            if (responseModification.type === "static" && responseType === "json") {
              if (typeof customResponse === "object") {
                return customResponse;
              }

              return jsonifyValidJSONString(customResponse);
            }

            return customResponse;
          },
        });

        if (responseType === "" || responseType === "text") {
          Object.defineProperty(actualXhr, "responseText", {
            get: function () {
              return customResponse;
            },
          });
        }

        const responseURL = this.responseURL;
        const responseXML = this.responseXML;

        Object.defineProperties(actualXhr, {
          responseType: {
            get: function () {
              return responseType;
            },
          },
          responseURL: {
            get: function () {
              return responseURL;
            },
          },
          responseXML: {
            get: function () {
              return responseXML;
            },
          },
        });

        const requestDetails = {
          url: this._requestURL,
          method: this._method,
          type: "xmlhttprequest",
          timeStamp: Date.now(),
        };

        // mark resolved)
        if (this._abort) {
          // Note: This might get delayed due to async in code block
          dispatchEventToActualXHR("abort");
          dispatchEventToActualXHR("loadend");
        } else {
          updateActualXHRReadyState(this.DONE);
          dispatchEventToActualXHR("load");
          dispatchEventToActualXHR("loadend");
        }

        notifyResponseRuleApplied({
          rule: this.responseRule,
          requestDetails,
        });
      } else {
        updateActualXHRReadyState(this.readyState);
      }
    };

    const xhr = new OriginalXMLHttpRequest();
    xhr.addEventListener("readystatechange", onReadyStateChange.bind(xhr), false);
    xhr.addEventListener("abort", dispatchEventToActualXHR.bind(xhr, "abort"), false);
    xhr.addEventListener("error", dispatchEventToActualXHR.bind(xhr, "error"), false);
    xhr.addEventListener("timeout", dispatchEventToActualXHR.bind(xhr, "timeout"), false);
    xhr.addEventListener("loadstart", dispatchEventToActualXHR.bind(xhr, "loadstart"), false);
    xhr.addEventListener("progress", dispatchEventToActualXHR.bind(xhr, "progress"), false);

    const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), "timeout");

    Object.defineProperty(actualXhr, "timeout", {
      get: function () {
        return descriptor.get.call(this);
      },
      set: function (value) {
        xhr.timeout = value;
        descriptor.set.call(this, value);
      },
    });

    this.rqProxyXhr = xhr;
  };

  XMLHttpRequest = function () {
    const xhr = new OriginalXMLHttpRequest();
    createProxyXHRObject.call(xhr);
    return xhr;
  };

  XMLHttpRequest.prototype = OriginalXMLHttpRequest.prototype;
  Object.entries(OriginalXMLHttpRequest).map(([key, val]) => {
    XMLHttpRequest[key] = val;
  });

  const open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url) {
    this.rqProxyXhr._method = method;
    this.rqProxyXhr._requestURL = getAbsoluteUrl(url);
    open.apply(this.rqProxyXhr, arguments);
    open.apply(this, arguments);
  };

  const abort = XMLHttpRequest.prototype.abort;
  XMLHttpRequest.prototype.abort = function () {
    isDebugMode && console.log("abort called");
    this.rqProxyXhr._abort = true;
    abort.apply(this, arguments);
    abort.apply(this.rqProxyXhr, arguments);
  };

  let setRequestHeader = XMLHttpRequest.prototype.setRequestHeader;
  XMLHttpRequest.prototype.setRequestHeader = function (header, value) {
    this.rqProxyXhr._requestHeaders = this.rqProxyXhr._requestHeaders || {};
    this.rqProxyXhr._requestHeaders[header] = value;
    setRequestHeader.apply(this.rqProxyXhr, arguments);
    setRequestHeader.apply(this, arguments);
  };

  const send = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function (data) {
    this.rqProxyXhr._requestData = data;

    const requestRule = getRequestRule(this.rqProxyXhr._requestURL);
    if (requestRule) {
      this.rqProxyXhr._requestData = getCustomRequestBody(requestRule, {
        method: this.rqProxyXhr._method,
        url: this.rqProxyXhr._requestURL,
        body: data,
        bodyAsJson: jsonifyValidJSONString(data, true),
      });

      notifyRequestRuleApplied({
        ruleDetails: requestRule,
        requestDetails: {
          url: this.rqProxyXhr._requestURL,
          method: this.rqProxyXhr._method,
          type: "xmlhttprequest",
          timeStamp: Date.now(),
        },
      });
    }

    this.responseRule = getResponseRule({
      url: this.rqProxyXhr._requestURL,
      requestData: jsonifyValidJSONString(this.rqProxyXhr._requestData),
      method: this.rqProxyXhr._method,
    });
    this.rqProxyXhr.responseRule = this.responseRule;

    const redirectRuleThatMatchesURL = getMatchingRedirectRule(this.rqProxyXhr._requestURL);
    const replaceRuleThatMatchesURL = getMatchingReplaceRule(this.rqProxyXhr._requestURL);
    if (redirectRuleThatMatchesURL || replaceRuleThatMatchesURL) {
      ignoredHeadersOnRedirect.forEach((header) => {
        // Stores ignored header to be set on redirected URL. Refer: https://github.com/requestly/requestly/issues/1208
        const originalHeaderValue =
          this.rqProxyXhr._requestHeaders?.[header] || this.rqProxyXhr._requestHeaders?.[header.toLowerCase()];
        if (isExtensionEnabled() && originalHeaderValue) {
          this.setRequestHeader(customHeaderPrefix + header, originalHeaderValue);
        }
      });
    }

    if (this.responseRule) {
      isDebugMode && console.log("[RQ]", "send and response rule matched", this.responseRule);
      if (shouldServeResponseWithoutRequest(this.responseRule)) {
        isDebugMode && console.log("[RQ]", "send and response rule matched and serveWithoutRequest is true");
        resolveXHR(this.rqProxyXhr, this.responseRule.pairs[0].response.value);
      } else {
        send.call(this.rqProxyXhr, this.rqProxyXhr._requestData);
      }
      return;
    }

    send.call(this, this.rqProxyXhr._requestData);
  };

  // Intercept fetch API
  const _fetch = fetch;
  fetch = async (...args) => {
    const [resource, initOptions = {}] = args;
    const getOriginalResponse = () => _fetch(...args);

    let request;

    if (resource instanceof Request) {
      request = resource.clone();
    } else {
      request = new Request(resource.toString(), initOptions);
    }

    let hasModifiedHeaders = false;

    const url = getAbsoluteUrl(request.url);
    const method = request.method;

    const redirectRuleThatMatchesURL = getMatchingRedirectRule(url);
    const replaceRuleThatMatchesURL = getMatchingReplaceRule(url);

    // redirect/replace rule specific code that is applied only when redirect/replace rule matches the URL
    if (redirectRuleThatMatchesURL || replaceRuleThatMatchesURL) {
      // Stores Auth header to be set on redirected URL. Refer: https://github.com/requestly/requestly/issues/1208
      ignoredHeadersOnRedirect.forEach((header) => {
        const originalHeaderValue = request.headers.get(header);
        if (isExtensionEnabled() && originalHeaderValue) {
          hasModifiedHeaders = true;
          request.headers.set(customHeaderPrefix + header, originalHeaderValue);
        }
      });
    }

    // Request body can be sent only for request methods other than GET and HEAD.
    const canRequestBodyBeSent = !["GET", "HEAD"].includes(method);

    const requestRule = canRequestBodyBeSent && getRequestRule(url);
    if (requestRule) {
      const originalRequestBody = await request.text();
      const requestBody =
        getCustomRequestBody(requestRule, {
          method: request.method,
          url,
          body: originalRequestBody,
          bodyAsJson: jsonifyValidJSONString(originalRequestBody, true),
        }) || {};

      request = new Request(request.url, {
        method,
        body: requestBody,
        headers: request.headers,
        referrer: request.referrer,
        referrerPolicy: request.referrerPolicy,
        mode: request.mode,
        credentials: request.credentials,
        cache: request.cache,
        redirect: request.redirect,
        integrity: request.integrity,
      });

      notifyRequestRuleApplied({
        ruleDetails: requestRule,
        requestDetails: {
          url,
          method: request.method,
          type: "fetch",
          timeStamp: Date.now(),
        },
      });
    }

    let requestData;
    if (canRequestBodyBeSent) {
      requestData = jsonifyValidJSONString(await request.clone().text()); // cloning because the request will be used to make API call
    }

    const responseRule = getResponseRule({ url, requestData, method });
    let responseHeaders;
    let fetchedResponse;

    if (responseRule && shouldServeResponseWithoutRequest(responseRule)) {
      const contentType = isJSON(responseRule.pairs[0].response.value) ? "application/json" : "text/plain";
      responseHeaders = new Headers({ "content-type": contentType });
    } else {
      try {
        if (requestRule || hasModifiedHeaders) {
          // use modified request to fetch response
          fetchedResponse = await _fetch(request);
        } else {
          fetchedResponse = await getOriginalResponse();
        }

        if (!responseRule) {
          return fetchedResponse;
        }

        responseHeaders = fetchedResponse?.headers;
      } catch (error) {
        if (!responseRule) {
          return Promise.reject(error);
        }
      }
    }

    isDebugMode &&
      console.log("RQ", "Inside the fetch block for url", {
        url,
        resource,
        initOptions,
        fetchedResponse,
      });

    let customResponse;
    const responseModification = responseRule.pairs[0].response;

    if (responseModification.type === "code") {
      const requestHeaders =
        request.headers &&
        Array.from(request.headers).reduce((obj, [key, val]) => {
          obj[key] = val;
          return obj;
        }, {});

      let evaluatorArgs = {
        method,
        url,
        requestHeaders,
        requestData,
      };

      if (fetchedResponse) {
        const fetchedResponseData = await fetchedResponse.text();
        const responseType = fetchedResponse.headers.get("content-type");
        const fetchedResponseDataAsJson = jsonifyValidJSONString(fetchedResponseData, true);

        evaluatorArgs = {
          ...evaluatorArgs,
          responseType,
          response: fetchedResponseData,
          responseJSON: fetchedResponseDataAsJson,
        };
      }

      customResponse = getFunctionFromCode(responseModification.value)(evaluatorArgs);

      // evaluator might return us Object but response.value is string
      // So make the response consistent by converting to JSON String and then create the Response object
      if (isPromise(customResponse)) {
        customResponse = await customResponse;
      }

      if (typeof customResponse === "object" && isContentTypeJSON(evaluatorArgs?.responseType)) {
        customResponse = JSON.stringify(customResponse);
      }
    } else {
      customResponse = responseModification.value;
    }

    const requestDetails = {
      url,
      method,
      type: "fetch",
      timeStamp: Date.now(),
    };

    notifyResponseRuleApplied({
      rule: responseRule,
      requestDetails,
    });

    // For network failures, fetchedResponse is undefined but we still return customResponse with status=200
    const finalStatusCode = parseInt(responseModification.statusCode || fetchedResponse?.status) || 200;
    const requiresNullResponseBody = [204, 205, 304].includes(finalStatusCode);

    return new Response(requiresNullResponseBody ? null : new Blob([customResponse]), {
      status: finalStatusCode,
      statusText: responseModification.statusText || fetchedResponse?.statusText,
      headers: responseHeaders,
    });
  };
};

RQ.ConsoleLogger = {
  loggingStarted: false,
};

RQ.ConsoleLogger.setup = () => {
  window.addEventListener("message", function (event) {
    if (event.source !== window || event.data.source !== "requestly:consoleLogger") {
      return;
    }

    if (event.data.action === "showInitialMessage") {
      RQ.ConsoleLogger.showInitialMessage(event.data.payload?.isConsoleLoggerEnabled);
    }
  });

  chrome.runtime.onMessage.addListener(function (message) {
    if (message.action === RQ.CLIENT_MESSAGES.PRINT_CONSOLE_LOGS) {
      RQ.ConsoleLogger.handleMessage(message);
    }
  });
};

RQ.ConsoleLogger.showInitialMessage = (isConsoleLoggerEnabled) => {
  if (RQ.ConsoleLogger.loggingStarted) {
    return;
  }

  if (isConsoleLoggerEnabled) {
    RQ.ConsoleLogger.log(
      `Applied rules will be logged in console. You may disable the feature from: ${RQ.ConsoleLogger.getSettingsUrl()}`
    );
  } else {
    RQ.ConsoleLogger.log(
      `Applied some rules on this page. You may enable logging in console from: ${RQ.ConsoleLogger.getSettingsUrl()}`
    );
  }

  RQ.ConsoleLogger.loggingStarted = true;
};

RQ.ConsoleLogger.handleMessage = (message) => {
  if (!RQ.ConsoleLogger.loggingStarted) {
    if (window === window.top) {
      RQ.ConsoleLogger.showInitialMessage(message.isConsoleLoggerEnabled);
    } else {
      window.top.postMessage(
        {
          source: "requestly:consoleLogger",
          action: "showInitialMessage",
          payload: { isConsoleLoggerEnabled: message.isConsoleLoggerEnabled },
        },
        "*"
      );
      RQ.ConsoleLogger.loggingStarted = true;
    }
  }

  if (message.isConsoleLoggerEnabled) {
    RQ.ConsoleLogger.log(
      `Applied rule %c${message.rule.name}%c on request URL: ${message.requestDetails.url}`,
      "color: green; font-weight: bold; font-style: italic",
      null,
      RQ.ConsoleLogger.buildRequestDetailsObject(message.requestDetails)
    );
  }
};

RQ.ConsoleLogger.log = (text, ...args) => {
  console.log(
    `%cRequestly%c ${text}`,
    "color: #3c89e8; padding: 1px 5px; border-radius: 4px; border: 1px solid #91caff;",
    null,
    ...args
  );
};

RQ.ConsoleLogger.buildRequestDetailsObject = (requestDetails) => {
  const requestDetailsObject = {
    method: requestDetails.method,
    timestamp: new Date(requestDetails.timeStamp).toLocaleString(),
  };

  if (requestDetails.type) {
    requestDetailsObject["type"] = requestDetails.type;
  }

  return requestDetailsObject;
};

RQ.ConsoleLogger.getSettingsUrl = () => {
  return RQ.configs.WEB_URL + "/settings";
};

RQ.ConsoleLogger.getRuleEditorUrl = (ruleId) => {
  return RQ.CONSTANTS.RULES_PAGE_URL + "#edit/" + ruleId;
};

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

RQ.RuleExecutionHandler = {};
RQ.RuleExecutionHandler.appliedRuleIds = new Set();
RQ.RuleExecutionHandler.implicitTestRuleFlowEnabled = false;
RQ.RuleExecutionHandler.implictTestRuleWidgetConfig = null;

RQ.RuleExecutionHandler.sendRuleExecutionEvent = (rule) => {
  const eventName = "rule_executed";
  const eventParams = {
    rule_type: rule.ruleType,
    rule_id: rule.id,
    platform: "extension",
    rule_creator: rule.createdBy,
  };
  RQ.ClientUtils.sendExecutionEventToBackground(eventName, eventParams);
};

RQ.RuleExecutionHandler.handleAppliedRule = (rule) => {
  const isFirstExecution = !RQ.RuleExecutionHandler.appliedRuleIds.has(rule.id);
  if (isFirstExecution) {
    RQ.RuleExecutionHandler.appliedRuleIds.add(rule.id);
    RQ.RuleExecutionHandler.sendRuleExecutionEvent(rule);
  }

  if (RQ.RuleExecutionHandler.implicitTestRuleFlowEnabled) {
    RQ.RuleExecutionHandler.checkAppliedRuleAndNotifyWidget(rule);
  } else {
    RQ.RuleExecutionHandler.notifyRuleAppliedToExplicitWidget(rule.id);
  }
};

RQ.RuleExecutionHandler.setup = async () => {
  if (window !== window.top) {
    return;
  }

  RQ.RuleExecutionHandler.fetchAndStoreImplicitTestRuleWidgetConfig();

  chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
    switch (message.action) {
      case RQ.CLIENT_MESSAGES.NOTIFY_RULE_APPLIED:
        RQ.RuleExecutionHandler.handleAppliedRule(message.rule);
        sendResponse();
        break;

      case RQ.CLIENT_MESSAGES.GET_APPLIED_RULE_IDS:
        sendResponse(Array.from(RQ.RuleExecutionHandler.appliedRuleIds));
        break;

      case RQ.CLIENT_MESSAGES.SYNC_APPLIED_RULES:
        RQ.RuleExecutionHandler.syncCachedAppliedRules(message.appliedRuleDetails, message.isConsoleLoggerEnabled);
        sendResponse();
        break;

      case RQ.CLIENT_MESSAGES.START_EXPLICIT_RULE_TESTING:
        if (message.record) {
          chrome.runtime.sendMessage({
            action: RQ.EXTENSION_MESSAGES.START_RECORDING_EXPLICITLY,
            showWidget: false,
          });
        }
        RQ.RuleExecutionHandler.showExplicitTestRuleWidget(message.ruleId);
        break;

      case RQ.CLIENT_MESSAGES.START_IMPLICIT_RULE_TESTING:
        RQ.RuleExecutionHandler.implicitTestRuleFlowEnabled = true;
        RQ.RuleExecutionHandler.showImplicitTestRuleWidget();

        break;
    }

    return false;
  });
};

RQ.RuleExecutionHandler.syncCachedAppliedRules = (appliedRuleDetails, isConsoleLoggerEnabled) => {
  appliedRuleDetails.forEach((appliedRuleDetail) => {
    RQ.RuleExecutionHandler.handleAppliedRule(appliedRuleDetail.rule);
  });
};

RQ.RuleExecutionHandler.hasExecutedRules = () => {
  return RQ.RuleExecutionHandler.appliedRuleIds.size > 0;
};

RQ.RuleExecutionHandler.showExplicitTestRuleWidget = async (ruleId) => {
  if (document.querySelector("rq-explicit-test-rule-widget")) {
    return;
  }

  const ruleDetails = await RQ.RulesStore.getRule(ruleId);
  const { name: ruleName } = ruleDetails;

  const testRuleWidget = document.createElement("rq-explicit-test-rule-widget");
  testRuleWidget.classList.add("rq-element");
  testRuleWidget.setAttribute("rule-id", ruleId);
  testRuleWidget.setAttribute("rule-name", ruleName);
  testRuleWidget.setAttribute("applied-status", RQ.RuleExecutionHandler.appliedRuleIds.has(ruleId));
  RQ.RuleExecutionHandler.setWidgetInfoText(testRuleWidget, ruleDetails);

  document.documentElement.appendChild(testRuleWidget);

  testRuleWidget.addEventListener("view-results", () => {
    chrome.runtime.sendMessage({
      action: RQ.EXTENSION_MESSAGES.SAVE_TEST_RULE_RESULT,
      ruleId,
      appliedStatus: testRuleWidget?.getAttribute("applied-status") === "true",
    });
  });
};

RQ.RuleExecutionHandler.showImplicitTestRuleWidget = async () => {
  if (document.querySelector("rq-implicit-test-rule-widget")) {
    return;
  }

  const testRuleWidget = document.createElement("rq-implicit-test-rule-widget");

  testRuleWidget.classList.add("rq-element");
  testRuleWidget.style.display = "none";

  document.documentElement.appendChild(testRuleWidget);

  testRuleWidget.addEventListener("view_rule_in_editor", (data) => {
    window.open(`${RQ.configs.WEB_URL}/rules/editor/edit/${data.detail.ruleId}`, "_blank");
  });

  testRuleWidget.addEventListener("open_app_settings", () => {
    window.open(`${RQ.configs.WEB_URL}/settings/global-settings`, "_blank");
  });

  testRuleWidget.addEventListener("rule_applied_listener_active", async () => {
    const ruleIds = Array.from(RQ.RuleExecutionHandler.appliedRuleIds);
    for (let ruleId of ruleIds) {
      const ruleDetails = await RQ.RulesStore.getRule(ruleId);
      RQ.RuleExecutionHandler.checkAppliedRuleAndNotifyWidget(ruleDetails);
    }
  });
};

RQ.RuleExecutionHandler.setWidgetInfoText = (testRuleWidget, ruleDetails) => {
  const { ruleType } = ruleDetails;

  switch (ruleType) {
    case "Response":
      testRuleWidget.setAttribute(
        "rq-test-rule-text",
        `Response Modifications will not show up in the browser network devtools due to technical contraints. Checkout docs for more <a target="_blank" href="https://developers.requestly.io/http-rules/modify-response-body/">details</a>.`
      );
      break;
    case "Headers":
      const responseHeaderExists = ruleDetails.pairs.some((pair) => {
        return pair?.modifications?.Response?.length > 0;
      });
      responseHeaderExists &&
        testRuleWidget.setAttribute(
          "rq-test-rule-text",
          `Response Header Modifications will not show up in the browser network devtools due to technical constraints. Checkout docs for more <a target="_blank" href="https://developers.requestly.io/http-rules/modify-headers/">details</a>.`
        );
      break;
    default:
      return;
  }
};

RQ.RuleExecutionHandler.notifyRuleAppliedToExplicitWidget = (ruleId) => {
  const explicitTestRuleWidget = document.querySelector("rq-explicit-test-rule-widget");

  if (explicitTestRuleWidget?.getAttribute("applied-status") === "false") {
    if (explicitTestRuleWidget.getAttribute("rule-id") === ruleId) {
      explicitTestRuleWidget.setAttribute("applied-status", true);
    }

    explicitTestRuleWidget.dispatchEvent(
      new CustomEvent("new-rule-applied", {
        detail: {
          appliedRuleId: ruleId,
        },
      })
    );
  }
};

RQ.RuleExecutionHandler.notifyRuleAppliedToImplicitWidget = (rule) => {
  const implicitTestRuleWidget = document.querySelector("rq-implicit-test-rule-widget");

  if (implicitTestRuleWidget) {
    implicitTestRuleWidget.dispatchEvent(
      new CustomEvent("new-rule-applied", {
        detail: {
          appliedRuleId: rule.id,
          appliedRuleName: rule.name,
          appliedRuleType: rule.ruleType,
        },
      })
    );

    implicitTestRuleWidget.style.display = "block";
  }
};

RQ.RuleExecutionHandler.fetchAndStoreImplicitTestRuleWidgetConfig = () => {
  chrome.storage.local.get(RQ.STORAGE_KEYS.IMPLICIT_RULE_TESTING_WIDGET_CONFIG, function (result) {
    RQ.RuleExecutionHandler.implictTestRuleWidgetConfig = result[RQ.STORAGE_KEYS.IMPLICIT_RULE_TESTING_WIDGET_CONFIG];
  });
};

RQ.RuleExecutionHandler.checkAppliedRuleAndNotifyWidget = (rule) => {
  const implicitTestRuleConfig = RQ.RuleExecutionHandler.implictTestRuleWidgetConfig;

  if (!implicitTestRuleConfig?.enabled) {
    return;
  }

  if (implicitTestRuleConfig?.visibility === RQ.IMPLICIT_RULE_TESTING_WIDGET_VISIBILITY.SPECIFIC) {
    if (!implicitTestRuleConfig?.ruleTypes.includes(rule.ruleType)) {
      return;
    }
  }

  RQ.RuleExecutionHandler.notifyRuleAppliedToImplicitWidget(rule);
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
