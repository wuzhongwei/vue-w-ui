const base = process.env.NODE_ENV === 'production' ? '/wzw' : '';
const { resolve } = require('path');

module.exports = {
  title: 'WUI',
  description: 'WUI',
  // 扫描srcIncludes里面的 *.md文件
  srcIncludes: ['wui'],
  alias: {
    // 为了能在demo中正确的使用  import { X } from 'wzw'
    // [`wzw`]: resolve('./src'),
  },
  base,
  themeConfig: {
    // logo: '../logo.svg',
    nav: [{ text: 'demo', link: '/math' }],
    lang: 'zh-CN',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'WUI',
        description: 'WUI',
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
        title: 'WUI',
        description: 'WUI',
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
    prevLink: true,
    nextLink: true,
  },
};
