import Vue from 'vue'
import Router from './my-router'
import vueGrammerRouter from  './vueGrammerRouter'
// NavigationDuplicated （重复点击菜单路由报错）解决方案 
// 1.固定vue-router版本到3.0.7以下
// 2.用下面代码禁止错误打印
// 3.方案3(高成本高收益) 每个router.push增加回调函数 router.push('/location').catch(err => {err})
// 在vue-router 3.1版本之前的push调用时不会返回任何信息，假如push之后路由出现了问题也不会有任何的错误信息。
// 如果你使用方案1固定了vue-router的版本，那么以后的项目需要路由的回调时你根本无从下手。
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 路由懒加载的三种方式
// 1.vue异步组件
// 2.es提案的import()
// 3.webpack的require,ensure()

// 1.应用
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    name: 'home',
    component: ()=>import("@/components/layout/home"),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/view/dashBoard/index'),
        meta: { title: '系统首页' }
      },
      {
        path: '/tableList',
        name: 'tableList',
        component: () => import('@/view/tableOperate/tableList'),
        meta: { title: '列表操作' }
      },
      {
        path: '/myform',
        name: 'myForm',
        component: () => import('@/view/myForm/index'),
        meta: { title: '自定义表单组件' }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/view/notFound/404'),
        meta: { title: '404页面' }
      },
      ...vueGrammerRouter
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import("@/view/login/login")
  },
  {
    path: '*',
    redirect: '/404'
  }
]
// 生成实例
const router =  new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// // 全局前置钩子  /*在（任意路由）跳转之前执行*/

// // to:router即将进入的路由对象
// // from:当前导航即将离开的路由
// // next:Function,进行管道中的一个钩子，如果执行完了，则导航的状态就是 confirmed （确认的）；否则为false，终止导航。

// router.beforeEach((to, from, next) => {
//   console.log('beforeEach')
// })

// // 全局后置钩子  /*在（任意路由）跳转之后判断*/
// router.afterEach((to, from) => {
//   //会在任意路由跳转后执行
//  console.log('afterEach')
// })

export default router