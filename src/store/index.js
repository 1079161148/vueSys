// 分两种优雅的情况 一种是新建state.js mutations.js  getters.js actions.js mutatation-type.js 
// 另外一种就是直接像现在这样的采modules管理每个使用vuex的模块包括（个人觉得更好维护代码也精简点有针对性全部放一起零散和公共的多）

import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state'
// import mutations from './mutations'
// import * as actions from './actions'
// import * as getters from './getters'
import user from './modules/user'
import collapse from './modules/collapse'
import createRenderer from 'vuex/dist/logger'
 
Vue.use(Vuex)
 
const debug = process.env.NODE_DEV !== 'production'
export default new Vuex.Store({
  modules:{
    user,
    collapse
  },
  strict: debug,
  plugins: debug ? [createRenderer()] : []
})