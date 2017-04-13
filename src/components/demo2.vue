<template>
	<div class="demo2">
		<ul class="my-list">
	      <li class="mar" :class="{active: i == index}" @click="tab(i, $event);" v-for="(item, i) in arr">{{i + 1}}、{{item.name}}</li>
	    </ul>
	    <div v-show="i == index" v-for="(item, i) in arr" class="xtab-con clear">这是第{{i + 1}}块tab内容{{item.name}}</div>
	   	<p>{{message}}</p>
	    <input type="text" v-model="message" />
	</div>
</template>

<script type="text/javascript">
  export default {
    name: 'demo2',
    data () {
      return {
      	message: 'Hello Vue!',
      	index: 0,
      	arr: [
	      {
	        name: '张三'
	      },
	      {
	        name: '李四'
	      },
	      {
	        name: '小明'
	      },
	      {
	        name: '小红'
	      },
	      {
	        name: '小李'
	      }
	    ]
      }
    },
    methods: {
	  tab(i, ev) {
	  	this.index = i;
	  	console.log(ev.target);
	  }
	}
  }
</script>

<style type="text/less" lang="less" scoped>
	.mar {
		margin-bottom: 10px;
	}
	.active {
		background-color: #ccc;
	}
	ul, li {
		list-style: none;
	}
	ul {
		margin-left: 220px;
	}
	li {
		float: left;
		margin-right: 30px;
	}
	.clear {
		clear: both;
	}
</style>