/**
 * @description:
 * @author: pengrenchang
 * @Date: 2022-11-28 13:40:27
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-28 16:07:55
 */

import { defineComponent } from 'vue'
type Component<T extends any = any> =
    | ReturnType<typeof defineComponent>
    | (() => Promise<typeof import('*.vue')>)
    | (() => Promise<T>)

interface RouteMeta {
    auth: string[]
    icon: string
    isLink?: string
    isAffix: boolean
    isHide: boolean
    isKeepAlive: boolean
    title: string
    index?: string | number
    roles?: string[]
    noCache?: boolean
}

// 布局配置
export interface UserConfigState {
    isCollapse: boolean
    isBreadcrumb: boolean
    isFixedHeader: boolean
    isShowLogo: boolean
    isBreadcrumbIcon: boolean
    isShowLogoChange: boolean
    isCacheTagsView: boolean
    isUniqueOpened: boolean
    isTagsviewIcon: boolean
    globalTitle: string
    animation: string
    layout: string
    menuBar: string
}

export interface permissionListState {
    routeList: Array<any>
    addRoutes: Array<any>
}

export interface Menu {
    name: string

    path: string

    orderNo?: number

    query?: Partial<Recordable> | undefined

    meta: Partial<RouteMeta>
    component?: Component | string
    children?: Menu[]
}
