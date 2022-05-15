<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <!-- slot :todo="todo" 是slot作用域插槽传递，把这个todo的内容传给父组件 -->
        <slot :todo="todo">
          {{ todo.content }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['todos']
}
</script>

<style>

</style>