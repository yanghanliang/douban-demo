<template>
  <div id="app">
    <!-- 放头部组件 -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- 放侧边栏 -->
          <app-sidebar></app-sidebar>
          <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <router-view></router-view>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/app-header'
import appSidebar from '@/components/app-sidebar'
export default {
  name: 'App',
  components: {
    appHeader,
    appSidebar
  }
}
</script>

<style>
</style>
