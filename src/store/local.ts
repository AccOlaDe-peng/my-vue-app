/**
 * @description:
 * @author: pengrenchang
 * @Date: 2022-11-25 10:44:54
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-25 10:55:24
 */
import { defineStore } from "pinia";

type localType = "zh" | "en";

export const useLocalStore = defineStore("lang", {
    state: () => ({ local: "zh" }),
    actions: {
        setLocal(v: localType) {
            this.local = v;
        },
    },
});
