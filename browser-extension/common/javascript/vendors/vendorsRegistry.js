import { VendorName } from "./types";
export class VendorsRegistry {
    static instance;
    vendors;
    constructor() {
        this.vendors = [];
    }
    static getInstance() {
        if (!VendorsRegistry.instance) {
            VendorsRegistry.instance = new VendorsRegistry();
        }
        return VendorsRegistry.instance;
    }
    addVendor(vendor) {
        this.vendors.push(vendor);
    }
    getVendorByName(name) {
        return this.vendors.find((vendor) => vendor.name === name);
    }
    getVendorByUrl(url, method) {
        return this.vendors.find((vendor) => vendor.identify(url, method));
    }
    getVendorEventDetailsByName(name, event) {
        switch (name) {
            case VendorName.BLUECORE: {
                const vendor = this.getVendorByName(name);
                return vendor.getEventDetails(event);
            }
            default: {
                return null;
            }
        }
    }
    getVendorsCount() {
        return this.vendors.length;
    }
}
