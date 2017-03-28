<template>
	<div class="demo2">
		<ul class="my-list">
	      <li :class="{mar: hasMargin}" @click="change($event);" v-for="(item, i) in arr">{{i + 1}}、{{item.name}}</li>
	    </ul>
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
      	hasMargin: true,
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
	  change: function(e) {
	    e.target.style.background = '#ccc';
	  }
	}
  }
</script>

<style type="text/less" lang="less" scoped>
	.mar {
		margin-bottom: 10px;
	}
</style>