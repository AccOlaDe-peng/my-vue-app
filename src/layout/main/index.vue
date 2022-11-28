<!--
 * @description: 
 * @author: pengrenchang
 * @Date: 2022-11-28 14:03:03
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-28 15:39:17
-->
<template>
    <el-container class="layout-container">
        <Aside />
        <!-- <el-container class="flex-center layout-backtop">
            <Header v-if="isFixedHeader" />
            <el-scrollbar ref="layoutDefaultsScrollbarRef">
                <Header v-if="!isFixedHeader" />
                <MainView />
            </el-scrollbar> -->
        <!-- </el-container>  -->
        <el-backtop target=".layout-backtop"></el-backtop>
    </el-container>
</template>

<script setup lang="ts">
    import { computed, getCurrentInstance, watch } from 'vue'
    import { useRoute } from 'vue-router'
    import { useConfigStore } from '../../store/user'
    import Aside from '../component/aside.vue'
    // import Header from '../component/header.vue'
    // import MainView from '../component/mainView.vue'

    const { proxy } = getCurrentInstance() as any
    const configStore = useConfigStore()
    const route = useRoute()
    const isFixedHeader = computed(() => {
        return configStore.getUseConfigStore('isFixedHeader')
    })
    // 监听路由的变化
    watch(
        () => route.path,
        () => {
            proxy.$refs.layoutDefaultsScrollbarRef.wrap.scrollTop = 0
        }
    )
</script>
