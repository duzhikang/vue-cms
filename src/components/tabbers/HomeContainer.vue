<template>
  <div id="home-container">
    <h3>HomeContainer</h3>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in slideShowList" :key="index">
        <img :src="item" alt=""/>  
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newslist">
        <img src="../../imgs/menu1.png" alt="">
        <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/photoList">
        <img src="../../imgs/menu2.png" alt="">
        <div class="mui-media-body">图片分享</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
        <img src="../../imgs/menu3.png" alt="">
        <div class="mui-media-body">商品购买</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
        <img src="../../imgs/menu4.png" alt="">
        <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
        <img src="../../imgs/menu5.png" alt="">
        <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
        <img src="../../imgs/menu6.png" alt="">
        <div class="mui-media-body">联系我们</div></a></li>
      
      
    </ul> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideShowList: []
    };
  },
  created() {
    this.getSlideShow();
  },
  methods: {
    getSlideShow() {
      this.$http.get("api/slideshow").then(result => {
        if(result.body.code === 0) {
          this.slideShowList = result.body.data;
        }else {
          console.log("load failure")
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe{
  height: 200px;
}
.mt-swipe-item>img{
  height: 100%;
  width: 100%;
}
#home-container{
  width: 500px;
  height: 980px;
  margin: auto;
}
.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
}
.mui-grid-view.mui-grid-9 img{
    height: 60px;
    width: 60px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: none;
}

.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  font-size: 13px;
}
</style>
