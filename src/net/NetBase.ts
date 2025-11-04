import { Http, HttpResponse } from "@capacitor/http";
type ReqParmType = XMLHttpRequestBodyInit | undefined;
export class NetBase extends XMLHttpRequest {
    private url: string = import.meta.env['VITE_URL'];
    private body: ReqParmType;
    constructor(url: string) {
        super();
        this.url = this.url.concat(url);
    }
    get(data: ReqParmType) {
        this.body = data;
        this.open('GET', this.url);
        return this;
    }
    send(): Promise<HttpResponse> {
        super.send(this.body);
        return Http.request({ url: this.url, data: this.body });
        // return new Promise((resolve, reject) => {
        //     this.onloadend = (e) => {
        //         console.log(e, 'yzt');
        //         if (this.status == 200) {
        //             resolve(this.response)
        //         } else {
        //             reject({})
        //         }
        //     }
        //     return null;
        // })
    }
}