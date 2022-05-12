<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" />
    </label>
    <span> <span>已完成{{ overNum }}</span> / 全部{{ allNum }}</span>
    <button class="btn btn-danger">清除已完成任务</button>
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
  computed: {
    allNum() {
      return this.todos.length;
    },
    overNum() {
      let num = 0;
      this.todos.forEach((item) => {
        if(item.isOver) {
          num++
        }
      })
      return num;
    },
    isCheckAll: {
      get() {

      },
      set() {
        
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