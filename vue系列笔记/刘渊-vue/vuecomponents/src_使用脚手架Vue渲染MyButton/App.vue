<template>
  <div>
    <MyButton></MyButton>
  </div>
</template>

<script>
// 这个@符，是初始化项目的时候，就自动配置好了的，可以直接使用
import MyButton from "@/components/MyButton";
export default {
  name: "",
  components: {
    MyButton,
  },
};
</script>

<style>
</style>