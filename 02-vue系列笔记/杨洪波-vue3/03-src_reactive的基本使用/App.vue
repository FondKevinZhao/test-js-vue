<template>
  <h2>reactive的使用</h2>
  <h3>名字：{{ user.name }}</h3>
  <h3>年龄：{{ user.age }}</h3>
  <h3>媳妇：{{ user.wife }}</h3>
  <hr />
  <button @click="updateUser">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
/* 
  reactive()函数：
    - 作用：定义多个数据的响应式
    - const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象，响应式转换是深层次的。会影响对象内部所有嵌套的属性
    - 内部基于ES6的Proxy实现，通过代理对象操作源对象内部数据都是响应式的
*/

// 显示用户的相关信息，点击按钮，可以更新用户的相关信息数据
export default defineComponent({
  name: "App",
  setup() {
    // 把复杂数据变成响应式的数据
    // 返回的是一个Proxy的代理对象，被代理目标对象就是reactive中的传入的obj对象
    // user是代理对象，obj是目标对象
    // user对象的类型是Proxy
    const obj = {
      name: "小明",
      age: 20,
      wife: {
        name: "小甜甜",
        age: 18,
        cars: ["奔驰", "宝马", "奥迪"],
      },
    };
    const user = reactive(obj);

    // function updateUser() {}
    // 也可以写成表达式的形式
    const updateUser = () => {
      // 直接使用目标对象的方式来更新目标对象中的成员的值，是不可能的，只能使用代理对象的方式来更新数据(是响应式数据)
      user.name += "==";
      user.age += 2;
      user.wife.name += "++";
      user.wife.cars[0] = "玛莎拉蒂";
    };

    return {
      user,
      updateUser,
    };
  },
});
</script>
