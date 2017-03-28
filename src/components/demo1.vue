<template>
	<div class="demo1">
		<h3 class="default" :class="{active: isActive, error: isError}" :title="tips" v-if="bool">{{message}}</h3>
		<h3 v-else>{{falseMessage}}</h3>
		<h3 v-show="boolShow">test v-show</h3>
		<h3 :class="[left, green]">classArr</h3>
    	<h3 :class="classObj">classObj</h3>
	</div>
</template>

<script type="text/javascript">
  export default {
    name: 'demo1',
    data () {
      return {
      	message: 'Hello World!',
	    falseMessage: 'Hello Vue!',
	    tips: 'hover me you will see me',
	    bool: true,
	    boolShow: false,
	    isActive: true,
      	isError: false,
      	classObj: {
	      danger: true,
	      active: false
	    },
	    left: 'left',
	    green: 'green'
      }
    }
  }
</script>

<style type="text/less" lang="less" scoped>
.green {
  color: green;
}
.danger {
  color: #f00;
}
.left {
  text-align: left;
}
</style>