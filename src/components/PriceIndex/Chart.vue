<template>
  <div>
    <v-chart class="chart" :option="option" theme="echartsTheme" />
  </div>
</template>

<script>
import VChart from "vue-echarts";
import "../../../theme/echartsTheme.js";
import * as GetAllDate from "./GetAllDate.js";

function isIn(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (value == arr[i]) {
      return true;
    }
  }
  return false;
}

export default {
  props: ["singleSelect", "data", "startDate", "endDate", "types", "cities"],
  components: {
    VChart,
  },
  data() {
    return {
      dateList: [],
      selectedType: "",
      selectedCity: [],
      option: {
        xAxis: {
          type: "category",
          data: [],
          axisLabel: {
            interval: "auto",
          },
        },
        yAxis: {},
        series: [],
      },
    };
  },
  beforeMount() {
    this.setDate([this.startDate, this.endDate]);
    this.selectedType = this.types[0];
    if (this.singleSelect) {
      this.setDataS();
    } else {
      this.selectedCity = [this.cities[0]];
      this.setData();
    }
  },
  methods: {
    setDate: function (date) {
      this.dateList = GetAllDate.get(date[0], date[1]);
      this.option.xAxis.data = this.dateList;
    },
    setSelectedType: function (st) {
      this.selectedType = st;
    },
    setSelectedCity: function (sc) {
      this.selectedCity = sc;
    },
    setData: function () {
      this.option.series = [];
      let data = this.data.record;
      let st = this.selectedType;
      let sc = this.selectedCity;
      for (let i in data) {
        if (st == data[i].product) {
          for (let j in data[i].city) {
            if (isIn(sc, data[i].city[j].name)) {
              let dataList = [];
              for (let k in data[i].city[j].data) {
                if (isIn(this.dateList, data[i].city[j].data[k].date)) {
                  dataList.push(data[i].city[j].data[k].priceIndex);
                }
              }
              this.option.series.push({
                data: dataList,
                type: "line",
                symbol: "none",
              });
            }
          }
          break;
        }
      }
    },
    setDataS: function () {
      this.option.series = [];
      let data = this.data.record;
      let st = this.selectedType;
      for (let i in data) {
        if (st == data[i].product) {
          let dataList = [];
          for (let j in data[i].data) {
            if (isIn(this.dateList, data[i].data[j].date)) {
              dataList.push(data[i].data[j].priceIndex);
            }
          }
          this.option.series.push({
            data: dataList,
            type: "line",
            symbol: "none",
          });
          break;
        }
      }
    },
  },
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>