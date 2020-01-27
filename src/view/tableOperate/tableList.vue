<template>
  <div class="table-list-box">
      列表操作
      <!-- 情况一 同级dom官方不推荐-->
      <!-- <div v-for="item in [1,2,3,4]" :key="item" v-if="isShow"></div> -->
      <!-- 情况二 外层套一层div/template template优雅好。或者利用filter处理数据计算属性-->
      <template v-if="isShow">
        <div v-for="item in [1,2,3,4]" :key="item"></div>
      </template>
  </div>
</template>

<script>
// v-for和v-if的优先级 同级情况下v-for高于v-if (this.$options.render源码分析出结果)
export default {
 data(){
   return {
     isShow: false
   }
 },
 mounted(){
   console.log(this.$options.render,'同级不是同级v-for和v-if')
 }
}
</script>

<style>

</style>