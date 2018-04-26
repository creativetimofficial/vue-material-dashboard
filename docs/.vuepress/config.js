const markdownParser = require('./markdownParser')
const path = require('path');
module.exports = {
  markdown: {
    config: markdownParser
  },
  configureWebpack: (config, isServer) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../../src')
  },
  head: [
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/icon?family=Material+Icons` }]
  ],
  themeConfig: {
    sidebar: [
      '/',
      '/component-docs/cards'
    ]
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'cards'
      ]
    }
  ]
}
