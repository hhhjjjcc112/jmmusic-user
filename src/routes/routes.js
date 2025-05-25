import {createRouter, createWebHistory, useRouter} from "vue-router";
import MainPage from "@/pages/MainPage.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: MainPage,
    }
]

let router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router
