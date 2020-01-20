<template>
  <div class="line-box">
    <div id="myChart3" :style="{width: '100%', height: '100%'}"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart3"));
      // 配置选项
      let options = {
        title: { text: "在Vue中使用echarts--k线图" },
        xAxis: {
          data: ["2017-10-24", "2017-10-25", "2017-10-26", "2017-10-27"]
        },
        yAxis: {},
        series: [
          {
            type: "k",
            data: [
              [20, 30, 10, 35],
              [40, 35, 30, 55],
              [33, 38, 33, 40],
              [40, 40, 32, 42]
            ]
          }
        ]
      };
      // 绘制图表
      myChart.setOption(options);
    }
  }
};
</script>

<style lang="scss">
.line-box {
  height: 100%;
}
</style>