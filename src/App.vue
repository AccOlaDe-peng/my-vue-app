<!--
 * @description: 
 * @author: pengrenchang
 * @Date: 2022-11-24 10:33:06
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-25 16:30:49
-->
<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { ElConfigProvider } from 'element-plus'
import { useLocaleStore } from "./store/locale";
const localeStore = useLocaleStore();

const handleSizeChange = (val: number) =>  {
        console.log(`每页 ${val} 条`);
      }
     const  handleCurrentChange = (val: number) => {
        console.log(`当前页: ${val}`);
      }
      const currentPage1 = 1

</script>

<template>
    <el-config-provider :locale="zhCn">
        <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
    </el-config-provider>
</template>

<style scoped></style>
