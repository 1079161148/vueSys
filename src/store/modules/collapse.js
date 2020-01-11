// 分两种优雅的情况 一种是新建state.js mutations.js  getters.js actions.js mutatation-type.js 
// 另外一种就是直接像现在这样的采modules管理每个使用vuex的模块包括（个人觉得更好维护代码也精简点有针对性全部放一起零散和公共的多）

const state = {
    collapse: false
}

const mutations = {
    getCollapseStatus (state) {
        state.collapse = !state.collapse;
    }
}

const getters = {
    collapse: state => state.collapse
}

export default {
    state,
    mutations,
    getters
}