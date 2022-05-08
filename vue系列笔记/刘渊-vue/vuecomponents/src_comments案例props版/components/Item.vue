<template>
  <div>
    <li class="list-group-item">
      <div class="handle">
        <a href="javascript:;" @click="deleteC">删除</a>
      </div>
      <p class="user">
        <span>{{ comment.username }}</span
        ><span>说:</span>
      </p>
      <p class="centence">{{ comment.content }}</p>
    </li>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["comment", "deleteComment", "index"],
  methods: {
    // 数据哪，操作数据的方法就在哪。现在数据在App.vue中，所以要在App.vue中去定义删除的方法
    deleteC() {
      const confirmDelete = confirm("确定要删除吗？");
      if (confirmDelete) {
        // 因为删除的是下标，所以又要从父组件(List.vue)中传一个下标过来
        this.deleteComment(this.index);
      }
    },
  },
};
</script>

<style>
li {
  transition: 0.5s;
  overflow: hidden;
}

.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>