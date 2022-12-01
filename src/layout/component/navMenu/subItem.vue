<!--
 * @description: 
 * @author: pengrenchang
 * @Date: 2022-11-30 18:08:22
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-12-01 15:14:31
-->
<template>
    <template v-for="(val, index) in children" :key="index">
        <el-submenu
            :index="resolvePath(val.path)"
            :key="val.path"
            v-if="val.children && val.children.length > 0"
        >
            <template #title>
                <CIcon :icon-class="val.meta.icon" />
                <span>{{ val.meta.title }}</span>
            </template>
            <SubItem
                :child="val.children"
                :parent-path="resolvePath(val.path)"
            />
        </el-submenu>
        <el-menu-item :index="resolvePath(val.path)" v-else>
            <template v-if="!val.meta.isLink">
                <CIcon :icon-class="val.meta.icon ? val.meta.icon : ''" />
                <span>{{ val.meta.title }}</span>
            </template>
            <template v-else>
                <a :href="val.meta.isLink" target="_blank">
                    <CIcon :icon-class="val.meta.icon ? val.meta.icon : ''" />
                    {{ val.meta.title }}
                </a>
            </template>
        </el-menu-item>
    </template>
</template>

<script lang="ts">
    export default {
        name: 'SubItem'
    }
</script>
<script setup lang="ts">
    import path from 'path'
    import { computed } from 'vue'
    import { Utils } from '../../../utils'
    import type { Menu } from '../../../store/type'

    const props = withDefaults(
        defineProps<{
            child: Menu[]
            parentPath: string
        }>(),
        {
            parentPath: ''
        }
    )
    // 获取父级菜单数据
    const children = computed(() => {
        return props.child
    })

    const resolvePath = (routePath: string) => {
        if (Utils.isExternal(routePath)) {
            return routePath
        }
        if (Utils.isExternal(props.parentPath)) {
            return props.parentPath
        }
        const respath = path.resolve(props.parentPath, routePath)
        return respath
    }
</script>
