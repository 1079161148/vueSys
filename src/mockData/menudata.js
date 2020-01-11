const menuList = [
    {
        icon: 'el-icon-menu',
        index: 'dashboard',
        title: '系统首页'
    },
    {
        icon: 'el-icon-tickets',
        index: 'tableList',
        title: 'element-ui表格操作'
    },
    {
        icon: 'el-icon-tickets',
        index: '3',
        title: '表单相关',
        subs: [
            {
                icon: 'el-icon-tickets',
                index: 'myform',
                title: '自定义表单'
            },
            {
                icon: 'el-icon-tickets',
                index: '3-2',
                title: '三级菜单',
                subs: [
                    {
                        icon: 'el-icon-tickets',
                        index: 'editor',
                        title: '富文本编辑器'
                    },
                    {
                        icon: 'el-icon-tickets',
                        index: 'markdown',
                        title: 'markdown编辑器'
                    }
                ]
            },
            {
                icon: 'el-icon-tickets',
                index: 'upload',
                title: '文件上传'
            }
        ]
    },
    {
        icon: 'el-icon-rank',
        index: '6',
        title: '拖拽组件',
        subs: [
            {
                icon: 'el-icon-tickets',
                index: 'drag',
                title: '拖拽列表'
            },
            {
                icon: 'el-icon-tickets',
                index: 'dialog',
                title: '拖拽弹框'
            }
        ]
    },
    {
        icon: 'el-icon-tickets',
        index: '7',
        title: '错误处理',
        subs: [
            {
                icon: 'el-icon-tickets',
                index: 'permission',
                title: '权限测试'
            }
        ]
    },
    {
        icon: 'el-icon-tickets',
        index: '8',
        title: 'vue语法板块',
        subs: [
            {
                icon: 'el-icon-tickets',
                index: 'vuesign',
                title: 'vue组件通讯的方式'
            },
            {
                icon: 'el-icon-tickets',
                index: 'permission',
                title: '权限测试'
            }
        ]
    },
] 

export default menuList