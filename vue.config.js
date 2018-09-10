// vue.config.js
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/static/'
    : '/',
  lintOnSave: true,
  devServer: {
  proxy: {
    '/api':{
      changeOrigin: true,  //是否跨域
      secure: false,
      target: 'http://172.16.0.240:8080'
      // target: 'http://localhost:3500/'
    },
    '/filelist':{
      changeOrigin: true,  //是否跨域
      secure: false,
      target: 'http://localhost:3500/'
    },
    '/filelist':{
      changeOrigin: true,  //是否跨域
      secure: false,
      target: 'http://localhost:3500/'
    },
    '/filepdpinfo':{
      changeOrigin: true,  //是否跨域
      secure: false,
      target: 'http://localhost:3500/'
    },
    '/upload':{
      changeOrigin: true,  //是否跨域
      secure: false,
      target: 'http://192.168.200.188:8080/'
    },
     // '/filelist':{
     //   changeOrigin: true,  //是否跨域
     //   secure: false,
     //   target: 'http://192.168.200.188:8080/'
     // },
     // '/upload':{
     //   changeOrigin: true,  //是否跨域
     //   secure: false,
     //   target: 'http://192.168.200.188:8080/'
     // },
     '/abc':{
       changeOrigin: true,  //是否跨域
       secure: false,
       target: 'http://localhost:3500/'
     },

  },
  }
}
