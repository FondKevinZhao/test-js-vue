<template>
  <div>
    <Child>
      <!-- 通过插槽传东西给儿子，要加template -->
      <template>
        <button>点我</button>
      </template>
    </Child>

    <Child>
      <!-- 通过插槽传东西给儿子，要加template -->
      <template>
        <p>pp</p>
      </template>
    </Child>
  </div>
</template>

<script>
import Child from '@/components/Child.vue'
export default {
  name: "",
  components: {
    Child
  },
};
</script>

<style>
</style>