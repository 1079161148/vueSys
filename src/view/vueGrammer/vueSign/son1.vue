<template>
  <div class="son1-box">
      <el-button type="primary">我是子组件1按钮</el-button>
      <div>我是子组件1</div>
      <div>inject数组形式接收父组件传过来的{{provideMsg}}</div>
  </div>
  
</template>

<script>
export default {
    inject: ['provideMsg'],
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