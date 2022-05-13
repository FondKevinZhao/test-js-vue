<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 方法一：props 看methods的addTodo -->
      <!-- <Header :addTodo="addTodo"></Header> -->

      <!-- 方法二：自定义事件 看methods的addTodo -->
      <Header @addTodo="addTodo"></Header>

      <List :todos="todos" :updateOne="updateOne" :deleteOne="deleteOne"></List>

      <Footer
        :todos="todos"
        @updateAll="updateAll"
        @deleteAll="deleteAll"
      ></Footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import List from "@/components/List";
import Footer from "@/components/Footer";

export default {
  name: "",
  components: {
    Header,
    List,
    Footer,
  },
  data() {
    return {
      todos: [
        { id: 1, content: "抽烟", isOver: false },
        { id: 2, content: "喝酒", isOver: true },
        { id: 3, content: "烫头", isOver: true },
      ],
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    // 取消单选框或者选中单选框
    updateOne(index) {
      // 这里修改的不是数组当中的数据，而是数组对象中的属性
      this.todos[index].isOver = !this.todos[index].isOver;
    },
    // 删除一个
    deleteOne(index) {
      this.todos.splice(index, 1);
    },
    updateAll(val) {
      this.todos.forEach((item) => {
        item.isOver = val;
      });
    },
    deleteAll() {
      // 把没打勾的过滤出来组成新数组，把原数组修改为这个新数组
      this.todos = this.todos.filter(item => {
        // 写法一：
        // return item.isOver === false;

        // 写法二：
        return !item.isOver;
      })
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>