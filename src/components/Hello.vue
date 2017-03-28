<template>
  <div class="hello">
    <h3>my demo</h3>
    <ul>
      <li><router-link to="/demo1">demo1</router-link></li>
      <li><router-link to="/demo2">demo2</router-link></li>
      <li><router-link to="/demo3">demo3</router-link></li>
      <li><router-link to="/demo4">demo4</router-link></li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/less" lang="less" scoped>
#app {
  margin: 0 auto;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>