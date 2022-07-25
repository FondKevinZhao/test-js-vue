<template>
  <div class="row">
    <h2 v-if="isFirst">欢迎来搜索</h2>
    <h2 v-else-if="isLoading">正在搜索中...</h2>
    <h2 v-else-if="errMsg">请求失败 --- {{ errMsg }}</h2>
    <div class="card" v-else v-for="user in users" :key="user.url">
      <a :href="user.userurl" target="_blank">
        <img
          :src="user.userimg"
          style="width: 100px"
        />
      </a>
      <p class="card-text">{{ user.username}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: '',
  data() {
    return {
      isFirst: true,
      isLoading: false,
      errMsg: '',
      users: [] // 请求成功后 card 里面的数据
    }
  },
  mounted() {
    this.$bus.$on('searchAjax', this.getSearchAjax);
  },
  methods: {
    getSearchAjax(keyword) {
      // 修改页面显示的状态数据，为了让页面显示正在搜索
      this.isFirst = false;
      this.isLoading = true;
      // console.log('keyword',keyword);
      axios({
        url: 'https://api.github.com/search/users',
        method: 'get',
        // query 参数的写法
        params: {
          q: keyword
        }
      }).then(response => {
        this.isLoading = false;
        // console.log(response.data);
        this.users = response.data.items.map(item => ({
          // map函数会返回一个经过处理的新对象
          // 箭头函数中：对象外面再加一个对象，代表返回的是一个对象
          username: item.login,
          userurl: item.html_url,
          userimg: item.avatar_url
        }))
        
      }).catch(error => {
        this.isLoading = false;
        this.errMsg = error.message;
        console.log(error.message);
      })
    }
  }
};
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>