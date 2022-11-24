<!--
 * @description: 
 * @author: pengrenchang
 * @Date: 2022-11-24 13:53:04
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-24 17:53:11
-->
<script setup lang="ts">
import App from "./App.vue";
import { watch } from "vue";
import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { $ref } from "vue/macros";
const getPopupContainer = (el: any, dialogContext: any) => {
    if (dialogContext) {
        return dialogContext.getDialogWrap();
    } else {
        return document.body;
    }
};
const locale = $ref(zhCN.locale);
watch(
    () => locale,
    (newVal) => {
        console.log(newVal);
    }
);
</script>
<template>
    <a-config-provider
        :getPopupContainer="getPopupContainer"
        :locale="locale === 'en' ? enUS : zhCN"
    >
        <App />
    </a-config-provider>
</template>
