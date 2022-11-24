<!--
 * @description: 
 * @author: pengrenchang
 * @Date: 2022-11-24 10:33:06
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-24 15:13:02
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import dayjs from "dayjs";
import { ref } from "vue";
import { $$, $ref } from "vue/macros";
const data = ref("");
let count = $ref(0);
console.log(count);
setInterval(() => {
    data.value = dayjs(`${new Date()}`).format("HH:mm:ss");
    count++;
}, 1000);
</script>

<template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>
    <div>{{ data }}</div>
    <div>{{ count }}</div>
    <div class="example">
        <a-pagination :total="50" show-size-changer />
    </div>
    <a-button type="primary">Primary Button</a-button>
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
