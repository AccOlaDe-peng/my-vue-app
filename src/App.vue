<!--
 * @description: 
 * @author: pengrenchang
 * @Date: 2022-11-24 10:33:06
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-24 18:42:42
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import dayjs from "dayjs";
import Layout from "./components/layout/index.vue";
import { ref } from "vue";
import { $ref } from "vue/macros";
const data = ref("");
let count = $ref(0);
console.log(count);
setInterval(() => {
    data.value = dayjs(`${new Date()}`).format("HH:mm:ss");
    count++;
}, 1000);
</script>

<template>
    <!-- <Layout collapsed="true" selectedKeys="[se]"> -->
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
