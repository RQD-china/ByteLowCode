import { createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<any> = [{
        path: '/',
        component: () => import('../views/HomePage.vue'),
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})