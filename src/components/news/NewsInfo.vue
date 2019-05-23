<template>
  <div class="newsinfo-container">
    <h3 class="ni-title">{{newsInfo.title}}</h3>
    <p class="ni-subtitle">
        <span>发表时间： {{newsInfo.pulishDate}}</span>
        <span>阅读：{{newsInfo.count}}</span>
    </p>

    <div class="ni-content" v-html="newsInfo.content"></div>

    <comment></comment>
  </div> 
</template>

<script>
import {Toast} from "mint-ui"
import comment from '../subcomponent/Comment.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            newsInfo: {}
        }
    },
    created() {
        this.getNewsInfo();
    },
    methods: {
        getNewsInfo() {
            this.$http.get("api/onenews/" + this.id).then(result => {
                if(result.body.code === 0) {
                    console.log(result.body.data)
                    console.log(result.body.data)
                    this.newsInfo = result.body.data;
                }else{
                    Toast('获取新闻失败')
                }
            })
        }
    },
    components: {
		// 为当前的 NewsInfo.vue 组件注册私有的子组件
    comment
	}
}
// // 导入 Comment.vue 子组件
// import comment from "../sub-components/Comment.vue";

// export default {
//   data() {
//     return {
//       newsinfo: {} // 新闻详情
//     };
//   },
//   methods: {
//     async getNewsInfo() {
//       // 根据Id获取新闻的详情
//       const { data } = await this.$http.get("/api/getnew/" + this.id);
//       if (data.status === 0) return (this.newsinfo = data.message[0]);
//     }
//   },
//   created() {
//     // console.log(this);
//     this.getNewsInfo();
//   },
//   props: ["id"],
//   components: {
//     // 为当前的 NewsInfo.vue 组件注册私有的子组件
//     comment
//   }
// };
</script>

<style lang="scss" >
.newsinfo-container {
  padding: 0 3px;
  padding-bottom: 50px;
  .ni-title {
    font-size: 15px;
    text-align: center;
    color: red;
    margin: 15px 0;
  }
  .ni-subtitle {
      font-size: 13px;
      color: #26a2ff;
      display: flex;
      justify-content: space-between;
  }
}

.newsinfo-container .ni-content img{
      width: 100%;
  }
</style>
