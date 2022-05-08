<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input
          type="text"
          class="form-control"
          placeholder="用户名"
          v-model="username"
        />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
          class="form-control"
          rows="6"
          placeholder="评论内容"
          v-model="content"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button
            type="button"
            class="btn btn-default pull-right"
            @click="addC"
          >
            提交
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      username: "",
      content: "",
    };
  },
  // props接收到的数据，最终也会混入到vm身上
  // props: ["addComment"],
  methods: {
    addC() {
      // 拿到用户输入的数据
      let { username, content } = this;
      // 只要是拿用户输入的东西，必然if
      if (username.trim() && content.trim()) {
        // 把数据给变为一个对象
        let id = Date.now(); // Date的D要大写
        let obj = {
          id,
          username,
          content,
        };
        // props写法：
        // this.addComment(obj);

        // 自定义事件写法：
        this.$emit('addComment', obj);
      } else {
        alert("请输入合法的用户名和内容");
      }
      this.username = "";
      this.content = "";
    },
  },
};
</script>

<style>
</style>