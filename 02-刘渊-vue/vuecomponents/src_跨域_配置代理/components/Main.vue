<template>
  <div class="row">
    <h2 v-if="isFirst">欢迎来搜索</h2>
    <h2 v-else-if="isLoading">正在搜索中...</h2>
    <h2 v-else-if="errMsg">请求失败 --- {{ errMsg }}</h2>
    <div class="card" v-else v-for="user in users" :key="user.url">
      <a :href="user.userurl" target="_blank">
        <img :src="user.userimg" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.username }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  data() {
    return {
      isFirst: true,
      isLoading: false,
      errMsg: "",
      users: [], // 请求成功后 card 里面的数据
    };
  },
  mounted() {
    this.$bus.$on("searchAjax", this.getSearchAjax);
  },
  methods: {
    async getSearchAjax() {
      try {
        const response = await axios({
          // 自己写的服务器地址，会形成跨域，要在vue.config.js的devServer中的proxy中去解决
          url: "http://localhost:8080/api/users/info",
          method: "get"
        });
        // 能打印代表成功
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
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