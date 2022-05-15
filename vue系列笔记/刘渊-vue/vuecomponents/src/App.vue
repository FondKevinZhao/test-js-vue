<template>
  <div>
    <Child>
      <!-- 通过插槽传东西给儿子，要加template -->
      <!-- 
        注意：
        1. 一个组件中可以传多个插槽，但是默认插槽只能有一个，剩下的可以传具名插槽。
        2. 无论是默认插槽还是具名插槽，里面都可以写东西，也可以不写东西，如果写了东西，就看你用的时候有没有给slot传递新的东西，如果传递了，slot当中的东西就被覆盖了，如果你没有给slot传递新的东西，那么默认显示的就是slot当中的东西。
      -->
      <template>
        <button>点我</button>
      </template>


      <template slot="xxx">
        <a href="http://www.baidu.com">点我去百度</a>
      </template>
    </Child>

    <Child>
      <!-- 通过插槽传东西给儿子，要加template -->
      <template>
        <p>pp</p>
      </template>

      <template slot="xxx">
        <span>我爱你</span>
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