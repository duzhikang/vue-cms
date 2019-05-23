<template>
  <div class="cmt-container">
    <h4>发表评论</h4>
    <textarea placeholder="评论内容......（最多输入120字）"
    maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <!-- 评论列表区域 -->
  <div class="cmt-list">
    <div class="cmt-item" v-for="(item, i) in comments" :key="i">
      <div class="cmt-item-title">第{{ i+1 }}楼&nbsp;用户：{{ item.user }}&nbsp;发表时间：{{ item.date | dateFormat }}</div>
      <div class="cmt-item-body">{{ item.body }}</div>
    </div>
  </div>

  <mt-button type="primary" size="large" plain >加载更多</mt-button>
  </div>
</template>

<script>
// 按需从 MintUI 中，导出需要的 弹框组件
import { Toast } from "mint-ui";
export default{
  data() {
    return {
      comments: [],
      msg: "" // 即将发表的评论内容
    }
  },
  created() {
    this.getComments()
  },
  methods: {
    getComments() {
      this.$http.get('api/comment').then(result => {
        if(result.body.code === 0) {
          this.comments = this.comments.concat(result.body.data);
        }else {
          Toast("获取评论失败")
        }
      })
    },
    postComment() {
      console.log(this.msg + '^^^ssss')
      if(this.msg.length <= 0) {
        Toast('not null')
      }
      this.$http.post("api/comment", {content: this.msg.trim()}).then(function(result) {
        if(result.body.code === 0) {
          let comment = {
            user: "anonymous user",
            date: Date.now(),
            body: this.msg.trim()
          }
          this.comments.unshift(comment);
          this.msg = "";
        }
      })
    }
  },
  props: ["id"]
}
</script>

<style lang="scss" scoped>
 .cmt-container{
   padding-top: 10px;
   padding-bottom: 10px;
 }
 .cmt-container h4{ 
   padding-bottom: 10px;
   font-size: 18px;
   font-family:Arial;
 }
 .cmt-container textarea{
   height: 80px;
 }
 .cmt-list .cmt-item {
   font-size: 13px;
 }
 .cmt-list .cmt-item .cmt-item-title {
    font-size: 14px;
    background-color: #ddd;
 }
 .cmt-list .cmt-item .cmt-item-body {
    font-size: 13px;
    text-indent: 2em;
    padding: 10px;
 }
</style>
