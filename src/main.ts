import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/css/dark.css'

const pinia = createPinia()
const app = createApp(App)

app
    .use(pinia)
    .use(router)
    .mount('#app')

