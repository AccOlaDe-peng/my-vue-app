/**
 * @description:
 * @author: pengrenchang
 * @Date: 2022-11-25 10:44:54
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-28 15:53:07
 */
import { defineStore } from 'pinia'
import { UserConfigState } from './type'

export const useConfigStore = defineStore('configStore', {
    state: () => ({
        config: {
            /*  --------- 界面设置  --------- */
            // 网站主标题（菜单导航、浏览器当前网页标题）
            globalTitle: 'Data Manage',
            // 是否开启侧边栏 Logo
            isShowLogo: true,
            // 是否开启菜单水平折叠效果
            isCollapse: false,
            // 是否开启 Breadcrumb
            isBreadcrumb: true,
            // 是否开启 Breadcrumb 图标
            isBreadcrumbIcon: true,
            // 是否开启固定 Header
            isFixedHeader: false,
            // 默认主页面切换动画，可选 1、 slide-right 2、 slide-left 3、 opacitys
            animation: 'slide-right',
            // 默认布局，可选 1、默认 defaults 2、经典 classic 3、横向 transverse 4、分栏 columns
            layout: 'defaults',
            // 初始化变量，用于 el-scrollbar 的高度更新，请勿删除
            isShowLogoChange: false,
            // 默认菜单导航背景颜色，请注意：需要同时修改 `/@/theme/common/var.scss` 对应的值
            menuBar: '#545c64',
            // 是否开启 TagsView 缓存
            isCacheTagsView: true,
            // 是否开启菜单手风琴效果
            isUniqueOpened: true,
            // 是否开启 Tagsview 图标
            isTagsviewIcon: false
        }
    }),
    actions: {
        getUseConfigStore<K extends keyof UserConfigState>(name?: K) {
            if (name) {
                return this.config[name]
            } else {
                return this.config
            }
        }
    }
})
