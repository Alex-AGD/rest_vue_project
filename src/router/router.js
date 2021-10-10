import Home from "@/views/Home";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/home",
        component: () => import ('../views/Welcome.vue')
    },
    {
        path: "/users",
        component: () => import ('../views/UserList.vue')
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export  default router;