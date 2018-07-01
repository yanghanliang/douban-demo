import Vue from 'vue'
import Router from 'vue-router'
import movieList from '@/views/movie-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      redirect: {
        name: 'in_theaters'
      }
    },
    {
      // 正在热映
      name: 'in_theaters',
      path: '/in_theaters',
      component: movieList
    },
    {
      // 即将上映
      name: 'coming_soon',
      path: '/coming_soon',
      component: movieList
    },
    {
      // top250
      name: 'top250',
      path: '/top250',
      component: movieList
    }
  ]
})
