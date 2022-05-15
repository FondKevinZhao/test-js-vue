<template>
  <div>
    <h2>我爱你赵丽颖</h2>
    <!-- slot是vue当中内置的组件标签 -->
    <!-- 默认插槽 -->
    <slot>
      <!-- slot内部的东西是等待着父组件使用的时候给传过来 -->
      <span>父亲传了东西，我不会被显示</span>
    </slot>

    <!-- 具名插槽 -->
    <slot name="xxx"></slot>


    <slot name="yyy">
      <ul>
        <li>父亲没有传东西，我会显示出来</li>
        <li>我爱你赵丽颖1</li>
        <li>我爱你赵丽颖2</li>
      </ul>
    </slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>