/**
 * @description:
 * @author: pengrenchang
 * @Date: 2022-11-24 10:30:28
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-28 14:08:04
 */
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const resolve = (dir: string) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({ reactivityTransform: true }),
        vueJsx(),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        })
    ],
    resolve: {
        alias: {
            '@': resolve('src'),
            '@comps': resolve('src/components'),
            views: resolve('src/views'),
            '@/store': resolve('src/store'),
            router: resolve('src/router'),
            styles: resolve('src/styles')
        }
    }
})
