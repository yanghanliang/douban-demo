import Vue from 'vue'
import Vuex from 'vuex'
// 导入vuex模块化,便于管理
import movieList from './modules/movie-list'
import movieDetail from './modules/movie-detail'

Vue.use(Vuex)

// 创建仓库
const store = new Vuex.Store({
  modules: {
    movieList,
    movieDetail
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})

export default store
