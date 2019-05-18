import Vue from 'vue'
// 1. 导入 vue-router 包
import VueRouter from 'vue-router'
// 2. 手动安装 VueRouter 
Vue.use(VueRouter)

import router from "./router.js"

// 导入 app 组件
import app from './App.vue'

import "./lib/mui/css/mui.css"

import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

var vm = new Vue({
  el: '#app',
  render: c => c(app), // render 会把 el 指定的容器中，所有的内容都清空覆盖，所以不要把 路由的 router-view 和 router-link 直接写到 el 所控制的元素中
  // 4. 将路由对象挂载到 vm 上
  router
})

console.log(123)