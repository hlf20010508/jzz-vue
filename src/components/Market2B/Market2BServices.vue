<template>
  <div class="m2bs">
    <el-row :gutter="20">
      <el-col :span="10">
        <div class="m2bsCol">
          <el-row>
            <el-col class="m2bsSep" :span="1">
              <hr align="center" width="1" color="#82b229" size="20" />
            </el-col>
            <el-col :span="16" class="m2bsTitle"> 价格指数 </el-col>
            <el-col :span="4" class="m2bsMore">
              <router-link class="m2bsA" to="/priceindex">
                更多
                <i class="el-icon-arrow-right"></i>
              </router-link>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="m2bspdiv">
                <p class="m2bspi1">{{ data.Indexs[0].name }}今日指数</p>
                <p class="m2bspi2">{{ data.Indexs[0].index }}</p>
                <p class="m2bspi1">{{ data.Indexs[0].date }}</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="m2bspdiv">
                <p class="m2bspi3">与昨日比</p>
                <p class="m2bspi3">与上周比</p>
                <p class="m2bspi3">与上月比</p>
                <p class="m2bspi3">与去年同期比</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="m2bspdiv">
                <p class="m2bspi4">{{contrast[0].yesterday}}</p>
                <p class="m2bspi4">{{contrast[0].lastWeek}}</p>
                <p class="m2bspi4">{{contrast[0].lastMonth}}</p>
                <p class="m2bspi4">{{contrast[0].lastYear}}</p>
              </div>
            </el-col>
          </el-row>
          <el-divider class="m2bsdivider"></el-divider>
          <el-row>
            <el-col :span="8">
              <div class="m2bspdiv">
                <p class="m2bspi1">{{ data.Indexs[1].name }}今日指数</p>
                <p class="m2bspi2">{{ data.Indexs[1].index }}</p>
                <p class="m2bspi1">{{ data.Indexs[1].date }}</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="m2bspdiv">
                <p class="m2bspi3">与昨日比</p>
                <p class="m2bspi3">与上周比</p>
                <p class="m2bspi3">与上月比</p>
                <p class="m2bspi3">与去年同期比</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="m2bspdiv">
                <p class="m2bspi4">{{contrast[1].yesterday}}</p>
                <p class="m2bspi4">{{contrast[1].lastWeek}}</p>
                <p class="m2bspi4">{{contrast[1].lastMonth}}</p>
                <p class="m2bspi4">{{contrast[1].lastYear}}</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="m2bsCol">
          <el-row>
            <el-col class="m2bsSep" :span="1">
              <hr align="center" width="1" color="#82b229" size="20" />
            </el-col>
            <el-col :span="22" class="m2bsTitle"> 实时成交动态 </el-col>
          </el-row>
          <el-row class="m2bscdr">
            <div class="m2bscdbbox">
              <div v-for="index in 2" :key="index" :class="'m2bscdd' + index">
                <el-row
                  class="m2bsr1"
                  v-for="(item, index) in data.RecentDeals"
                  :key="index"
                >
                  <el-col :span="6">
                    <p class="p1">{{ item.name }}</p>
                  </el-col>
                  <el-col :span="12">
                    <p class="p1">{{ item.amount }}</p>
                  </el-col>
                  <el-col :span="6">
                    <p class="p2">{{ item.time }}</p>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="m2bsCol">
          <div class="m2bsbuttondiv">
            <div>
              <el-button type="primary" plain @click="routerTo(1)"
                >文创设计服务</el-button
              >
              <el-button type="success" plain @click="routerTo(2)"
                >加工服务</el-button
              >
              <el-button type="danger" plain @click="routerTo(3)"
                >价格地图</el-button
              >
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import $ from "jquery";
import * as GetAllDate from "../PriceIndex/GetAllDate";

export default {
  data() {
    return {
      data: {
        Indexs: [
          {
            name: "demo1",
            index: "demo2",
            date: "demo3",
          },
          {
            name: "demo1",
            index: "demo2",
            date: "demo3",
          },
        ],
        RecentDeals: [
          {
            name: "demo1",
            amount: "demo2",
            time: "demo3",
          },
        ],
      },
      contrast: [
        {
          yesterday: "- 持平",
          lastWeek: "- 持平",
          lastMonth: "⬇ 0.14%",
          lastYear: "⬆ 2.54%",
        },
        {
          yesterday: "- 持平",
          lastWeek: "- 持平",
          lastMonth: "⬇ 0.56%",
          lastYear: "⬆ 4.03%",
        },
      ],
    };
  },
  beforeMount() {
    this.getData();
  },
  updated() {
    let time = this.scroll();
    window.setInterval(this.scroll, time);
  },
  methods: {
    getData: function () {
      this.axios({
        method: "get",
        url: "/get/market2bservices",
      }).then((response) => {
        this.data = response.data;
        let end = new Date();
        let endDate = GetAllDate.format(end);
        this.data.Indexs[0].date = endDate;
        this.data.Indexs[1].date = endDate;
      });
    },
    scroll: function () {
      let box = $(".m2bscdd1");
      let size = box.children().length;
      let scrollTime = size * 1000;
      let height = size * box.children().height() + "px";
      box.stop();
      box.css("margin-top", 0);
      box.animate(
        {
          marginTop: "-" + height,
        },
        scrollTime,
        "linear"
      );
      return scrollTime;
    },
    routerTo: function (index) {
      if (index == 1) {
        this.$router.push("/culturalcreative");
      } else if (index == 2) {
        this.$router.push("/produce");
      } else {
        this.$router.push("/pricemap");
      }
    },
  },
};
</script>

<style>
.m2bs {
  width: 1000px;
  margin: 20px auto 0 auto;
}
.m2bsCol {
  height: 298px;
  background: white;
}
.m2bsSep {
  padding-left: 20px;
  padding-top: 15px;
}
.m2bsSep hr {
  margin: 0;
}
.m2bsTitle {
  text-align: left;
  padding-left: 10px;
  padding-top: 15px;
}
.m2bsMore {
  padding-top: 15px;
}
.m2bsA {
  text-decoration: none;
  color: #82b229;
}
.m2bsdivider {
  margin: auto;
  width: 80%;
}
.m2bspdiv {
  margin: 10px 0;
  width: 110px;
  height: 110px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.m2bspi1 {
  margin: 6px;
  font-size: 12px;
  color: #999999;
}
.m2bspi2 {
  margin: 0;
  font-size: 18px;
}
.m2bspi3 {
  margin: 4px;
  font-size: 14px;
  color: #666666;
}
.m2bspi4 {
  margin: 4px;
  line-height: 20px;
  font-size: 14px;
}
.m2bsr1 {
  margin: 10px 0;
  font-size: 14px;
}
.m2bsbuttondiv {
  height: 298px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.m2bsbuttondiv .el-button {
  width: 120px;
  margin: 20px 0;
}
.m2bsr1 {
  margin: 0;
}
.m2bsr1 .span1 {
  text-align: left;
}
.m2bsr1 .p1 {
  text-align: left;
  margin: 8px 0 8px 20px;
}
.m2bsr1 .p2 {
  text-align: right;
  margin: 8px 20px 8px 0;
}
.m2bscdr {
  height: 261px;
  padding: 10px 0;
}
.m2bscdbbox {
  height: 100%;
  overflow: hidden;
}
</style>