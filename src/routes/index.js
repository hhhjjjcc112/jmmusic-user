import {createRouter, createWebHistory, useRouter} from "vue-router";

const index = [
    {
        path: "/",
        name: "home",
        component: () => import('@/pages/MainPage.vue'),
    },
    {
        path: "/login",
        name: "login",
        component: () => import('@/pages/Login.vue'),
    },
    {
        path: "/register",
        name: "register",
        component: () => import('@/pages/Register.vue'),
    },
    {
        path: "/profile",
        name: "profile",
        component: () => import('@/pages/Profile.vue'),
    },
    {
        path: "/songlists",
        name: "songlists",
        component: () => import('@/pages/SongLists.vue'),
    },
    {
        path: "/settings",
        name: "settings",
        component: () => import('@/pages/Settings.vue'),
    },
    {
        path: "/singers",
        name: "singers",
        component: () => import('@/pages/Singer.vue'),
    },
    {
        path: "/collections",
        name: "collections",
        component: () => import('@/pages/Collections.vue'),
    },
    {
        path: "/singer/:id",
        name: "singer-info",
        component: () => import('@/pages/SingerInfo.vue'),
    },
    {
        path: "/songlist/:id",
        name: "songlist-info",
        component: () => import('@/pages/SongListInfo.vue'),
    },
    {
        path: "/search",
        name: "search",
        component: () => import('@/pages/SearchResult.vue'),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import('@/pages/NotFound.vue'),
    },

]

let router = createRouter({
    history: createWebHistory(),
    routes: index,
})


export default router
