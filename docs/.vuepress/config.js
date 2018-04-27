const markdownParser = require('./markdownParser')
const path = require('path');
module.exports = {
  title: 'Vue Material Dashboard',
  base: '/vue-material-dashboard/documentation/',
  markdown: {
    config: markdownParser
  },
  configureWebpack: (config, isServer) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../../src')
  },
  head: [
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/icon?family=Material+Icons` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon.png' }]
  ],
  themeConfig: {
    sidebar: [
      '/component-docs/getting-started',
      '/component-docs/cards'
    ]
  }
};
