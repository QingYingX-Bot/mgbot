/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '友链', link: '/friends/' },
  {
    text: '关于',
    items: [
      { text: '隐私政策', link: '/privacy/' },
      { text: '服务条款', link: '/terms/' }
    ]
  },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Friends', link: '/en/friends/' },
  {
    text: 'About',
    items: [
      { text: 'Privacy Policy', link: '/en/privacy/' },
      { text: 'Terms of Service', link: '/en/terms/' }
    ]
  },
])

