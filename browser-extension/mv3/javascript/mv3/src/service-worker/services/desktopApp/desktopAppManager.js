import { EXTENSION_MESSAGES } from "common/constants";
import { applyProxy } from "../proxy";
import { WebSocketManager } from "./webSocketManager";
import extensionIconManager from "../extensionIconManager";
import { getConnectedBrowserAppId } from "./utils";
import { DESKTOP_APP_CONFIG } from "./desktopAppConfig";
import { sendMessageToApp } from "../messageHandler/sender";
import { updateExtensionStatus } from "../utils";
export class DesktopAppManager {
    wsManager = new WebSocketManager();
    async connectAndSetupProxy() {
        const isConnected = await this.wsManager.connect();
        if (!isConnected) {
            return false;
        }
        try {
            const proxyDetails = await this.getProxyDetails();
            await applyProxy(proxyDetails);
            sendMessageToApp({
                action: EXTENSION_MESSAGES.DESKTOP_APP_CONNECTION_STATUS_UPDATED,
                payload: true,
            });
            updateExtensionStatus(false);
            extensionIconManager.markConnectedToDesktopApp();
            await this.wsManager.sendMessage({
                action: "browser-connected",
                appId: getConnectedBrowserAppId(),
            });
            return true;
        }
        catch (error) {
            console.error("Setup failed:", error);
            await this.wsManager.disconnect();
            return false;
        }
    }
    async getProxyDetails() {
        const response = await this.wsManager.sendMessage({ action: "get-proxy" }, true);
        return {
            proxyPort: response.proxyPort,
            proxyIp: DESKTOP_APP_CONFIG.BASE_IP,
            proxyUrl: `http://${DESKTOP_APP_CONFIG.BASE_IP}:${response.proxyPort}`,
        };
    }
    async disconnect() {
        await this.wsManager.disconnect();
    }
    async checkDesktopAppStatus() {
        return this.wsManager.checkConnection();
    }
}
