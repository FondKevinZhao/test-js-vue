<template>
  <div>
    <!-- 
      作用域插槽：
        1. 数据是由父组件传给子组件去展示的
        2. 子组件展示数据的过程当中，数据的结构是由父组件说了算。为什么？因为以后要用到的很多组件，不是我们自己封装的，比如说elementUI，在用别人的组件的时候，我们只需要拿到别人的数据过来展示就行，结构由elementUI说了算。
     -->

    <!-- 需求：如果是isOver为true的，前面有对勾，并且颜色是hotpink，如果没有为true的，原样显示 -->
    <ScopedChild :todos="todos">
      <!-- 写法一： 直接写接收到的对象 -->
      <template slot-scope="scopeProps">
        <span v-if="scopeProps.todo.isOver" style="color: hotpink"
          >√ {{ scopeProps.todo.content }}</span
        >
      </template>
      <!-- 写法二： 解构对象里面的属性 -->
      <!-- <template slot-scope="{ todo }">
        <span v-if="todo.isOver" style="color: hotpink"
          >√ {{ todo.content }}</span
        >
      </template> -->
    </ScopedChild>
  </div>
</template>

<script>
import Child from "@/components/Child.vue";
import ScopedChild from "@/components/ScopedChild.vue";
export default {
  name: "",
  components: {
    Child,
    ScopedChild,
  },
  data() {
    return {
      todos: [
        { id: 1, content: "抽烟", isOver: false },
        { id: 2, content: "喝酒", isOver: true },
        { id: 3, content: "烫头", isOver: false },
      ],
    };
  },
};
</script>

<style>
</style>