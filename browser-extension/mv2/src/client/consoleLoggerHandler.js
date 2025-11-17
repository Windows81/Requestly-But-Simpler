const ConsoleLogger = (RQ.ConsoleLogger = {});
ConsoleLogger.loggingStarted = false;

ConsoleLogger.setup = () => {
  window.addEventListener("message", function (event) {
    if (event.source !== window || event.data.source !== "requestly:consoleLogger") {
      return;
    }

    if (event.data.action === "showInitialMessage") {
      ConsoleLogger.showInitialMessage(event.data.payload?.isConsoleLoggerEnabled);
    }
  });

  chrome.runtime.onMessage.addListener(function (message) {
    if (message.action === RQ.CLIENT_MESSAGES.PRINT_CONSOLE_LOGS) {
      ConsoleLogger.handleMessage(message);
    }
  });
};

ConsoleLogger.showInitialMessage = (isConsoleLoggerEnabled) => {
  if (ConsoleLogger.loggingStarted) {
    return;
  }

  if (isConsoleLoggerEnabled) {
    ConsoleLogger.log(
      `Applied rules will be logged in console. You may disable the feature from: ${ConsoleLogger.getSettingsUrl()}`
    );
  } else {
    ConsoleLogger.log(
      `Applied some rules on this page. You may enable logging in console from: ${ConsoleLogger.getSettingsUrl()}`
    );
  }

  ConsoleLogger.loggingStarted = true;
};

ConsoleLogger.handleMessage = (message) => {
  if (!ConsoleLogger.loggingStarted) {
    if (window === window.top) {
      ConsoleLogger.showInitialMessage(message.isConsoleLoggerEnabled);
    } else {
      window.top.postMessage(
        {
          source: "requestly:consoleLogger",
          action: "showInitialMessage",
          payload: { isConsoleLoggerEnabled: message.isConsoleLoggerEnabled },
        },
        "*"
      );
      ConsoleLogger.loggingStarted = true;
    }
  }

  if (message.isConsoleLoggerEnabled) {
    ConsoleLogger.log(
      `Applied rule %c${message.rule.name}%c on request URL: ${message.requestDetails.url}`,
      "color: green; font-weight: bold; font-style: italic",
      null,
      ConsoleLogger.buildRequestDetailsObject(message.requestDetails)
    );
  }
};

ConsoleLogger.log = (text, ...args) => {
  console.log(
    `%cRequestly%c ${text}`,
    "color: #3c89e8; padding: 1px 5px; border-radius: 4px; border: 1px solid #91caff;",
    null,
    ...args
  );
};

ConsoleLogger.buildRequestDetailsObject = (requestDetails) => {
  const requestDetailsObject = {
    method: requestDetails.method,
    timestamp: new Date(requestDetails.timeStamp).toLocaleString(),
  };

  if (requestDetails.type) {
    requestDetailsObject["type"] = requestDetails.type;
  }

  return requestDetailsObject;
};

ConsoleLogger.getSettingsUrl = () => {
  return RQ.configs.WEB_URL + "/settings";
};

ConsoleLogger.getRuleEditorUrl = (ruleId) => {
  return RQ.CONSTANTS.RULES_PAGE_URL + "#edit/" + ruleId;
};
