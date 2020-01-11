<template>
  <div class="son2-box">
      <el-button type="primary">我是子组件2按钮</el-button>
      <div>我是子组件2</div>
      <div>inject对象（取个别名）形式接收父组件传过来的{{newProvideMsg}}</div>
  </div>
</template>

<script>
export default {
    // 对象形式
    inject:{
        newProvideMsg: {from: 'provideMsg'},
    },
    props:{

    },
    data(){
        return{

        }
    },
    methods:{
        
    }
}
</script>

<style>

</style>