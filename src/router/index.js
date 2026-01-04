import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";
import Home from "../views/Home.vue";
import HistoryPoke from "../views/HistoryPoke.vue";
import Team from "../views/Team.vue";

//create vue-router

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/history",
            name: "history",
            component: HistoryPoke
        },
        {
            path: "/team",
            name: "team",
            component: Team
        }

    ]
})

export default router;