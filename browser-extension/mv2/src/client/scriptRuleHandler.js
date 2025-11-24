RQ.ScriptRuleHandler = class {
  static setup = function () {
    const cls = this;
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

  static handleRules = function (rules) {
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

  static handleCSSScripts = function (cssScripts) {
    return new Promise(function (resolve) {
      cssScripts.forEach(RQ.ScriptRuleHandler.includeCSS);
      resolve();
    });
  };

  static handleJSLibraries = function (libraries) {
    return new Promise(function (resolve) {
      RQ.ScriptRuleHandler.addLibraries(libraries, resolve);
    });
  };

  static handleJSScripts = function (jsScripts) {
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

  static addLibraries = function (libraries, callback, index) {
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

  static includeJSScriptsInOrder = function (scripts, callback, index) {
    index = index || 0;

    if (index >= scripts.length) {
      typeof callback === "function" && callback();
      return;
    }

    RQ.ScriptRuleHandler.includeJS(scripts[index], function () {
      RQ.ScriptRuleHandler.includeJSScriptsInOrder(scripts, callback, index + 1);
    });
  };

  static includeJS = function (script, callback) {
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

  static includeCSS = function (script, callback) {
    if (script.type === RQ.SCRIPT_TYPES.URL) {
      RQ.ClientUtils.addCSSFromURL(script.value, script.attributes);
      return;
    }

    if (script.type === RQ.SCRIPT_TYPES.CODE) {
      RQ.ClientUtils.embedCSS(script.value, script.attributes);
    }
    typeof callback === "function" && callback();
  };
};
