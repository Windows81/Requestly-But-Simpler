RQ.ClientUtils = class {
  static executeJS = function (code, attributes, shouldRemove) {
    const script = document.createElement("script");
    if (attributes) {
      attributes.forEach(({ name: attrName, value: attrVal }) => {
        script.setAttribute(attrName, attrVal ?? "");
      });
    } else {
      script.type = "text/javascript";
    }
    script.classList.add(this.getScriptClassAttribute());

    script.appendChild(document.createTextNode(code));
    const parent = document.head || document.documentElement;
    parent.appendChild(script);

    if (shouldRemove) {
      parent.removeChild(script);
    }
  };

  static addJSFromURL = function (src, attributes, callback) {
    var script = document.createElement("script");
    if (attributes) {
      attributes.forEach(({ name: attrName, value: attrVal }) => {
        script.setAttribute(attrName, attrVal ?? "");
      });
    } else {
      script.type = "text/javascript";
    }
    script.src = src;
    script.classList.add(this.getScriptClassAttribute());

    if (typeof callback === "function") {
      script.onload = callback;
    }

    (document.head || document.documentElement).appendChild(script);
    return script;
  };

  static embedCSS = function (css, attributes) {
    var style = document.createElement("style");
    style.appendChild(document.createTextNode(css));

    if (attributes) {
      attributes.forEach(({ name: attrName, value: attrVal }) => {
        style.setAttribute(attrName, attrVal ?? "");
      });
    }

    style.classList.add(this.getScriptClassAttribute());

    (document.head || document.documentElement).appendChild(style);
    return style;
  };

  static addCSSFromURL = function (src, attributes) {
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
    link.classList.add(this.getScriptClassAttribute());

    (document.head || document.documentElement).appendChild(link);
    return link;
  };

  static onPageLoad = function () {
    return new Promise(function (resolve) {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", resolve);
      } else {
        resolve();
      }
    });
  };

  static getScriptClassAttribute = function () {
    return RQ.PUBLIC_NAMESPACE + "SCRIPT";
  };

  static isHTMLDocument = function () {
    return document.doctype?.name === "html" || document instanceof HTMLDocument; // HTMLDocument can't be replaced with Document, as it fails for XML
  };

  static sendExecutionEventToBackground = (eventName, eventParams) => {
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

  static isAppPage = () => {
    return false;
  };
};
