import { defineClientConfig } from 'vuepress/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// import CustomComponent from './theme/components/Custom.vue'

import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    // built-in components
    // app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`

    // your custom components
    // app.component('CustomComponent', CustomComponent)
  },
  setup() {
    // 运行时间倒计时
    if (typeof window !== 'undefined') {
      const updateRunTime = () => {
        const startTime = new Date('2024-06-27 19:01:00').getTime()
        const now = new Date().getTime()
        const diff = now - startTime

        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)

        const runtimeEl = document.getElementById('runtime')
        if (runtimeEl) {
          runtimeEl.textContent = `${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`
        }
      }

      // 初始更新
      setTimeout(updateRunTime, 100)
      // 每秒更新
      setInterval(updateRunTime, 1000)
    }
  },
})
