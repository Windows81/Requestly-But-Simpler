const SessionRecorder = (RQ.SessionRecorder = {});

SessionRecorder.setup = () => {
  SessionRecorder.isInitialized = false;
  SessionRecorder.isRecording = false;
  SessionRecorder.isExplicitRecording = false;
  SessionRecorder.markRecordingIcon = false;
  SessionRecorder.widgetPosition = null;
  SessionRecorder.showWidget = false;
  SessionRecorder.recordingStartTime = null;
  SessionRecorder.sendResponseCallbacks = {};
  SessionRecorder.recordingMode;

  const isTopDocument = !SessionRecorder.isIframe();

  chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
    // messages for all the frames
    switch (message.action) {
      case RQ.CLIENT_MESSAGES.START_RECORDING:
        SessionRecorder.startRecording(message.payload).then(() => {
          // only the top document should send confirmation
          if (isTopDocument) {
            sendResponse();
          }
        });
        return true;

      case RQ.CLIENT_MESSAGES.STOP_RECORDING:
        SessionRecorder.sendMessageToClient("stopRecording", null);
        break;
    }

    // messages for only the top document
    if (isTopDocument) {
      switch (message.action) {
        case RQ.CLIENT_MESSAGES.IS_RECORDING_SESSION:
          sendResponse(SessionRecorder.isRecording);
          break;

        case RQ.CLIENT_MESSAGES.IS_EXPLICIT_RECORDING_SESSION:
          sendResponse(SessionRecorder.isExplicitRecording);
          break;

        case RQ.CLIENT_MESSAGES.GET_TAB_SESSION:
          SessionRecorder.sendMessageToClient("getSessionData", null, (session) =>
            sendResponse({
              ...session,
              recordingMode: SessionRecorder.recordingMode,
            })
          );
          return true;
      }
    }
  });
};

SessionRecorder.startRecording = async (options = {}) => {
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

  await SessionRecorder.initialize();

  if (!explicit && SessionRecorder.isExplicitRecording) {
    return;
  }

  SessionRecorder.sendMessageToClient("startRecording", {
    relayEventsToTop: SessionRecorder.isIframe(),
    console: true,
    network: true,
    maxDuration: (config?.maxDuration || 5) * 60 * 1000, // minutes -> milliseconds
    previousSession: !SessionRecorder.isIframe() ? previousSession : null,
  });

  if (notify) {
    SessionRecorder.showToast();
  }

  SessionRecorder.isExplicitRecording = explicit;
  SessionRecorder.widgetPosition = widgetPosition;
  SessionRecorder.showWidget = showWidget;
  SessionRecorder.recordingMode = explicit ? "manual" : "auto";
  SessionRecorder.markRecordingIcon = markRecordingIcon;

  if (explicit) {
    SessionRecorder.recordingStartTime = recordingStartTime ?? Date.now();
    SessionRecorder.hideAutoModeWidget();
  }
};

SessionRecorder.initialize = () => {
  return new Promise((resolve) => {
    if (SessionRecorder.isInitialized) {
      resolve();
    }

    RQ.ClientUtils.addJSFromURL(chrome.runtime.getURL("libs/requestly-web-sdk.js"), null, () => {
      RQ.ClientUtils.executeJS(`(${SessionRecorder.bootstrapClient.toString()})('${RQ.PUBLIC_NAMESPACE}')`);
      SessionRecorder.addMessageListeners();
      SessionRecorder.isInitialized = true;
      resolve();
    });
  });
};

SessionRecorder.isIframe = () => {
  return window.top !== window;
};

