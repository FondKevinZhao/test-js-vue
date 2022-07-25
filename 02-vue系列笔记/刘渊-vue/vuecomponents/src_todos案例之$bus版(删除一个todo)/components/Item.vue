<template>
  <!-- 鼠标移入、移出 -->
  <li
    :class="{ 'my-class': isShow }"
    @mouseenter="isShow = true"
    @mouseleave="isShow = false"
  >
    <label>
      <!-- :checked 前面一定要加冒号: -->
      <!-- checked的第一种写法： -->
      <input type="checkbox" :checked="todo.isOver" @click="upDateO" />

      <!-- checked的第二种写法： 在computed中写 -->
      <!-- <input type="checkbox" v-model="isChecked"/> -->
      <!-- 
        总结：
          - 多个复选框(checkbox)一组，那么此时每个复选框需要自己填写value的属性值，最终收集数据到一个数组当中
          - 单个复选框使用，此时不需要填写value值，v-model操作的数据，对应操作的就是复选框的checked属性值
       -->
      <span>{{ todo.content }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteO">删除</button>
  </li>
</template>

<script>
export default {
  name: "",
  // props: ["todo"],
  // props的第二种写法，写对象，可以对传递过来的属性值类型进行限定
  props: {
    // props多种写法混合用
    required: true,
    todo: Object,
    index: {
      type: Number,
      default: 0,
    },
    updateOne: Function,
    // deleteOne: Function,
  },
  data() {
    return {
      // 不要在data中写props传过来的东西，很可能页面展示的时候，数据还没有拿到，data当中不能出现this
      // isCheck: this.todo.isOver

      isShow: false,
    };
  },
  methods: {
    // 给单选框打勾或取消打勾
    upDateO() {
      this.updateOne(this.index);
    },
    // 删除一个todo
    deleteO() {
      // props的写法
      // this.deleteOne(this.index);

      // 全局事件总线的写法：
      this.$bus.$emit('deleteOne', this.index);
    }
  },
};
</script>

<style scoped>
.my-class {
  background-color: hotpink;
}

/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  width: 90%;
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>