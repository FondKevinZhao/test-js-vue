<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <!-- 先遍历List接收到的数组，然后把遍历完的结果通过:comment='comment'传递给Item组件 -->
      <Item v-for="(comment, index) in comments" :key="comment.id" :comment='comment'></Item>
    </ul>
  </div>
</template>

<script>
import Item from "@/components/Item";

export default {
  name: "",
  components: {
    Item,
  },
  props: ["comments"], // 声明接收属性名(通过属性名去获取属性值)，不是直接拿到属性值
};
</script>

<style>
.reply {
  margin-top: 0px;
}
</style>