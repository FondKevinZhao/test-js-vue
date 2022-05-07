<template>
  <div>
    <!-- 头部 -->
    <Header></Header>

    <div class="container">
      <Add :addComment="addComment"></Add>
      <List :comments="comments"></List>
    </div>
  </div>
</template>

<script>
// 这个@符，是初始化项目的时候，就自动配置好了的，可以直接使用
import Header from "@/components/Header";
import Add from "@/components/Add";
import List from "@/components/List";

export default {
  name: "",
  components: {
    Header,
    Add,
    List
  },
  data() {
    return {
      comments: [
        {id: 1, content:'vue牛逼', username:'赵丽颖'},
        {id: 2, content:'vue可以', username:'杨幂'},
        {id: 3, content:'vue不错', username:'戚薇'},
      ]
    }
  },
  methods: {
    // 数据在哪个组件，操作数据的方法就应该在哪个组件
    
    addComment(comment) {
      this.comments.unshift(comment);
    }
  }
};
</script>

<style>
</style>