import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../src/views/HomePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/not-ready',
            component: () => import('../src/views/NotReady.vue')
        }
    ]
})

export default router