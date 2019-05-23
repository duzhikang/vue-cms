<template>
  <div class="app-container ">
    <!-- header -->
    <mt-header class="app-header" fixed title="VUE">Header</mt-header>

<!-- 路由的容器坑 -->
<transition>
   <router-view></router-view>
</transition>

<nav class="mui-bar mui-bar-tab app-bar">
	<router-link class="mui-tab-item" to="/home">
		<span class="mui-icon mui-icon-home"></span>
		<span class="mui-tab-label">首页</span>
	</router-link>
	<router-link class="mui-tab-item" to="/member">
		<span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
		<span class="mui-tab-label">会员</span>
	</router-link>
	<router-link class="mui-tab-item" to="/shopcar">
		<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
		<span class="mui-tab-label">购物车</span>
	</router-link>
	<router-link class="mui-tab-item" to="/search">
		<span class="mui-icon mui-icon-search"></span>
		<span class="mui-tab-label">搜索</span>
	</router-link>
  </nav>

  </div>
</template>

<script>
</script>



<style lang="scss" scoped>
.app-container{
	padding-top: 40px;
	padding-bottom: 50px;
	width: 500px;
	height: 980px;
	margin: auto;
}
.mt-header{
	height: 100%;
	width: 100%;
}
.app-header{
	width: 500px;
	height: 40px;
	margin: auto;
}
.app-bar {
	width: 500px;
	height: 40px;
	margin: auto;
}

// 动画效果相关的类样式
.v-enter {
  opacity: 0;
  // 让即将进入的页面，向右偏移 100% 屏幕的宽度
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  // 让即将进入的页面，向右偏移 100% 屏幕的宽度
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}
</style>
