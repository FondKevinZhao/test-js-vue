<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    search() {
      let keyword = this.keyword;
      if(keyword.trim()) {
        // 如果keyword是OK的，我们就不要把这个keyword传给Main.vue，在Main.vue中发请求
        this.$bus.$emit('searchAjax', keyword);
      } else {
        alert('关键字必须合法')
      }
      keyword = '';
    }
  },
};
</script>

<style>
</style>