SessionRecorder.addMessageListeners = () => {
  if (SessionRecorder.isIframe()) {
    return;
  }

  window.addEventListener("message", function (event) {
    if (event.source !== window || event.data.source !== "requestly:client") {
      return;
    }

    if (event.data.response) {
      SessionRecorder.sendResponseToRuntime(event.data.action, event.data.payload);
    } else if (event.data.action === "sessionRecordingStarted") {
      SessionRecorder.isRecording = true;

      chrome.runtime.sendMessage({
        action: RQ.CLIENT_MESSAGES.NOTIFY_SESSION_RECORDING_STARTED,
        markRecordingIcon: SessionRecorder.markRecordingIcon,
      });

      if (SessionRecorder.showWidget) {
        if (SessionRecorder.isExplicitRecording) {
          SessionRecorder.showManualModeRecordingWidget();
        } else {
          SessionRecorder.showAutoModeRecordingWidget();
        }
      }
    } else if (event.data.action === "sessionRecordingStopped") {
      SessionRecorder.isRecording = false;
      SessionRecorder.isExplicitRecording = false;
      SessionRecorder.showWidget = false;
      SessionRecorder.recordingStartTime = null;
      SessionRecorder.markRecordingIcon = false;

      SessionRecorder.hideManualModeWidget();
      SessionRecorder.hideAutoModeWidget();

      chrome.runtime.sendMessage({
        action: RQ.CLIENT_MESSAGES.NOTIFY_SESSION_RECORDING_STOPPED,
      });
    }
  });

  window.addEventListener("beforeunload", () => {
    SessionRecorder.sendMessageToClient("getSessionData", null, (session) => {
      chrome.runtime.sendMessage({
        action: RQ.CLIENT_MESSAGES.CACHE_RECORDED_SESSION_ON_PAGE_UNLOAD,
        payload: {
          session,
          widgetPosition: SessionRecorder.widgetPosition,
          recordingMode: SessionRecorder.recordingMode,
          recordingStartTime: SessionRecorder.recordingStartTime,
        },
      });
    });
  });
};

SessionRecorder.sendResponseToRuntime = (action, payload) => {
  SessionRecorder.sendResponseCallbacks[action]?.(payload);
  delete SessionRecorder.sendResponseCallbacks[action];
};

SessionRecorder.sendMessageToClient = (action, payload, sendResponseCallback) => {
  window.postMessage({ source: "requestly:extension", action, payload }, window.location.href);
  if (sendResponseCallback) {
    SessionRecorder.sendResponseCallbacks[action] = sendResponseCallback;
  }
};

/**
 * Do not refer other function/variables from this function.
 * This function will be injected in website and will run in a different JS context.
 */
SessionRecorder.bootstrapClient = (namespace) => {
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

SessionRecorder.showToast = () => {
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

SessionRecorder.showManualModeRecordingWidget = () => {
  let widget = SessionRecorder.getManualModeWidget();

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
      SessionRecorder.widgetPosition = evt.detail;
    });
  }

  const recordingLimitInMilliseconds = 5 * 60 * 1000; // 5 mins * 60 secs * 1000 ms
  const recordingTime = Date.now() - SessionRecorder.recordingStartTime;
  const currentRecordingTime = recordingTime <= recordingLimitInMilliseconds ? recordingTime : null;

  widget.dispatchEvent(
    new CustomEvent("show", {
      detail: {
        currentRecordingTime,
        position: SessionRecorder.widgetPosition,
      },
    })
  );
};

SessionRecorder.hideManualModeWidget = () => {
  const widget = SessionRecorder.getManualModeWidget();
  widget?.dispatchEvent(new CustomEvent("hide"));
};

SessionRecorder.getManualModeWidget = () => {
  return document.querySelector("rq-session-recording-widget");
};

SessionRecorder.showAutoModeRecordingWidget = () => {
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
      SessionRecorder.widgetPosition = evt.detail;
    });
  }

  widget.dispatchEvent(
    new CustomEvent("show", {
      detail: {
        position: SessionRecorder.widgetPosition,
      },
    })
  );
};

SessionRecorder.hideAutoModeWidget = () => {
  let widget = document.querySelector("rq-session-recording-auto-mode-widget");
  widget?.dispatchEvent(new CustomEvent("hide"));
};
