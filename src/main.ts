/**
 * @description:
 * @author: pengrenchang
 * @Date: 2022-11-24 10:32:59
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-25 11:06:47
 */
import App from './App'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router, { setupRouter } from './router'
import './styles/index.scss'

const app = createApp(App)

const pinia = createPinia()

setupRouter(app) // 引入路由

app.use(pinia)

router.isReady().then(() => {
    app.mount('#app')
})
