import {createRouter, createWebHistory, useRouter} from "vue-router";
import MainPage from "@/pages/MainPage.vue";

const index = [
    {
        path: "/",
        name: "home",
        component: MainPage,
    }
]

let router = createRouter({
    history: createWebHistory(),
    routes: index,
})


export default router
