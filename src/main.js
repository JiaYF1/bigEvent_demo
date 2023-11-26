import { createApp } from 'vue'
import pinia from './store/index'
import App from './App.vue'
import router from './router'
import '@/assets/main.scss'
import mitt from 'mitt'

const app = createApp(App)

app.config.globalProperties.$bus = mitt()
app.use(pinia)
app.use(router)

app.mount('#app')
