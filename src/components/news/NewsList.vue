<template>
  <div>
    <h1>news</h1>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media"  v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/newsInfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.surfacePlot">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
								
								<span>发表时间：{{item.date | dateFormat}}</span>
								<span>点击：{{item.count}}次</span>
								</p>
						</div>
					</router-link>
				</li>
				
				

			</ul>
  </div>
</template>

<script>
import {Toast} from "mint-ui"
export default{
	data() {
		return {
			newslist: []
		}
	},
	created() {
		this.getNewsList()
	},
	methods: {
		getNewsList() {
			this.$http.get('api/news').then(result => {
				if(result.body.code === 0) {
					this.newslist = result.body.data;
				}else {
					Toast('获取新闻列表失败!')
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.mui-media-body {
  h1 {
    font-size: 14px;
  }
  .mui-ellipsis {
    color: #26a2ff;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
}
</style>
