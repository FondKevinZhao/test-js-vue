<template>
  <h2>reactive的使用</h2>
  <h3>名字：{{ user.name }}</h3>
  <h3>年龄：{{ user.age }}</h3>
  <h3>性别：{{ user.gender }}</h3>
  <h3>媳妇：{{ user.wife }}</h3>
  <h3>{{ user }}</h3>
  <hr />
  <button @click="updateUser">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
// 显示用户的相关信息，点击按钮，可以更新用户的相关信息数据
export default defineComponent({
  name: "App",
  setup() {
    // 把复杂数据变成响应式的数据
    // 返回的是一个Proxy的代理对象，被代理目标对象就是reactive中的传入的obj对象
    // user是代理对象，obj是目标对象
    // user对象的类型是Proxy
    // const obj: any = { // 加:any，为了在使用obj.gender="男"的时候不出现这种错误的提示信息才这么写的
    const obj: any = {
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
      // user对象或者obj对象添加一个新的属性，哪一种方式会影响界面的更新
      // obj.gender = "男"; // 这种方式添加的属性，不是响应式的
      user.gender = "男"; // 这种方式可以响应渲染，而且这个数据也会出现在obj的上面

      // user对象或者obj对象移除一个已经存在的属性，哪一种方式会影响界面的更新
      // delete obj.age; // 这种方式页面没有更新渲染，obj中确实没有了age这个属性
      delete user.age;
      // 总结：如果操作代理对象，目标对象中的数据也会随之变化，如果想在操作数据的时候，介么也要更新渲染，那么也是操作代理对象
    };

    return {
      user,
      updateUser,
    };
  },
});
</script>
