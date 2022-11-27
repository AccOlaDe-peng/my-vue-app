<!--
 * @description: 
 * @author: pengrenchang
 * @Date: 2022-11-24 10:33:06
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-25 16:30:49
-->
<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import Layout from './components/layout/index.vue';
import { ElConfigProvider } from 'element-plus'
// import router, { setupRouter } from './router' // 路由
import { useLocaleStore } from "./store/locale";
const localeStore = useLocaleStore();

</script>

<template>
  <el-config-provider :locale="zhCn">
    <Layout />
  </el-config-provider>
</template>

<style scoped></style>
