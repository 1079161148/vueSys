<template>
  <div class="dashboard-box">
      首页
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  created(){
    let data = {

    }
    this.$api.test.testGet(data).then(res => {
      console.log(res,'res')
    })
  }
}
</script>

<style>

</style>