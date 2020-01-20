<template>
  <div class="dashboard-box">
    <div class="echart-wrap">
      <div class="echart-item">
        <echartLine/>
      </div>
      <div class="echart-item">
         <barEchart/>
      </div>
    </div>
    <div class="echart-wrap">
      <div class="echart-item">
         <pieEchart/>
      </div>
      <div class="echart-item">
        <kEchart/>
      </div>
    </div>
  </div>
</template>

<script>
import echartLine from './lineEchart'
import barEchart from './barEchart'
import pieEchart from './pieEchart'
import kEchart from './kEchart'
export default {
  components:{
    echartLine,
    barEchart,
    pieEchart,
    kEchart
  },
  data() {
    return {};
  },
  created() {
    let data = {};
    this.$api.test.testGet(data).then(res => {
      console.log(res, "res");
    });
  }
};
</script>

<style lang="scss">
.dashboard-box {
  height: 100%;
  width: 100%;
  .echart-wrap {
    width: 100%;
    height: 50%; // 高度随意
    display: flex;
    flex-wrap: wrap;
    .echart-item {
      // 子盒子设置:
      flex: 1;
      width: 50%;
      // 会发现盒子并没有四宫格形式排列
      // 需要添加最大宽度和最小宽度:
      min-width: 50%;
      max-width: 50%;
    }
  }
}
</style>