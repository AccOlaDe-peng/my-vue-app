/**
 * @description:
 * @author: pengrenchang
 * @Date: 2022-11-24 10:32:59
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-25 11:06:47
 */
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "./style.less";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
