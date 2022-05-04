<template>
  <div>
    <Mybutton></Mybutton>
  </div>
</template>

<script>
// APP.vue 是所有组件的父组件
import Mybutton from './components/MyButton.vue'; // 这里相当于拿到了一个定义组件的配置对象
export default {
  name: '',
  components: {
    // 在这里才使用导入进来的配置对象定义代注册了一个组件
    Mybutton,
  }
}
</script>

<style>

</style>