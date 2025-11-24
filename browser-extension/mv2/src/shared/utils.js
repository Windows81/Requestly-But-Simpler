window.RQ ??= {};
window.RQ.configs = {
  browser: "chrome",
  storageType: "local",
  contextMenuContexts: ["browser_action"],
  env: "prod",
  WEB_URL: "https://app.requestly.io",
  OTHER_WEB_URLS: ["https://app.requestly.com"],
  logLevel: "info",
};

RQ.Utils = class {
  static regexFormat = "^/(.+)/(|i|g|ig|gi)$";

  static toRegex(regexStr) {
    const matchRegExp = regexStr.match(new RegExp(this.regexFormat));

    if (!matchRegExp) {
      return null;
    }
    try {
      return new RegExp(matchRegExp[1], matchRegExp[2]);
    } catch {
      return null;
    }
  }

  static isValidUrl(url) {
    return url.search(/^http:|https:|ftp:|javascript:/) === 0;
  }

  static getId() {
    return Date.now();
  }

  static getCurrentTime() {
    return Date.now();
  }

  static formatDate(dateInMilis, format) {
    const d = new Date(dateInMilis);

    if (dateInMilis && format === "yyyy-mm-dd") {
      let month = d.getMonth() + 1,
        date = d.getDate();

      date = String(date).length < 2 ? "0" + date : String(date);
      month = String(month).length < 2 ? "0" + month : String(month);

      return d.getFullYear() + "-" + month + "-" + date;
    }
  }

  static reloadPage(wait) {
    wait = wait || 0;

    setTimeout(function () {
      window.location.reload();
    }, wait);
  }

  static removeLastPart(str, separater) {
    str = str || "";

    // Return original string when separator is not present
    if (str.indexOf(separater) === -1) {
      return str;
    }

    str = str.split(separater);

    // Remove last part
    str.length--;

    return str.join(separater);
  }

  static setCookie(name, value, maxAge) {
    document.cookie = name + "=" + value + "; path=/" + "; max-age=" + maxAge;
  }

  static readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }

    return null;
  }

  static eraseCookie(name) {
    this.setCookie(name, "", 1);
  }

  /**
   *
   * @param url Url from which component has to be extracted
   * @param name Url component name - host, path, url, query, fragment etc.
   */
  static extractUrlComponent(url, name) {
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
  }

  /**
   *
   * @param queryString e.g. ?a=1&b=2 or a=1 or ''
   * @returns object { paramName -> [value1, value2] }
   */
  static getQueryParamsMap(queryString) {
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
  }

  /**
   * Convert a map to keyvalue pair string (Used for query params)
   * @param queryParamsMap
   * @returns {string}
   */
  static convertQueryParamMapToString(queryParamsMap) {
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
  }

  static getUrlWithoutQueryParamsAndHash(url) {
    var urlWithoutHash = url.split("#")[0];

    return urlWithoutHash.split("?")[0];
  }

  /**
   * Add a Query Param to URL
   * @param {string} url Url to which query string has to be added
   * @param {string} paramName The paramName to be added
   * @param {string} paramValue The paramValue of the paramName
   * @param {boolean} overwrite Whether to overwrite the existing queryStrign or not
   * @returns {string} A well formatted url with addition of given query param
   */
  static addQueryParamToURL(url, paramName, paramValue, overwrite) {
    let resultingUrl = url,
      urlWithoutQueryParamsAndHash = this.getUrlWithoutQueryParamsAndHash(url),
      urlHash = this.extractUrlComponent(url, RQ.URL_COMPONENTS.HASH),
      queryString = this.extractUrlComponent(url, RQ.URL_COMPONENTS.QUERY),
      queryParamsMap = this.getQueryParamsMap(queryString);

    if (overwrite) {
      queryParamsMap[paramName] = [];
    } else {
      queryParamsMap[paramName] = queryParamsMap[paramName] || [];
    }

    queryParamsMap[paramName].push(paramValue);

    queryString = this.convertQueryParamMapToString(queryParamsMap);

    resultingUrl = queryString ? urlWithoutQueryParamsAndHash + "?" + queryString : urlWithoutQueryParamsAndHash;
    resultingUrl += urlHash;

    return resultingUrl;
  }

  /**
   * Adds Delay by running a loop for desired time
   * @param {Number} milliseconds Time in ms for which to add delay
   * @returns {Void} Void
   */
  static addDelay(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  /**
   * Generates Id for a execution log- a random 6 digit number is added to current epoch time
   * to generate a unique ID. I works as the number of digits in current time wont be affected
   * by adding an 6 digit number.
   * Also added an unit test to verify ID length
   * @returns {String} id
   */

  static generateExecutionLogId() {
    return `executionLog_${Date.now() + Math.floor(Math.random() * 1000000)}`;
  }

  /**
   * This code is also copied in responseRuleHandler.js So if you change anything inside this, please update there as well
   * And test across multiple sites using Modify Response Rule
   * @param {String} mightBeJSONString
   * @returns JSON Object if the string is JSON String otherwise returns the same string
   */
  static jsonifyValidJSONString = (mightBeJSONString) => {
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
  static convertSearchParamsToJSON = (url) => {
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
      paramsObject[paramName] = this.jsonifyValidJSONString(paramValue);
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
  static traverseJsonByPath = (jsonObject, path) => {
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
  static setObjectValueAtPath = (incomingObject, path, value) => {
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

  static isOlderVersion = (version, baseVersion) => {
    return (
      version.localeCompare(baseVersion, undefined, {
        numeric: true,
        sensitivity: "base",
      }) === -1
    );
  };

  static getPageSourceOrigin = (url) => {
    if (!url) {
      return null;
    }

    return this.extractUrlComponent(url, RQ.URL_COMPONENTS.ORIGIN);
  };

  static fireAjax = (requestURL, async) => {
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

  static getAllSupportedWebURLs = () => {
    const webURLsSet = new Set([RQ.configs.WEB_URL, ...RQ.configs.OTHER_WEB_URLS]);
    return [...webURLsSet];
  };

  static isAppURL = (url) => {
    return !!url && this.getAllSupportedWebURLs().some((webURL) => url.includes(webURL));
  };
};
