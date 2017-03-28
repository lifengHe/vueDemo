<template>
	<div class="demo4">
		<ul>
	      <li v-for="(article, i) in articles">
	        <span>{{i + 1}}</span>、{{article.title}}
	      </li>
    	</ul>
	</div>
</template>

<script type="text/javascript">
  export default {
    name: 'demo4',
    data () {
      return {
      	articles: []
      }
    },
	mounted: function() {
		this.$http.jsonp('https://api.douban.com/v2/movie/top250', {count: 20}, {
	      headers: {},
          emulateJSON: true
    	}).then(function(data) {
			this.articles = data.data.subjects;
		})
	}    
  }
</script>

<style type="text/less" lang="less" scoped>
	ul {
		width: 600px;
		margin: 0 auto;
		padding-left: 0;
	}	
	li {
		margin-bottom: 10px;
	}
	ul, li {
		text-align: left;
		list-style: none;
		span {
			display: inline-block;
			text-align: center;
			width: 20px;
			height: 20px;
			font-size: 14px;
			line-height: 20px;
			border-radius: 50%;
			background-color: #000;
			color: #fff;
		}
	}
</style>