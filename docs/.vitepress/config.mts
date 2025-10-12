import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "冬青の前端工作台",
  description: "holyer-frontend workspaces",
  base: '/holyer-frontend/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/holyer-frontend/static/logo.svg' }]
  ],
  themeConfig: {
    search: {
      provider: 'local'
    }, 
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/static/logo.svg', width: 24, height: 24 },

    nav: [
      { text: '首页', link: '/' },
      { text: '基础篇', link: '/pages/base/html', activeMatch: '/pages/base/' },
    ],

    sidebar: [
      {
        text: '基础篇',
        collapsed: false,
        base: '/pages/base/',
        items: [
          { text: 'HTML基础', link: 'html' },
          { text: 'CSS基础', link: 'css' },
          { text: 'JavaScript基础', link: 'javascript' },
          { text: '浏览器', link: 'browser' },
          { text: 'Git', link: 'git' },
        ]
      },

      {
        text: '进阶篇',
        collapsed: false,
        base: '/pages/advanced/',
        items: [
          { text: 'HTML进阶问题', link: 'html' },
          { text: 'CSS进阶问题', link: 'css' },
          { text: 'JavaScript进阶问题', link: 'javascript' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/qlhuo' }
    ],

    footer: {
      copyright: 'Copyright © 2025-present @Holyer'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    outline: {
      label: '目录',
      level: [1, 6],
    },

    lastUpdated: {
      text: '最后更新于'
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'
  },
})
