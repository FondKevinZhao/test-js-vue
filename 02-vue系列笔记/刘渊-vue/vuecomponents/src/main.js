import Vue from 'vue';
import App from '@/App';
// 引入VueRouter
import VueRouter from 'vue-router'
// 应用插件
Vue.use(VueRouter);
// 引入路由器
import router from './router/index.js'

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})