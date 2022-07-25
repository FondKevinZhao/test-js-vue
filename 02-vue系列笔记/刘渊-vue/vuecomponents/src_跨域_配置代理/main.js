import Vue from 'vue';
import App from '@/App';

/* 
  事件总线使用三板斧：
    1. 在main.js中挂载
    2. 在App.vue中的mounted中写this.$bus.$on()，并且绑定一个事件。如：this.$bus.$on('deleteOne', this.deleteOne); 回调函数在谁里面，谁就是要接收数据。
    3. 在要传递参数的地方，调用这个方法并传递参数
*/

Vue.config.productionTip = false;
new Vue({
  // 配置总线，就是把vm挂载到Vue的原型上，让所有的组件对象都能找到它，进而调用$on和$emit
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  el: '#app',
  render: h => h(App)
})