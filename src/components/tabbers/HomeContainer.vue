<template>
  <div>
    <h3>HomeContainer</h3>
    <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item, index) in slideShowList" :key="index">
      <img :src="item" alt=""/>  
    </mt-swipe-item>
    
</mt-swipe>
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
      this.$http.get("http://127.0.0.1:8005/api/slideshow").then(result => {
        if(result.body.code === 0) {
          this.slideShowList = result.body.data;
          console.log(slideShowList[0])
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
  
}
</style>
