<template>
  <div class="opi">
    <el-row :gutter="10">
      <el-col :span="12">
        <div class="opi-col">
          <el-row>
            <el-col :span="1">
              <hr align="center" width="1" color="#82b229" size="20" />
            </el-col>
            <el-col :span="19" class="opi-title">
              <p>最新求购信息</p>
            </el-col>
          </el-row>
          <TypeSelect
            :name="offlineType.name"
            :items="offlineType.items"
            :max="offlineType.max"
            @getSelected="getSelectedType"
          />
          <TypeSelect
            :name="offlineCity.name"
            :items="offlineCity.items"
            :max="offlineCity.max"
            @getSelected="getSelectedCity"
          />
          <DatePicker
            @getDate="getDate"
            :startDate="startDate"
            :endDate="endDate"
          />
          <Chart
            :singleSelect="false"
            ref="chart"
            :data="data"
            :startDate="startDate"
            :endDate="endDate"
            :types="offlineType.items"
            :cities="offlineCity.items"
          />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="opi-col">
          <el-row>
            <el-col :span="1">
              <hr align="center" width="1" color="#82b229" size="20" />
            </el-col>
            <el-col :span="19" class="opi-title">
              <p>最新求购信息</p>
            </el-col>
          </el-row>
          <TypeSelect
            :name="offlineType.name"
            :items="offlineType.items"
            :max="offlineType.max"
            @getSelected="getSelectedTypeS"
          />
          <div class="opi-transp"></div>
          <DatePicker
            @getDate="getDateS"
            :startDate="startDate"
            :endDate="endDate"
          />
          <Chart
            :singleSelect="true"
            ref="chartS"
            :data="dataS"
            :startDate="startDate"
            :endDate="endDate"
            :types="offlineType.items"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TypeSelect from "./TypeSelect";
import DatePicker from "./DatePicker";
import Chart from "./Chart";
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
  components: {
    TypeSelect,
    DatePicker,
    Chart,
  },
  data() {
    return {
      startDate: "",
      endDate: "",
      dateList: [],
      data: {
        record: [
          {
            product: "item",
            city: [
              {
                name: "city",
                data: [
                  {
                    date: "2001-05-08",
                    priceIndex: "148",
                  },
                ],
              },
            ],
          },
        ],
      },
      dataS: {
        record: [
          {
            product: "item",
            data: [
              {
                date: "2001-05-08",
                priceIndex: "148",
              },
            ],
          },
        ],
      },
      dataCopy: null,
      offlineType: {
        name: "品种：（单选）",
        items: ["item"],
        max: 1,
      },
      offlineCity: {
        name: "城市：（最多选4个）",
        items: ["city"],
        max: 4,
      },
    };
  },
  beforeMount() {
    // this.getData();
    let end = new Date();
    let start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
    this.startDate = GetAllDate.format(start);
    this.endDate = GetAllDate.format(end);
    start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 100);
    this.generateData(GetAllDate.format(start), this.endDate);
    this.generateDataS();
  },
  methods: {
    generateData: function (start, end) {
      let data = {
        record: [],
      };
      this.dateList = GetAllDate.get(start, end);
      let date = this.dateList;
      let product = ["竹编", "竹皮", "重竹", "复合竹材", "竹炭"];
      let priceIndex = [50, 30, 200,150,20];
      let city = [
        "江苏",
        "浙江",
        "福建",
        "湖南",
        "四川",
        "重庆",
      ];
      for (let i in product) {
        let temp1 = {
          product: product[i],
          city: [],
        };
        for (let j in city) {
          let temp2 = {
            name: city[j],
            data: [],
          };
          for (let k in date) {
            let temp3 = {
              date: date[k],
              priceIndex: priceIndex[i] + Math.round(Math.random() * 20) - 10,
            };
            temp2.data.push(temp3);
          }
          temp1.city.push(temp2);
        }
        data.record.push(temp1);
      }
      this.data = data;
      this.offlineType.items = product;
      this.offlineCity.items = city;
    },
    generateDataS: function () {
      let data = {
        record: [],
      };
      let date = this.dateList;
      let product = ["竹编", "竹皮", "重竹", "复合竹材", "竹炭"];
      let priceIndex = [45, 25, 195,145,15];
      for (let i in product) {
        let temp1 = {
          product: product[i],
          data: [],
        };
        for (let j in date) {
          let temp2 = {
            date: date[j],
            priceIndex: priceIndex[i] + Math.round(Math.random() * 20) - 10,
          };
          temp1.data.push(temp2);
        }
        data.record.push(temp1);
      }
      this.dataS = data;
    },
    getDate: function (date) {
      this.$refs.chart.setDate(date);
      this.$refs.chart.setData();
    },
    getDateS: function (date) {
      this.$refs.chartS.setDate(date);
      this.$refs.chartS.setDataS();
    },
    getSelectedType: function (selected) {
      this.$refs.chart.setSelectedType(selected);
      this.$refs.chart.setData();
    },
    getSelectedTypeS: function (selected) {
      this.$refs.chartS.setSelectedType(selected);
      this.$refs.chartS.setDataS();
    },
    getSelectedCity: function (selected) {
      this.$refs.chart.setSelectedCity(selected);
      this.$refs.chart.setData();
    },
  },
};
</script>

<style>
.opi {
  width: 1020px;
  margin: 20px auto 0 auto;
}
.opi-title {
  text-align: left;
  height: 36px;
}
.opi-title p {
  margin: 0 0;
  line-height: 36px;
}
.opi-chart {
  width: 400px;
  height: 400px;
}
.opi-col {
  background: white;
}
.opi-transp {
  height: 143px;
}
</style>