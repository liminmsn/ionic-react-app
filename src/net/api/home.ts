import { NetBase } from "../NetBase";
export type HomeList = {
    title: string;
    list: {
        img: string | null;
        href: string | null;
        label: string;
        desc: string;
    }[];
}[];
/**返回首页列表 */
export async function home_list(): Promise<HomeList> {
    console.log('yzt_req_网络请求',);
    const res = await new NetBase('/').get(undefined);
    console.log('yzt', res);
    if (res.status == 200) {
        const dom = new DOMParser().parseFromString(res.data, 'text/html');
        const dom_list = dom.getElementById('index-main')!.getElementsByClassName('module-bg');
        return Array.from(dom_list).map(item => {
            const list_ = item.children[1].children[0].children;
            return {
                title: item.children[0].textContent,
                list: Array.from(list_).map(card => {
                    return {
                        img: card.children[0].children[0].children[0].getAttribute('data-original'),
                        href: card.children[0].children[0].getAttribute('href'),
                        label: card.children[1].textContent,
                        desc: card.children[2].textContent
                    };
                })
            }
        });
    }
    return []
}

