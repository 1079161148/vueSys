import Link from './my-router-link'
import View from './my-router-view'
let Vue;
// 实现一个插件 挂载$router

class myRouter{
    constructor(options){
        this.$options = options;
        console.log(this.$options, 'options');
        // 需要创建响应式的currentUrl
        // 利用Vue提供的defineReactive做响应化
        // Vue.util.defineReactive(this, 'currentUrl', '/')  // 单层路由
        this.currentUrl =  window.location.hash.slice(1) || '/';
        Vue.util.defineReactive(this, 'matched',[])  // 路由嵌套
        // match方法可以递归遍历路由表，获得匹配关系
        this.match()
        // 监听url变化
        window.addEventListener('hashchange', this.onHashChange.bind(this))
        // 监听load 注意上下文 前面是window 后面是 onHashChange
        window.addEventListener('load',this.onHashChange.bind(this))

        // 创建一个路由映射表
        // this.routeMap = {}
        // options.routes.forEach(route => {
        // this.routeMap[route.path] = route
        // })
    }
    onHashChange(){
        console.log(window.location.hash,'hash')
        this.currentUrl = window.location.hash.slice(1);
        this.matched = []; // 路径变化清空下次继续匹配
        this.match();
    }
    match(routes){
        routes = routes || this.$options.routes;
        // 递归遍历
        for (const route of routes) {
            if(route.path === '/' && this.currentUrl === '/'){
                this.matched.push(route);
                return
            }
            if (route.path !== '/' && this.currentUrl.indexOf(route.path) != -1){
                this.matched.push(route);
                if(route.children){
                    this.match(route.children);
                }
                return
            }
        }
    }
}
myRouter.install = function(_Vue){
  // 保存构造函数，在myRouter使用
  Vue = _Vue;
  // 挂载$router 如何获取根实例的router选项
  Vue.mixin({
      beforeCreate(){
        //   console.log(this)
          // 确保根实例有才执行
          if(this.$options.router){
              Vue.prototype.$router = this.$options.router
          }
      }
  })
    // 任务2：实现两个全局组件router-link和router-view
    Vue.component('router-link', Link)
    Vue.component('router-view', View)
}
export  default myRouter
