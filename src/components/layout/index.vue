<!--
 * @description: 
 * @author: pengrenchang
 * @Date: 2022-11-24 18:10:12
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-25 18:08:36
-->
<script setup lang="ts">
// interface Props {

// }

import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { defineProps } from "vue";
import { $ref } from "vue/macros";

const collapsed = $ref<boolean>(true);
const selectedKeys = $ref<string[]>(["1"]);
const list = [
    {
        key: "1",
        title: "Option 1",
    },
    {
        key: "2",
        title: "Navigation 2",
        children: [
            {
                key: "2.1",
                title: "Navigation 3",
                children: [{ key: "2.1.1", title: "Option 2.1.1" }],
            },
        ],
    },
];

const props = withDefaults(
    defineProps<{
        logo?: string;
        title?: string;
    }>(),
    {
        title: "vue项目",
    }
);
</script>
<template>
    <a-layout style="min-height: 100vh">
        <a-layout-sider
            v-model:collapsed="collapsed"
            collapsible
            collapsedWidth="40"
            width="180"
        >
            <div
                :class="{
                    logo: true,
                    trigger: collapsed,
                    untrigger: !collapsed,
                }"
            >
                <img class="img" src="../../../public/vite.svg" alt="" />
                <span class="title">{{ props.title }}</span>
            </div>
            <a-menu
                v-model:selectedKeys="selectedKeys"
                theme="dark"
                mode="inline"
            >
                <template v-for="item in list" :key="item.key">
                    <template v-if="!item.children">
                        <a-menu-item :key="item.key">
                            <template #icon>
                                <PieChartOutlined />
                            </template>
                            {{ item.title }}
                        </a-menu-item>
                    </template>
                    <template v-else>
                        <sub-menu :key="item.key" :menu-info="item" />
                    </template>
                </template>
                <!-- <a-menu-item key="1">
                    <pie-chart-outlined />
                    <span>Option 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <desktop-outlined />
                    <span>Option 2</span>
                </a-menu-item>
                <a-sub-menu key="sub1">
                    <template #title>
                        <span>
                            <user-outlined />
                            <span>User</span>
                        </span>
                    </template>
                    <a-menu-item key="3">Tom</a-menu-item>
                    <a-menu-item key="4">Bill</a-menu-item>
                    <a-menu-item key="5">Alex</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <template #title>
                        <span>
                            <team-outlined />
                            <span>Team</span>
                        </span>
                    </template>
                    <a-menu-item key="6">Team 1</a-menu-item>
                    <a-menu-item key="8">Team 2</a-menu-item>
                </a-sub-menu>
                <a-menu-item key="9">
                    <file-outlined />
                    <span>File</span>
                </a-menu-item> -->
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
            </a-layout-header>
            <a-layout-content
                :style="{
                    margin: '24px 16px',
                    padding: '24px',
                    background: '#fff',
                    minHeight: '280px',
                }"
            >
                Content
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<style scoped>
.ant-layout.ant-layout-has-sider {
    height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

.logo {
    position: relative;
    display: flex;
    align-items: center;
    height: 64px;
    cursor: pointer;
    transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.trigger {
    padding: 16px 4px;
    flex: auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
}
.untrigger {
    padding: 16px 16px;
}
.img {
    margin-right: 10px;
}

.title {
    display: inline;
    color: #fff;
    height: 32px;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
}

.ant-pro-sider.ant-layout-sider-collapsed
    .ant-pro-sider-logo
    .site-layout
    .site-layout-background {
    background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
    background: #141414;
}
</style>
