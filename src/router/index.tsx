import { grid, home, time, wallet } from "ionicons/icons";
import Home from "../pages/Home";
import Grid from "../pages/Grid";
import Time from "../pages/Time";
import Wallet from "../pages/Wallet";
import { NavContextState } from "@ionic/react";
import JLDetail from "@/pages_sub/JL_Detail";

type PageRouterItem = {
    label: string;
    icon: string;
    page: React.FC;
}
type PageRouter = PageRouterItem[];
const page_router: PageRouter = [
    {
        label: '首页',
        icon: home,
        page: Home
    },
    {
        label: '分类',
        icon: grid,
        page: Grid
    },
    {
        label: '收藏&历史',
        icon: time,
        page: Time
    },
    {
        label: '订阅',
        icon: wallet,
        page: Wallet
    }
]

const page_sub_router: { path: string, page: React.FC }[] = [
    {
        path: '/detail*',
        page: JLDetail
    }
]

// 跳转详情页逻辑
export const goTo = (nav: NavContextState, path: string, item: object) => {
    nav.navigate(
        path.concat(`?time=${Date.now()}`),
        'forward',
        'push',
        undefined,
        { item }
    );
};
export function getRouterUrl(page: React.FC): string {
    return String('/').concat(page.name)
}
export { page_sub_router }
export default page_router;
