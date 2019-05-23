// 导入 Account 组件
import VueRouter from 'vue-router'

import Home from './components/tabbers/HomeContainer.vue'
import Member from './components/tabbers/MemberContainer.vue'
import Shopcar from './components/tabbers/ShopcarContainer.vue'
import Search from './components/tabbers/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'

  const router = new VueRouter({
    routes:[
      {path: '/', redirect: '/home'},
      {path: '/home', component: Home},
      {path: '/member', component: Member},
      {path: '/shopcar', component: Shopcar},
      {path: '/search', component: Search},
      {path: '/home/newsList',component: NewsList},
      { path: '/home/newsinfo/:id', component: NewsInfo, props: true },
      { path: '/home/photoList', component: PhotoList },
    ],
    linkActiveClass: 'mui-active' // 手动设置 被激活的 路由链接的高亮类名 
  })

  export default router