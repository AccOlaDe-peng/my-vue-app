/**
 * @description:
 * @author: pengrenchang
 * @Date: 2022-11-25 10:44:54
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-28 16:04:35
 */
import { defineStore } from 'pinia'

type localType = 'zh' | 'en'

export const usePermissionStore = defineStore('permissionStore', {
    state: () => ({ routeList: [], addRoutes: [] }),
    actions: {}
})
