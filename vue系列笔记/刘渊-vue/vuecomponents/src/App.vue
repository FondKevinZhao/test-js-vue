<template>
  <div>
    <el-button type="primary" @click="increment">点击加1</el-button>
    <el-button type="success" @click="decrement">点击减1</el-button>
    <el-button type="danger" @click="inrementIfOdd">点击如果是奇数加1</el-button>
    <el-button type="info" @click="inrementAsync">点击异步加1</el-button>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    inrementIfOdd() {
      if (this.count % 2 != 0) {
        this.count++;
      }
    },
    inrementAsync() {
      setTimeout(() => {
        this.count++;
      }, 1000);
    },
  },
};
</script>

<style>
</style>