<template>
  <div>
    <v-chart class="chart" :option="option" theme="echartsTheme" />
  </div>
</template>

<script>
import VChart from "vue-echarts";
import china from "../../../static/PriceMap/china";
import "../../../theme/echartsTheme.js";

export default {
  components: {
    VChart,
  },
  data() {
    return {
      option: {
        tooltip: {
          // 鼠标移到图里面的浮动提示框
          // formatter详细配置： https://echarts.baidu.com/option.html#tooltip.formatter
          formatter(params) {
            // params.data 就是series配置项中的data数据遍历
            let localValue, onlineValue;
            if (params.data) {
              localValue = params.data.value[0];
              onlineValue = params.data.value[1];
            } else {
              // 为了防止没有定义数据的时候报错写的
              localValue = 0;
              onlineValue = 0;
            }
            let htmlStr = `
          <div style='font-size:18px;'> ${params.name}</div>
          <p style='text-align:left;'>
              当地市场价：${localValue}<br/>
              平台价格：${onlineValue}<br/>
          </p>
        `;
            return htmlStr;
          },
          backgroundColor: "#ff7f50", //提示标签背景颜色
          textStyle: { color: "#fff" }, //提示标签字体颜色
        },
        visualMap: {
          show: true,
          bottom: 60,
          right: 100,
          text: ["价格"],
          min: 195, //最小值
          max: 205, //最大值
          dimension: 0, //对应data中value数组下标
          //   precision:0,
          itemHeight: 200,
          color: [
            // "#5475f5",
            "#9feaa5",
            "#85daef",
            "#74e2ca",
            // "#e6ac53",
            // "#9fb5ea",
          ],
        },
        // geo配置详解： https://echarts.baidu.com/option.html#geo
        geo: {
          // 地理坐标系组件用于地图的绘制
          map: "china", // 表示中国地图
          // roam: true, // 是否开启鼠标缩放和平移漫游
          zoom: 1.2, // 当前视角的缩放比例（地图的放大比例）
          label: {
            // show: true
          },
          itemStyle: {
            // 地图区域的多边形 图形样式。
            //未选中的状态
            borderColor: "#979b99",
            areaColor: "#D8E9FD", //背景颜色
            label: {
              // show: true, //显示名称
            },
          },
          emphasis: {
            itemStyle: {
              //选中的状态
              // 高亮状态下的多边形和标签样式
              shadowBlur: 20,
              shadowColor: "rgba(0, 0, 0, 0.5)",
              borderColor: "#fff",
              areaColor: "#D8E9FD",
            },
          },
        },
        series: [
          {
            name: "地图", // 浮动框的标题（上面的formatter自定义了提示框数据，所以这里可不写）
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            // 这是需要配置地图上的某个地区的数据，根据后台的返回的数据进行拼接（下面是我定义的假数据）
            data: [
              {
                name: "内蒙古",
                value: [599, 300], //  项目数量
              },
            ],
          },
        ],
      },
    };
  },
  beforeMount() {
    this.generateData();
  },
  methods: {
    generateData: function () {
      let city = [
        "河北",
        "山西",
        "辽宁",
        "吉林",
        "黑龙江",
        "江苏",
        "浙江",
        "安徽",
        "福建",
        "江西",
        "山东",
        "河南",
        "湖北",
        "湖南",
        "广东",
        "海南",
        "四川",
        "贵州",
        "云南",
        "陕西",
        "甘肃",
        "青海",
        "台湾",
        "内蒙古",
        "广西",
        "西藏",
        "宁夏",
        "新疆",
        "北京",
        "天津",
        "上海",
        "重庆",
        "香港",
        "澳门",
        "南海诸岛",
      ];
      let value1 = 200;
      let value2 = 180;
      let data = [];
      for (let i in city) {
        let info = {
          name: city[i],
          value: [value1 + Math.round(Math.random() * 10) - 5, value2],
        };
        data.push(info);
      }
      this.option.series[0].data = data;
    },
  },
};
</script>

<style scoped>
.chart {
  width: 1000px;
  height: 400px;
  margin: 20px auto 0 auto;
}
</style>