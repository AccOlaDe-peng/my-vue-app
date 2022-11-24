<!--
 * @description: 
 * @author: pengrenchang
 * @Date: 2022-11-24 13:53:04
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-24 17:31:20
-->
<script setup lang="ts">
import App from "./App.vue";
import { watch } from "vue";
import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { $ref } from "vue/macros";
const getPopupContainer = (el: any, dialogContext: any) => {
    console.log(dialogContext, el);

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
        <a-radio-group v-model:value="locale">
            <a-radio-button key="en" :value="enUS.locale"
                >English</a-radio-button
            >
            <a-radio-button key="cn" :value="zhCN.locale">中文</a-radio-button>
        </a-radio-group>
        <div>{{ locale }}</div>
    </a-config-provider>
</template>
