import Vue from 'vue'
import Vuex from 'vuex'
import movieList from './modules/movie-list' // 导入vuex模块化,便于管理

Vue.use('Vuex')

// 创建仓库
const store = new Vuex.Store({
  modules: {

  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})

export default store
