import HyDiscover from "../pages/discover"
import HYFriend from "../pages/friend"
import HYMine from "../pages/mine"

const routes = [
    {
        path: '/',
        component: HyDiscover,
        exact:true
    },
    {
        path: '/friend',
        component: HYFriend
    },
    {
        path: '/mine',
        component: HYMine
    }
]

export default routes