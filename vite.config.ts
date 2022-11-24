/**
 * @description:
 * @author: pengrenchang
 * @Date: 2022-11-24 10:30:28
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-24 13:45:51
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({ reactivityTransform: true }),

        Components({
            resolvers: [AntDesignVueResolver()],
        }),
    ],
});
