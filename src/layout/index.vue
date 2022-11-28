<!--
 * @description: 
 * @author: pengrenchang
 * @Date: 2022-11-28 13:47:46
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-28 15:37:53
-->
<template>
    <div class="app-wrapper">
        <component :is="layout" />
    </div>
</template>

<script setup lang="ts">
    import {
        defineComponent,
        computed,
        onBeforeMount,
        onUnmounted,
        getCurrentInstance
    } from 'vue'
    import { useConfigStore } from '../store/user'
    import Defaults from './main/index.vue'
    import { Utils } from '../utils/index'

    const { proxy } = getCurrentInstance() as any
    const configStore = useConfigStore()
    const layout =
        configStore.getUseConfigStore('layout') == 'defaults' ? Defaults : null
    // const getThemeConfig = computed(() => {
    //     return store.state.themeConfig
    // })

    // 窗口大小改变时(适配移动端)
    // const onLayoutResize = () => {
    //     const clientWidth = document.body.clientWidth
    //     if (clientWidth < 1000) {
    //         getThemeConfig.value.isCollapse = false
    //         proxy.mittBus.emit('layoutMobileResize', {
    //             layout: 'defaults',
    //             clientWidth
    //         })
    //     } else {
    //         proxy.mittBus.emit('layoutMobileResize', {
    //             layout: 'defaults',
    //             clientWidth
    //         })
    //     }
    // }
    // 页面加载前
    onBeforeMount(() => {
        // onLayoutResize()
        // window.addEventListener(
        //     'resize',
        //     Utils.debounce(() => onLayoutResize(), 300, false)
        // )
    })

    // 页面卸载时
    onUnmounted(() => {
        // window.removeEventListener(
        //     'resize',
        //     Utils.debounce(() => onLayoutResize(), 300, false)
        // )
    })

    // return {
    //     layout,
    //     getThemeConfig
    // }
</script>

<style lang="scss" scoped>
    .app-wrapper {
        position: relative;
        height: 100%;
        width: 100%;
        :deep(.layout-aside-width-default) {
            width: 200px !important;
        }
    }
</style>
