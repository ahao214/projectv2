<template>
  <div class="travel-map">
    <div id="main"></div>
  </div>
</template>

<script>
//import geoJson from '@/assets/data.json'
import { travel } from "@/api/api.js";
export default {
  data() {
    return {};
  },
  created() {
    travel().then((res) => {
      if (res.data.status === 200) {
        let { points, linesData } = res.data.data;
        console.log(linesData);
        this.draw(points);
      }
    });
  },

  methods: {
    draw(points) {
      let myChart = this.$echarts.init(document.getElementById("main"));
      //this.$echarts.registermap("china", geoJson);
      this.$echarts.registermap("china", "");
      console.log(myChart);
      let option = {
        backgroundColor: "rgba(121,145,209)",
        geo: {
          map: "china",
          aspectScale: 0.75, //scale 地图长宽比
          zoom: 1.1,
          itemStyle: {
            normal: {
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "#09132c",
                  },
                  {
                    offset: 1,
                    color: "#274d68",
                  },
                ],
                globalCoord: true,
              },
              shadowColor: "rgb(58,115,192)",
              shadowOffsetX: 10,
              shadowOffsetY: 11,
            },
          },
          regions: [
            {
              name: "南海诸岛",
              itemStyle: {
                opacity: 0,
              },
            },
          ],
        },
        series: [
          {
            //配置地图相关参数,绘制地图
            type: "map",
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#1DE9B6",
                },
              },
              emphasis: {
                textStyle: {
                  color: "rgb(183,185,14)",
                },
              },
            },
            zoom: 1.1,
            map: "china",
            itemStyle: {
              normal: {
                backgroundColor: "rgb(147,235,248)",
                borderWidth: 1,
                areaColor: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgb(31,54,150)",
                    },
                    {
                      offset: 1,
                      color: "rgb(89,128,142)",
                    },
                  ],
                  globalCoord: true,
                },
              },
              emphasis: {
                areaColor: "rgb(46,229,266)",
                borderWidth: 0.1,
              },
            },
          },
          // 关于地图中散点图的配置
          {
            type: "effectScatter", // 散点图
            coordinateSystem: "geo",
            showEffectOn: "render",
            symbolSize: 10, //散点大小
            zlevel: 1,
            data: points,
            rippleEfffect: {
              //涟漪特效相关配置
              period: 15,
              scale: 4,
              brushType: "fill",
            },
          },
          // 关于地图中线路动画效果设置
          {
            type: "lines",
            zlevel: 2,
            effect: {
              show: true,
              period: 4,
              symbol: "arrow",
              symbolSize: 7,
              trailLength: 0.4,
            },
            lineStyle: {
              normal: {
                color: "#34erd3",
                width: 1,
                opacity: 0.1,
              },
            },
            data: [
              {
                coords: [
                  [119, 31],
                  [119, 34],
                ],
                lineStyle: { color: "#4ab2e5" },
              },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss">
.travel-map {
  width: 100%;
  #main {
    width: 100%;
    height: 600px;
  }
}
</style>
