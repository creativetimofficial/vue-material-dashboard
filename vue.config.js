// vue.config.js
module.exports = {
  lintOnSave: true,
  devServer: {
  proxy: {
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
