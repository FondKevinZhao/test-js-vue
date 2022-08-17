<template>
  <div>
    <button type="primary" @click="increment">点击加1</button>&nbsp;
    <button type="success" @click="decrement">点击减1</button>&nbsp;
    <button type="danger" @click="inrementIfOdd">点击如果是奇数加1</button
    >&nbsp;
    <button type="info" @click="inrementAsync">点击异步加1</button>
    <p>$store.state.count的结果：{{ $store.state.count }}</p>
    <p>count的结果：{{ count }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: "",
  data() {
    return {
      // count: 0,
    };
  },
  // 如果是映射方法，无论是mapActions还是mapMutations的方法都映射到methods里面。
  // 如果是映射属性数据，无论是state的数据还是getters当中的方法，都映射到computed里面。
  computed: {
    // 映射后可以直接在页面上展示
    ...mapState(['count']), 
    // 也可以用计算属性来实现，看起来代码多一些
    /* count() {
      return this.$store.state.count;
    } */
  },
  // 简写一：
  methods: {
    // 简写版
    // 这个函数允许传递一个数组，当回调函数名字和actions当中方法名字一样的时候，才能传数组
    ...mapActions(['increment', 'decrement', 'inrementIfOdd', 'inrementAsync'])
    // 这个mapActions调用之后返回的是一个对象，这个对象如下：
    /* {
      increment() {
      // dispatch 和 emit 很像，都是触发，分发的意思。这个dispatch是分发触发actions当中对应的方法
        this.$store.dispatch("increment");
      },
      decrement() {
        this.$store.dispatch('decrement');
      },
      inrementIfOdd() {
        this.$store.dispatch('inrementIfOdd');
      },
      inrementAsync() {
        this.$store.dispatch('inrementAsync');
      },
    } */
  },

  // 简写二：
  // methods: mapActions(['increment', 'decrement', 'inrementIfOdd', 'inrementAsync'])
};
</script>

<style>
</style>