import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
Vue.use(Vuex);

state = {
  isFirst: true,
  isLoading: false,
  errMsg: "",
  users: [], // 请求成功后 card 里面的数据
},

  mutations = {
    REQUESTING(state) {
      state.isFirst = false;
      state.isLoading = true;
    },
    REQUESTSUCCESS(state, users) {
      state.isLoading = false;
      // 这个users等会commit的时候传递过来
      state.users = users;
    },
    REQUESTFAILED(state, error) {
      state.isLoading = false;
      state.errMsg = error.message;
    }
  },

  actions = {
    async getSearchAjax({commit}, keyword) {
      // 修改页面显示的状态数据，为了让页面显示正在搜索
      // this.isFirst = false;
      // this.isLoading = true;
      commit('REQUESTING');
      try {
        const response = await axios({
          url: "https://api.github.com/search/users",
          method: "get",
          // query 参数的写法
          params: {
            q: keyword,
          },
        });

        // this.isLoading = false;
        let users = response.data.items.map((item) => ({
          // map函数会返回一个经过处理的新对象
          // 箭头函数中：对象外面再加一个对象，代表返回的是一个对象
          username: item.login,
          userurl: item.html_url,
          userimg: item.avatar_url,
        }));
        commit('REQUESTSUCCESS', users);
      } catch (error) {
        // this.isLoading = false;
        // this.errMsg = error.message;
        // console.log(error.message);
        commit('REQUESTFAILED', error);
      }
    }
  },

  getters = {

  }

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})