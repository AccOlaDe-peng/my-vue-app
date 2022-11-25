<!--
 * @description: 
 * @author: pengrenchang
 * @Date: 2022-11-24 10:33:06
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-25 16:30:49
-->
<script setup lang="ts">
import { $ref } from "vue/macros";
import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import Layout from "./components/layout/index.vue";
import { useLocalStore } from "./store/local";
const lang = useLocalStore();
const getPopupContainer = (el: any, dialogContext: any) => {
    if (dialogContext) {
        return dialogContext.getDialogWrap();
    } else {
        return document.body;
    }
};
</script>

<template>
    <a-config-provider
        :getPopupContainer="getPopupContainer"
        :locale="lang.local === 'en' ? enUS : zhCN"
    >
        <Layout />
    </a-config-provider>
</template>

<style scoped></style>
