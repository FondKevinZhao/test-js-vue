// 这个Vue.config.js文件使我们手动添加的，在项目初识化的时候是没有的
module.exports = {
  // 关闭eslint的语法检查
  lintOnSave: false,
  // Vue.config.js中的更多配置，可以在vue.cli网站中查找：https://cli.vuejs.org/zh/config/

  // webpack的五个核心概念：可以看官网
  /* entry: '',
  output: {},
  module: { // loader配置
    rules: []
  }, 
  plugins: [],
  mode: 'production' or 'development' */

  // 配置代理服务器
  /* 
    本身的服务器：8080/api/users/info
    target：代表转发的目标服务器：4000/api/users/info
    pathRewrite: 4000/api/users/info 和真正的地方多了个/api，需要把/api剁掉
    changeOrigin：true。不管改变哪个跨域的条件(协议名，ip地址，端口号)，都会转发
  */
  devServer: {
    proxy: {
      "/api": {
        // target: "http://localhost:4000", http://localhost:4000/users/info
        target: "http://localhost:5000",
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    }
  }
}