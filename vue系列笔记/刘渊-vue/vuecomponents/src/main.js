import Vue from 'vue';
import App from '@/App';
import store from '@/store';
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
  store, // 将store对象在配置对象当中配置使用，每个组件对象当中都可以通过this.$store获取到我们的这个对象
  el: '#app',
  render: h => h(App)
})