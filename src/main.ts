/**
 * @description:
 * @author: pengrenchang
 * @Date: 2022-11-24 10:32:59
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-24 13:50:35
 */
import { createApp } from "vue";
import ConfigProvider from "./ConfigProvider.vue";
import "./style.css";

const app = createApp(ConfigProvider);
app.mount("#app");
