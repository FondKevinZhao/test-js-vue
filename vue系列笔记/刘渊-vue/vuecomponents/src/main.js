import Vue from 'vue';
import App from '@/App';
// 引入路由器
import router from './router/index.js'

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})