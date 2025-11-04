import { CapacitorHttp } from "@capacitor/core";
export class NetBase {
    private url: string = import.meta.env['VITE_URL'];
    constructor(url: string) {
        this.url = this.url.concat(url);
    }
    get(data: object | undefined) {
        return CapacitorHttp.get({
            url: this.url,
            data
        });
    }
}