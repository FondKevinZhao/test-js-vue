<template>
  <div>
    <h2>我爱你赵丽颖</h2>
    <button>爱了{{ count }}次</button>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      count: 0,
    }
  },
}
/* 
  一个.vue文件通常我们是一个组件，但是本质是定义组件的配置对象(也就是非单文件中的那个配置对象)
*/
</script>
<style>
h2 {
  color: hotpink;
}
</style>