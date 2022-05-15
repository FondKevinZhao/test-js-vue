<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span> <span>已完成{{ overNum }}</span> / 全部{{ allNum }}</span>
    <button class="btn btn-danger" @click="deleteA">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['todos'],
  data() {
    return {

    }
  },
  methods: {
    // 清除已完成任务
    deleteA() {
      this.$emit('deleteAll');
    }
  },
  computed: {
    allNum() {
      return this.todos.length;
    },
    overNum() {
      // 方法一：forEach()
      /* let num = 0;
      this.todos.forEach((item) => {
        if(item.isOver) {
          num++
        }
      })
      return num; */

      // 方法二：filter()
      /* var newArr = this.todos.filter((item) => {
        return item.isOver == true;
      })
      return newArr.length; */
      

      // 方法三：reduce()
      /* 
        reduce()：
          - 功能：统计数组当中的符合条件的结果(数字或其他类型)
          - 参数：回调函数 和 统计的初始值
              1. 回调函数
                1. prev：上一次统计的结果
                2. item: 当前项
                3. index: 索引
                4. arr: 当前操作的数组
              2. 统计的初始值(可选，可以不写)，如果不写初始值，回调函数中的第一个参数就代表初始值
          - 返回值：返回最终统计后的结果
      */
      return this.todos.reduce((prev, item) => {
        // 这个方法也是暗含遍历，会拿数组的每一项执行回调函数
        // 第一次执行回调的时候，prev的值就是你给的初始值
        // 第一次执行完回调函数后，会返回prev值，返回给了第二次执行时候的初始值
        // 最后一次执行返回的prev值，因为没有下一次了，这个值直接作为整个reduce的结果
        if(item.isOver) {
          prev += 1;
        }
        return prev;
      },0);
    },
    isCheckAll: {
      get() {
        // 关键看 已完成 和 全部 是否相等
        // this.allNum > 0 表示你必须要有内容才会考虑打不打勾，没有内容是不打勾的
        return this.overNum === this.allNum && this.allNum > 0;
      },
      set(val) {
        // 我用自定义事件做的，也可以使用props做(从App.vue中通过组件标签传过来，然后这边用props接收那个函数，然后在这个地方调用，如：this.updateAll(val))
        this.$emit('updateAll', val);
      }
    }
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>