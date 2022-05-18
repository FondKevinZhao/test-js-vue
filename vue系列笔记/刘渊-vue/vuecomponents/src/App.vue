<template>
  <div>
    <button type="primary" @click="increment">点击加1</button>&nbsp;
    <button type="success" @click="decrement">点击减1</button>&nbsp;
    <button type="danger" @click="inrementIfOdd">点击如果是奇数加1</button>&nbsp;
    <!-- <button type="info" @click="inrementAsync">点击异步加1</button> -->
    <p>{{ $store.state.count }}</p>
  </div>
</template>

<script>
export default {
  name: "",
  // data() {
  //   return {
  //     // count: 0,
  //   };
  // },
  methods: {
    increment() {
      // this.count++;
      // dispatch 和 emit 很像，都是触发，分发的意思。这个dispatch是分发触发actions当中对应的方法
      this.$store.dispatch("increment");
    },
     decrement() {
      // this.count--;
      this.$store.dispatch('decrement');
    },
    inrementIfOdd() {
      if (this.count % 2 != 0) {
        this.count++;
      }
    },
    /* inrementAsync() {
      setTimeout(() => {
        this.count++;
      }, 1000);
    }, */
  },
};
</script>

<style>
</style>