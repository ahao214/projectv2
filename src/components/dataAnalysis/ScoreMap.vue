<template>
  <div class="score-map">
    <div class="main"></div>
  </div>
</template>

<script>
import chinaJson from "echarts/map/json/china";

export default {
  data() {
    return {};
  },
  mounted() {
    let myChart = this.$echarts.init(document.getElementById("main"));
    this.$echarts.registerMap("china", chinaJson);
    console.log(myChart);
    // 从这里开始复制实例的代码
  },
};
</script>

<style lang="scss">
.score-ma {
  width: 100%;
  #main {
    width: 100%;
    height: 500px;
  }
}
</style>
