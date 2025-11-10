import { EXTENSION_MESSAGES } from "common/constants";
import extensionIconManager from "../extensionIconManager";
import { removeProxy } from "../proxy";
import { DESKTOP_APP_CONFIG } from "./desktopAppConfig";
import { PortScanner } from "./portScanner";
import { getConnectedBrowserAppId } from "./utils";
import { sendMessageToApp } from "../messageHandler/sender";
import { updateExtensionStatus } from "../utils";
export class WebSocketManager {
    socket = null;
    activePort = null;
    async init() {
        if (!this.activePort) {
            await this.findActivePort();
        }
    }
    async connect() {
        if (this.isConnected()) {
            return true;
        }
        await this.init();
        return this.establishConnection();
    }
    async sendMessage(message, awaitResponse = false) {
        if (!this.isConnected()) {
            throw new Error("WebSocket is not open");
        }
        const fullMessage = { ...message, source: "extension" };
        this.socket.send(JSON.stringify(fullMessage));
        if (!awaitResponse) {
            return null;
        }
        return new Promise((resolve) => {
            const handleResponse = (event) => {
                const response = JSON.parse(event.data);
                if (response.source === "desktop-app" && response.action === message.action) {
                    this.socket.removeEventListener("message", handleResponse);
                    resolve(response);
                }
            };
            this.socket.addEventListener("message", handleResponse);
        });
    }
    async disconnect() {
        try {
            if (this.isConnected()) {
                await this.sendMessage({
                    action: "browser-disconnected",
                    appId: getConnectedBrowserAppId(),
                });
            }
        }
        catch (error) {
            console.error("Disconnect error:", error);
        }
        finally {
            this.cleanup();
        }
    }
    async checkConnection() {
        await this.init();
        return fetch(`http://${DESKTOP_APP_CONFIG.BASE_IP}:${this.activePort}`)
            .then(() => true)
            .catch(() => false);
    }
    isConnected() {
        return this.socket?.readyState === WebSocket.OPEN;
    }
    async establishConnection() {
        return new Promise((resolve) => {
            this.socket = new WebSocket(`ws://${DESKTOP_APP_CONFIG.BASE_IP}:${this.activePort}`);
            this.socket.onopen = () => {
                console.log("WebSocket connection opened");
                resolve(true);
            };
            this.socket.onmessage = (event) => this.handleMessage(event.data);
            this.socket.onerror = (error) => {
                console.error("WebSocket error:", error);
                this.cleanup();
                resolve(false);
            };
            this.socket.onclose = () => {
                console.log("WebSocket connection closed");
                this.cleanup();
            };
        });
    }
    async findActivePort() {
        const portScanner = new PortScanner();
        this.activePort = await portScanner.findActivePort();
    }
    handleMessage(data) {
        try {
            const message = JSON.parse(data);
            if (message.source !== "desktop-app")
                return;
            switch (message.action) {
                case "heartbeat":
                    // Keep service worker alive
                    this.sendMessage({ action: "heartbeat" });
                    break;
                case "disconnect-extension":
                    this.disconnect();
                    break;
                default:
                    console.log("Unknown action:", message.action);
            }
        }
        catch (error) {
            console.error("Message handling error:", error);
        }
    }
    cleanup() {
        if (this.socket) {
            this.socket.close();
            this.socket = null;
        }
        removeProxy();
        extensionIconManager.markDisconnectedFromDesktopApp();
        updateExtensionStatus(true);
        sendMessageToApp({
            action: EXTENSION_MESSAGES.DESKTOP_APP_CONNECTION_STATUS_UPDATED,
            payload: false,
        });
    }
}
