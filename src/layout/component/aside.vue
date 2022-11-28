<template>
    <el-aside
        class="layout-aside"
        :class="setCollapseWidth"
        v-if="state.clientWidth > 1000"
    >
        <Logo v-if="setShowLogo" />
        <el-scrollbar
            class="flex-auto"
            ref="layoutAsideScrollbarRef"
            style="background: rgb(48, 65, 86)"
        >
            <SubBar :menuList="state.menuList" :class="setCollapseWidth" />
        </el-scrollbar>
    </el-aside>
    <el-drawer
        v-model="isCollapse"
        :with-header="false"
        direction="ltr"
        size="220px"
        v-else
    >
        <el-aside class="layout-aside w100 h100">
            <Logo v-if="setShowLogo" />

            <el-scrollbar class="flex-auto" ref="layoutAsideScrollbarRef">
                <SubBar :menuList="state.menuList" />
            </el-scrollbar>
        </el-aside>
    </el-drawer>
</template>

<script setup lang="ts">
    import {
        ref,
        toRefs,
        reactive,
        computed,
        watch,
        getCurrentInstance,
        onBeforeMount,
        onUnmounted
    } from 'vue'
    import { Menu } from '../../store/type'
    import { useConfigStore } from '../../store/user'
    import { usePermissionStore } from '../../store/permission'
    import Logo from './logo/index.vue'
    import SubBar from './navMenu/subBar.vue'

    const { proxy } = getCurrentInstance() as any
    const permissionStore = usePermissionStore()
    const configStore = useConfigStore()
    const state = reactive<{
        menuList: Menu[]
        clientWidth: number | string
    }>({
        menuList: [],
        clientWidth: ''
    })

    // 获取布局配置信息
    const isCollapse = computed(() => {
        return configStore.getUseConfigStore('isCollapse')
    })

    // 设置显示/隐藏 logo
    const setShowLogo = computed(() => {
        let { layout, isShowLogo } = configStore.config
        return (
            (isShowLogo && layout === 'defaults') ||
            (isShowLogo && layout === 'columns')
        )
    })

    // 设置菜单导航是否固定（移动端）
    const initMenuFixed = (clientWidth: number) => {
        state.clientWidth = clientWidth
    }

    const setCollapseWidth = computed(() => {
        let { layout, isCollapse, menuBar } = configStore.config
        let asideBrColor =
            menuBar === '#FFFFFF' ||
            menuBar === '#FFF' ||
            menuBar === '#fff' ||
            menuBar === '#ffffff'
                ? 'layout-el-aside-br-color'
                : ''
        if (layout === 'columns') {
            // 分栏布局，菜单收起时宽度给 1px
            if (isCollapse) {
                return ['layout-aside-width1', asideBrColor]
            } else {
                return ['layout-aside-width-default', asideBrColor]
            }
        } else {
            // 其它布局给 64px
            if (isCollapse) {
                return ['layout-aside-width64', asideBrColor]
            } else {
                return ['layout-aside-width-default', asideBrColor]
            }
        }
    })

    // 设置/过滤路由（非静态路由/是否显示在菜单中）
    const setFilterRoutes = () => {
        // state.menuList = filterRoutesFun(store.state.routesList.routesList)
        const perRlist = permissionStore.routeList
        state.menuList = filterRoutesFun(perRlist)
    }

    // 路由过滤递归函数
    const filterRoutesFun = (arr: Menu[]): Menu[] => {
        return arr
            .filter((item: Menu) => item.meta && !item.meta.isHide)
            .map((item: Menu) => {
                item = Object.assign({}, item)
                if (item.children)
                    item.children = filterRoutesFun(item.children)
                return item
            })
    }

    // 监听 themeConfig 配置文件的变化，更新菜单 el-scrollbar 的高度
    watch(
        () => configStore.config,
        (val) => {
            if (val.isShowLogoChange !== val.isShowLogo) {
                if (!proxy.$refs.layoutAsideScrollbarRef) return false
                proxy.$refs.layoutAsideScrollbarRef.update()
            }
        }
    )

    // 页面加载前
    onBeforeMount(() => {
        initMenuFixed(document.body.clientWidth)
        setFilterRoutes()
        proxy.mittBus.on('layoutMobileResize', (res: any) => {
            initMenuFixed(res.clientWidth)
        })
    })

    // 页面卸载时
    onUnmounted(() => {})
</script>
