// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 原生
// import router from './myRouter' // 手写
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/baseCss/reset'
import api from './api/api'
import store from './store' // store 注意别写成大写的 Store 了否则报错;
import 'babel-polyfill'; // 用来为旧浏览器提供它没有原生支持的较新的功能
import promise from 'es6-promise' //axios安卓低版本兼容性处理
// 注意：es6-promise 一定要在 axios 之前注册 或者 使用 require('es6-promise').polyfill();引入
promise.polyfill();
import Mixin from './mixins/emitter';
Vue.mixin(Mixin);

Vue.use(ElementUI);

import echarts from 'echarts' // 可视化图表插件
Vue.prototype.$echarts = echarts

Vue.prototype.$bus = new Vue();

// 全局挂载不用每个组件 import 简单粗暴省去繁琐;
Vue.prototype.$api = api; 

Vue.config.productionTip = false

// 挂载router实例 
/* eslint-disable no-new */
new Vue({
  router, // 为什么挂载到这来？ <=> Vue.prototype.$router = router; 
  store,
  render: h=>h(App)
}).$mount('#app');
