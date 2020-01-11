const vueGrammerRouter = [
    {
        path: '/vuesign',
        name: 'vuesign',
        component: () => import('@/view/vueGrammer/vueSign/father'),
        meta: { title: 'vue组件通讯的方式' }
    },
]

export default vueGrammerRouter