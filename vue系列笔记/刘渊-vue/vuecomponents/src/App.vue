<template>
  <div>
    <!-- 头部 -->
    <Header></Header>

    <div class="container">
      <Add></Add>
      <List></List>
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
};
</script>

<style>
</style>