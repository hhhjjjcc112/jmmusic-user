import '@/assets/global.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "@/routes/index.js";
import colorStyle from "@/style/index.js";
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'


const app = createApp(App);
app.use(router)
app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
