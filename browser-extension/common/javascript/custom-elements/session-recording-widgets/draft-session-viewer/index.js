import { registerCustomElement } from "../../utils";
import { setInnerHTML } from "../../utils";
import closeIcon from "../../../../resources/icons/close.svg";
import styles from "./index.css";
const TAG_NAME = "rq-draft-session-viewer";
class RQDraftSessionViewer extends HTMLElement {
    shadowRoot;
    #iframeSource;
    constructor() {
        super();
        this.shadowRoot = this.attachShadow({ mode: "closed" });
    }
    connectedCallback() {
        this.#iframeSource = this.attributes.getNamedItem("session-src")?.value;
        setInnerHTML(this.shadowRoot, this._getDefaultMarkup());
        const draftSessionWindow = this.shadowRoot.getElementById("draft-session-window");
        draftSessionWindow.classList.add("hidden");
        this.addViewerListeners();
    }
    _getDefaultMarkup() {
        // TODO: handle iframe src
        return `
      <style>${styles}</style>
      <div id="draft-session-window">
      <div id="draft-session-view">
      <div id="draft-view-close-btn">${closeIcon}</div>
      <iframe id="draft-session-iframe" src=${this.#iframeSource}></iframe>
      </div>
      </div>
    `;
    }
    addViewerListeners() {
        const draftSessionWindow = this.shadowRoot.getElementById("draft-session-window");
        const draftViewCloseBtn = this.shadowRoot.getElementById("draft-view-close-btn");
        const iframe = this.shadowRoot.getElementById("draft-session-iframe");
        draftViewCloseBtn.addEventListener("click", () => {
            draftSessionWindow.classList.add("hidden");
            this.sendMessageToIframe(iframe, { source: "extension", action: "resetDraftSessionViewer" });
        });
        this.addEventListener("view-draft-session", (event) => {
            draftSessionWindow.classList.remove("hidden");
            this.sendMessageToIframe(iframe, {
                source: "extension",
                action: "viewDraftSession",
                payload: event.detail.session,
            });
        });
        this.addEventListener("hide-draft-session-viewer", () => {
            draftSessionWindow.classList.add("hidden");
        });
    }
    sendMessageToIframe = (iframe, message, targetOrigin = "*") => {
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage(message, targetOrigin);
        }
    };
}
registerCustomElement(TAG_NAME, RQDraftSessionViewer);
