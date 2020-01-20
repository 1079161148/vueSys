<template>
  <div class="line-box">
    <div id="myChart1" :style="{width: '100%', height: '100%'}"></div>
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
      let myChart = this.$echarts.init(document.getElementById("myChart1"));
      // 配置选项
      let options = {
        title: { text: "在Vue中使用echarts--柱状图" },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      // 绘制图表
      myChart.setOption(options);
    }
  }
};
</script>

<style lang="scss">
.line-box{
    height: 100%;
}
</style>