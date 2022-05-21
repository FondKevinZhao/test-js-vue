import Vue from 'vue'
// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';
Vue.use(VueRouter)
// 引入组件
import About from '../components/About';
import Home from '../components/Home';

// 创建并暴露一个路由器
export default new VueRouter({
  routers: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
