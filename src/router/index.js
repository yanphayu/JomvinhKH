import { createRouter, createWebHistory } from 'vue-router'
import ViewView from '../layouts/ViewView.vue'
import HomeView from '../layouts/HomeView.vue'

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/view',
        component: ViewView
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})