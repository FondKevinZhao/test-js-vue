// 1. 安装：npm i vuex -S 安装的时候要注意vuex的版本，我刚才就是因为版本问题导致内容结果出不来，现在OK了。
// 2. 引入并声明使用vuex插件
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// state是一个包含多个属性(不是方法)的对象，其实就是用来存储数据用的
const state = {
  count: 0,
}

// mutations也是一个对象，是一个包含了多个方法的对象，其实就是用这个里面的方法去直接操作数据的
// 这个里面的方法不能包含 if判断、for循环、异步，这个方法是直接操作的
const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  }
}

// actions也是一个对象，是一个包含了多个方法的对象，这个对象内部的方法是用来和vue当中用户的操作去关联的
// 这个里面的方法可以包含 if判断、for循环、异步
const actions = {
  // context 上下文对象，本质其实就是你暴露的store对象，也可以写成{commit}
  increment(context) {
    context.commit('increment'); // 这个 increment 是mutations当中的increment
  },
  decrement({commit}) {
    commit('decrement');
  }
}

// getters 也是一个对象，也是一个包含了多个方法的对象，这个对象内部的每个方法对应了一个计算属性的get
// 就是通过state当中的已有数据计算出来的一个新的想要使用的属性数据
const getters = {

}

// 3. 向外暴露一个store的实例化对象
export default new Vuex.Store({
  // 包含了6个核心概念，现在咱们讲4个
  state,
  mutations,
  actions,
  getters
})