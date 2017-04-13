// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false


// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  routes: [
    {
      path: '/demo1',
      component: require('./components/demo1')
    },
    {
      path: '/demo2',
      component: require('./components/demo2')
    },
    {
    	path: '/demo3',
    	component: require('./components/demo3')
    },
    {
    	path: '/demo4',
    	component: require('./components/demo4')
    }
  ]
});

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');

