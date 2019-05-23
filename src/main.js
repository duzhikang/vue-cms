import Vue from 'vue'
// 1. 导入 vue-router 包
import VueRouter from 'vue-router'
// 2. 手动安装 VueRouter 
Vue.use(VueRouter)

import VueResource from 'vue-resource'
//Vue.http.options.emulateJSON=true
Vue.use(VueResource)
Vue.http.options.root = "http://127.0.0.1:8005"

// 导入格式化时间的模块
import moment from 'moment'
// 定义全局的时间过滤器
Vue.filter('dateFormat', function (dateStr, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  // 在过滤器的处理函数中，最后，必须 return 一个东西，这样，才是一个合法的过滤器
  return moment(dateStr).format(formatStr)
})

import router from "./router.js"

import '../node_modules/bootstrap/dist/css/bootstrap.css'

// 导入 app 组件
import app from './App.vue'

import "./lib/mui/css/mui.css"
// 导入MUI的扩展图标
import "./lib/mui/css/icons-extra.css"

import { Header, Swipe, SwipeItem, Button } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
var vm = new Vue({
  el: '#app',
  render: c => c(app), // render 会把 el 指定的容器中，所有的内容都清空覆盖，所以不要把 路由的 router-view 和 router-link 直接写到 el 所控制的元素中
  // 4. 将路由对象挂载到 vm 上
  router
})
