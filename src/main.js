import './assets/normalize.css'
import './assets/remAdapt.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import persist from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia.use(persist))
app.use(router)

app.mount('#app')
