<template>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Help</a></li>
            </ul>
            <!-- params: books/:id   -- :id
            query: search?q=123 -- q=123 -->
            <form @submit.prevent="handleSubmit" class="navbar-form navbar-right">
                <input v-model="searchValue" type="text" class="form-control" placeholder="Search...">
            </form>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    handleSubmit() {
      // 把搜索框的内容数据绑定到路由对象中(全局)
      this.$router.push({
        name: 'search',
        query: {
          q: this.searchValue
        }
      })
    }
  }
}
</script>

<style>

</style>
