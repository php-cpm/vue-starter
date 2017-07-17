// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
// import ElementUI from 'element-ui'
import Iview from 'iview'
// import 'element-ui/lib/theme-default/index.css'
import './css/common.css'
import './css/iconfont.css'
import 'iview/dist/styles/iview.css'

import mock from './apis/mock'

import routes from './config/routes'
import App from './App'

Vue.use(VueRouter) //路由注册
// Vue.use(ElementUntUI) //UI框架注册
Vue.use(Iview) //UI框架注册

const router = new VueRouter({
  routes
})



mock.start() //启动ajax mock服务

window.vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
