/**
 * @description:
 * @author: pengrenchang
 * @Date: 2022-11-25 10:44:54
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-25 10:55:24
 */
import { defineStore } from 'pinia'

type localType = 'zh' | 'en'

export const useLocaleStore = defineStore('localeStore', {
    state: () => ({ locale: 'zh' }),
    actions: {
        setLocal(v: localType) {
            this.locale = v
        }
    }
})
