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
  }
}
</script>

<style>

</style>
