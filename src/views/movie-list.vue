<template>
    <div>
        <h1 class="page-header">{{ title }}</h1>

        <div
          v-for="item in subjects"
          :key="item.id"
          class="media">
          <div class="media-left">
            <a href="#">
              <img class="media-object" :src="'https://images.weserv.nl?url=' + item.images.small.substr(7)" alt="">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">{{ item.title }}</h4>
            {{ item.genres }}
          </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  created() {
    // 获取当前的路由规则 path: "/coming_soon"
    // console.log(this.$route)
    // 执行actions
    this.setData()
  },
  methods: {
    ...mapActions('movieList', [
      'setData'
    ])
  },
  computed: {
    ...mapState('movieList', [
      'title', 'subjects'
    ])
  },
  // 侦听器, 监听路由规则的变化, 如果路由规则发生变化就会执行
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      // 执行actions
      this.setData()
    }
  }
}
</script>

<style>

</style>
