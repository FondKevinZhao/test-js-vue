<template>
  <div>
    <!-- 头部 -->
    <Header></Header>

    <div class="container">
      <!-- <Add></Add>组件：props写法 -->
      <!-- <Add :addComment="addComment"></Add> -->

      <!-- <Add></Add>组件：自定义事件写法一： 看mounted中的内容 -->
      <!-- <Add ref="aa"></Add> -->

      <!-- <Add></Add>组件：自定义事件写法二： 看mounted中的内容 -->
      <!-- 注意：自定义事件这种写法要用@符开头 -->
      <!-- <Add @addComment="addComment"></Add> -->

      <!-- <Add></Add>组件：自定义事件写法三： 不用看mounted中的内容(和mounted无关)，App.vue中直接这行代码 + methods中的函数就OK -->
      <Add @addComment="addComment"></Add>


      <List :comments="comments" :deleteComment="deleteComment"></List>
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
    List,
  },
  data() {
    return {
      comments: [
        { id: 1, content: "vue牛逼", username: "赵丽颖" },
        { id: 2, content: "vue可以", username: "杨幂" },
        { id: 3, content: "vue不错", username: "戚薇" },
      ],
    };
  },
  /* mounted() {
    // 为Add组件对象绑定自定义事件：方法一组件的写法：
    // this.$refs.aa.$on("addComment", this.addComment);

    // 为Add组件对象绑定自定义事件：方法二组件的写法：方法二这个mounted里其实没必要写
    this.$on("addComment", this.addComment);
  }, */
  methods: {
    // 数据在哪个组件，操作数据的方法就应该在哪个组件
    // 添加评论
    addComment(comment) {
      this.comments.unshift(comment);
    },

    // 删除评论
    /* 
      删除评论有两种做法：
        1. 下标法，直接传过来下标，这边根据下标来删除。如：this.comments.splice(index, 1);
        2. id法：
          - 根据id找到要删除的是哪个元素
          - 再用数组的方法删除这个元素
    */
    deleteComment(index) {
      this.comments.splice(index, 1);
    },
  },
};
</script>

<style>
</style>