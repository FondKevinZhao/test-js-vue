import Vue from 'vue';
import App from '@/App';
// 完整引入Element UI
import ElementUI from 'element-ui';
// 引入Element UI 中的 css
import 'element-ui/lib/theme-chalk/index.css';

// 使用 ElementUI
Vue.use(ElementUI);


Vue.config.productionTip = false;
new Vue({
  // 配置总线，就是把vm挂载到Vue的原型上，让所有的组件对象都能找到它，进而调用$on和$emit
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  el: '#app',
  render: h => h(App)
})