import { NetBase } from "../NetBase";
import { HomeListItem } from "./home";

export type DetailType = {
    err: {
        code: 0 | 1,
        msg: string
    },
    info?: {
        title: string;
        aux: {
            taglink: {
                label: string;
                link: string;
            },
            tag: string
        },
        items: {
            one: string;
            two: string
        }[]
        href: string;
    },
    module_0?: {
        title: string;
        arr: {
            label: string
            href: string
        }[]
    },
    module_1?: {
        title: string;
        arr: {
            img: string;
            label: string;
            href: string;
            desc: string;
        }[]
    }
}
/**返回首页列表 */
export async function detail_list(item: HomeListItem | null): Promise<DetailType> {
    // console.log('yzt_req_网络请求', item);
    if (item?.href != null) {
        const res = await new NetBase(item.href).get(undefined);
        if (res.status == 200) {
            const dom = new DOMParser().parseFromString(res.data, 'text/html');
            const info_dom = dom.getElementsByClassName('video-info')[0];
            const modules = dom.getElementsByClassName('module');
            return {
                err: {
                    code: 0,
                    msg: ''
                },
                info: {
                    title: info_dom.children[0].children[0].textContent || '',
                    aux: {
                        taglink: {
                            link: info_dom.children[1].children[0].getAttribute('href') || '',
                            label: info_dom.children[1].children[0].textContent || '',
                        },
                        tag: info_dom.children[1].children[2].textContent || '',
                    },
                    items: Array.from(info_dom.children[2].children).filter(item => item.children[0].textContent != '状态：').map(item => {
                        return {
                            one: item.children[0].textContent,
                            two: item.children[1].textContent
                        }
                    }),
                    href: info_dom.children[2].getAttribute('href') || ''
                },
                module_0: {
                    title: modules[0].children[0].textContent,
                    arr: Array.from(modules[0].children[1].children[0].children[0].children).map(item => {
                        return {
                            label: item.textContent,
                            href: item.getAttribute('href') || ''
                        }
                    })
                },
                module_1: {
                    title: modules[1].children[0].textContent,
                    arr: Array.from(modules[1].children[1].children[0].children).map(item => {
                        return {
                            img: item.children[0].getElementsByTagName('img')[0].getAttribute('data-original') || '',
                            label: item.children[1].textContent || '',
                            href: item.children[0].children[0].getAttribute('href') || '',
                            desc: item.children[2].textContent
                        }
                    })
                }
            }
        }
    }
    return {
        err: {
            code: 1,
            msg: '网络请求失败'
        }
    };
}
