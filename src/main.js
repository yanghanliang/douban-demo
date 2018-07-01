// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // 导入vuex创建的仓库
import { sync } from 'vuex-router-sync'

// 加载 bootstrap 的样式
import 'bootstrap/dist/css/bootstrap'

// 加载自定义样式
import '@/assets/css/index'

// 把router注册到store中
sync(store, router)
// console.log(store)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
