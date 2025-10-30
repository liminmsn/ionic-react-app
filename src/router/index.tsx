import { grid, home, time, wallet } from "ionicons/icons";
import Home from "../pages/Home";
import Grid from "../pages/Grid";
import Time from "../pages/Time";
import Wallet from "../pages/Wallet";

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

export function getRouterUrl(page: React.FC): string {
    return String('/').concat(page.name)
}
export default page_router;
