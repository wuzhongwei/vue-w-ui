const base = process.env.NODE_ENV === 'production' ? '/wzw' : '';
const { resolve } = require('path');

module.exports = {
  title: 'wzw',
  description: 'wzw',
  // 扫描srcIncludes里面的 *.md文件
  srcIncludes: ['wui'],
  alias: {
    // 为了能在demo中正确的使用  import { X } from 'wzw'
    [`wzw`]: resolve('./src'),
  },
  base,
  themeConfig: {
    // logo: '../logo.svg',
    nav: [{ text: 'demo', link: '/math' }],
    lang: 'zh-CN',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'wzw',
        description: 'wzw',
        label: '中文',
        selectText: '语言',
        nav: [{ text: '指南', link: '/' }],
        sidebar: [
          { 
            text: 'Basic 基础组件', 
            children: [
              { text: 'Button', link: '/components/button/' },
              { text: 'Icon', link: '/components/icon/' },
            ]
          },
          
        ],
      },
      '/en/': {
        lang: 'en-US',
        title: 'wzw',
        description: 'wzw',
        label: 'English',
        selectText: 'Languages',
        nav: [{ text: 'Guide', link: '/' }],
        sidebar: [
          { text: 'Getting Started', link: '/en/' },
          { text: 'Button', link: '/en/components/button/' },
          { text: 'Icon', link: '/components/icon/' },
        ],
      },
    },
    search: {
      searchMaxSuggestions: 10,
    },
    repo: 'wzw/wzw',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
  },
};
