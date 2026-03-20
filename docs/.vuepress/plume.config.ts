/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import { defineThemeConfig } from 'vuepress-theme-plume'
import { enCollections, zhCollections } from './collections'
import { enNavbar, zhNavbar } from './navbar'

/**
 * @see https://theme-plume.vuejs.press/config/theme/
 */
export default defineThemeConfig({
  logo: '/xmg.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'qq', link: 'https://qm.qq.com/q/QO3auCaOAQ', ariaLabel: 'QQ' },
  ],
  navbarSocialInclude: ['qq'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 - 全局默认（如果 locales 中没有配置则使用此项） */
  // footer: {
  //   message: '',
  //   copyright: 'Copyright © 2024 QingYingX(HInXe) | 米糕已不稳定运行 <span id="runtime"></span>',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/theme/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

  locales: {
    '/': {
      /**
       * @see https://theme-plume.vuejs.press/config/theme/#profile
       */
      profile: {
        avatar: '/xmg.png',
        name: 'XiaoMiGao',
        description: '米糕糕~',
        circle: true,
      },

      navbar: zhNavbar,
      collections: zhCollections,

      /* 中文页脚 */
      footer: {
        message: '',
        copyright: 'Copyright © 2024-2026 QingYingX(HInXe) | 米糕已不稳定运行 <span id="runtime"></span>',
      },

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
       bulletin: {
         layout: 'top-right',
         contentType: 'markdown',
         title: '公告~',
         content: `- QQ 米糕被封咯~
- 请前往 Telegram 或者 Discord 使用
         `,
       },
    },
    '/en/': {
      /**
       * @see https://theme-plume.vuejs.press/config/theme/#profile
       */
      profile: {
        avatar: '/xmg.png',
        name: 'XiaoMiGao',
        description: '米糕糕~',
        circle: true,
      },

      navbar: enNavbar,
      collections: enCollections,

      /* 英文页脚 */
      footer: {
        message: '',
        copyright: 'Copyright © 2024-2026 QingYingX(HInXe) | MiGao has been running unstably for <span id="runtime"></span>',
      },

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
       bulletin: {
         layout: 'top-right',
         contentType: 'markdown',
         title: 'Announcement',
         content: `- QQ MiGao Banned!
- Please go to Telegram or Discord to use it.
         `,
       },
    },
  },
})
