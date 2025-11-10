import { getGroups, getRules, onRuleOrGroupChange } from "common/rulesStore";
import { Status } from "common/types";
class RulesStorageService {
    rules = [];
    groups = [];
    isInitialized = false;
    listeners = {};
    updateCachedRules = async () => {
        this.rules = await getRules();
        this.groups = await getGroups();
        this.isInitialized = true;
    };
    constructor() {
        this.updateCachedRules();
        onRuleOrGroupChange(() => {
            this.updateCachedRules().then(() => {
                if (this.listeners) {
                    Object.values(this.listeners).forEach((listener) => listener?.());
                }
            });
        });
    }
    onRuleOrGroupChange = (listener) => {
        const listenerId = Date.now();
        this.listeners[listenerId] = listener;
        return () => {
            this.listeners[listenerId] && delete this.listeners[listenerId];
        };
    };
    getAllRules = async () => {
        if (!this.isInitialized) {
            return getRules();
        }
        return this.rules;
    };
    getAllGroups = async () => {
        if (!this.isInitialized) {
            return getGroups();
        }
        return this.groups;
    };
    getRule = async (id) => {
        return this.getAllRules().then((rules) => rules.find((rule) => rule.id === id));
    };
    getRules = async (ids) => {
        return this.getAllRules().then((rules) => rules.filter((rule) => ids.includes(rule.id)));
    };
    getEnabledRules = async (ruleType) => {
        const rules = await this.getAllRules();
        const groups = await this.getAllGroups();
        return rules.filter((rule) => {
            if (!rule.status || rule.status === Status.INACTIVE) {
                return false;
            }
            if (ruleType && rule.ruleType !== ruleType) {
                return false;
            }
            if (!rule.groupId) {
                return true;
            }
            const group = groups.find((group) => group.id === rule.groupId);
            if (group.status === Status.ACTIVE) {
                return true;
            }
            return false;
        });
    };
}
const rulesStorageService = new RulesStorageService();
export default rulesStorageService;
