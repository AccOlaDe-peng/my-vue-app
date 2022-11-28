<!--
 * @description: 
 * @author: pengrenchang
 * @Date: 2022-11-28 14:02:14
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-28 17:16:05
-->
<template>
    <div class="layout-logo" v-if="!setShowLogo" @click="goHome">
        <img src="@/assets/logo.png" class="layout-logo-medium-img" />
        <span>{{ getThemeConfig.globalTitle }}</span>
    </div>
    <div class="layout-logo-size" v-else @click="onThemeConfigChange">
        <img src="@/assets/logo.png" class="layout-logo-size-img" />
    </div>
</template>

<script setup lang="ts">
    import { computed, getCurrentInstance } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import { useConfigStore } from '../../../store/user'
    const configStore = useConfigStore()

    const { proxy } = getCurrentInstance() as any
    const router = useRouter()
    // 获取布局配置信息
    const getThemeConfig = computed(() => {
        return configStore.config
    })
    // 设置显示/隐藏 logo
    const setShowLogo = computed(() => {
        return configStore.getUseConfigStore('isCollapse')
    })
    // logo 点击实现菜单展开/收起
    const onThemeConfigChange = () => {
        if (configStore.getUseConfigStore('layout') === 'transverse')
            return false
        // proxy.mittBus.emit('onMenuClick');
        configStore.config['isCollapse'] = !configStore.config['isCollapse']
    }
    //回到首页
    const goHome = () => {
        router.push('/home')
    }
</script>

<style scoped lang="scss">
    .layout-logo {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: rgb(0 21 41 / 2%) 0px 1px 4px;
        color: var(--color-whites);
        font-size: 16px;
        cursor: pointer;
        animation: logoAnimation 0.3s ease-in-out;
        background: var(--bg-aside-top);
        &:hover {
            span {
                color: var(--color-primary-light-2);
            }
        }
        &-medium-img {
            width: 20px;
            margin-right: 5px;
        }
    }
    .layout-logo-size {
        width: 100%;
        height: 50px;
        display: flex;
        cursor: pointer;
        animation: logoAnimation 0.3s ease-in-out;
        &-img {
            width: 20px;
            margin: auto;
        }
        &:hover {
            img {
                animation: logoAnimation 0.3s ease-in-out;
            }
        }
    }
</style>
