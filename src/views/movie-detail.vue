<template>
    <div>
        <h2>{{ movie.title }}</h2>
        <img v-if="movie.images" :src="movie.images.large" alt="">
        <hr />
        简介:
        <p>{{ movie.summary }}</p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  created() {
    this.getMovieById()
  },
  methods: {
    ...mapActions('movieDetail', [
      'getMovieById'
    ])
  },
  computed: {
    ...mapState('movieDetail', [
      'movie'
    ])
  }
}
</script>

<style>
</style>
