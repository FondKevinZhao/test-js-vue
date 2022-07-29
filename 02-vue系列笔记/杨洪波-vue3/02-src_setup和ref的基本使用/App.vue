<template>
  <h2>setup 和 ref的基本使用</h2>
  <h3>{{ count }}</h3>
  <button @click="updateCount">更新数据</button>
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组件，内部可以传入一个配置对象
/* 
  ref()函数：
    - ref是一个函数，定义响应式的数据，返回的是一个ref对象，对象中有一个value属性，如果需要对数据进行操作，那就需要使用该ref对象调用value属性的方式进行数据的操作
    - 在html模板中是不需要使用.value属性的写法的
    - ref函数一般用来定义基本数据类型的响应式数据
*/

import { defineComponent, ref } from "vue";

// 需求：页面打开后可以直接看到一个数据，点击按钮后，该数据可以发生变化
export default defineComponent({
  name: "App",
  setup() {
    // 变量
    // let count = 0; // 此时的数据不是响应式的数据。(响应式数据：数据变化，页面跟这个渲染变化)
    let count = ref(0);
    function updateCount() {
      // count++; // 报错的原因：count是一个refimpl 对象。对象是不能进行++操作的
      count.value++;
    }
    return {
      count, // 属性
      updateCount, // 方法
    };
  },
});
</script>

