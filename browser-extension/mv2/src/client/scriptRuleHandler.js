const ScriptRuleHandler = (RQ.ScriptRuleHandler = {});

ScriptRuleHandler.setup = function () {
  const message = {
    action: RQ.CLIENT_MESSAGES.GET_SCRIPT_RULES,
    url: window.location.href,
  };
  chrome.runtime.sendMessage(message, function (rules) {
    if (rules && rules.constructor === Array) {
      ScriptRuleHandler.handleRules(rules);

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

ScriptRuleHandler.handleRules = function (rules) {
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

    ScriptRuleHandler.handleCSSScripts(cssScripts)
      .then(function () {
        return ScriptRuleHandler.handleJSLibraries(libraries);
      })
      .then(function () {
        return ScriptRuleHandler.handleJSScripts(jsScripts);
      })
      .then(resolve);
  });
};

ScriptRuleHandler.handleCSSScripts = function (cssScripts) {
  return new Promise(function (resolve) {
    cssScripts.forEach(ScriptRuleHandler.includeCSS);
    resolve();
  });
};

ScriptRuleHandler.handleJSLibraries = function (libraries) {
  return new Promise(function (resolve) {
    ScriptRuleHandler.addLibraries(libraries, resolve);
  });
};

ScriptRuleHandler.handleJSScripts = function (jsScripts) {
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

    ScriptRuleHandler.includeJSScriptsInOrder(prePageLoadScripts, function () {
      RQ.ClientUtils.onPageLoad().then(function () {
        ScriptRuleHandler.includeJSScriptsInOrder(postPageLoadScripts, resolve);
      });
    });
  });
};

ScriptRuleHandler.addLibraries = function (libraries, callback, index) {
  index = index || 0;

  if (index >= libraries.length) {
    typeof callback === "function" && callback();
    return;
  }

  var libraryKey = libraries[index],
    library = RQ.SCRIPT_LIBRARIES[libraryKey],
    addNextLibraries = function () {
      ScriptRuleHandler.addLibraries(libraries, callback, index + 1);
    };

  if (library) {
    RQ.ClientUtils.addJSFromURL(library.src, null, addNextLibraries);
  } else {
    addNextLibraries();
  }
};

ScriptRuleHandler.includeJSScriptsInOrder = function (scripts, callback, index) {
  index = index || 0;

  if (index >= scripts.length) {
    typeof callback === "function" && callback();
    return;
  }

  ScriptRuleHandler.includeJS(scripts[index], function () {
    ScriptRuleHandler.includeJSScriptsInOrder(scripts, callback, index + 1);
  });
};

ScriptRuleHandler.includeJS = function (script, callback) {
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

ScriptRuleHandler.includeCSS = function (script, callback) {
  if (script.type === RQ.SCRIPT_TYPES.URL) {
    RQ.ClientUtils.addCSSFromURL(script.value, script.attributes);
    return;
  }

  if (script.type === RQ.SCRIPT_TYPES.CODE) {
    RQ.ClientUtils.embedCSS(script.value, script.attributes);
  }
  typeof callback === "function" && callback();
};
