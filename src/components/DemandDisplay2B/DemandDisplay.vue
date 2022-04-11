<template>
  <div>
    <div class="dosd" v-if="DS == 'l'">
      <div class="dosd-div" v-for="(item, index) in dataD.items" :key="index">
        <el-row class="dosd-user-info">
          <el-col class="dosd-user-info-left" :span="24">
            <span class="dosd-span">{{ item.userName }}</span>
          </el-col>
        </el-row>
        <el-row>
          <div class="dosd-card dosd-card1">
            <el-descriptions
              style="height: 240px"
              :title="item.name"
              :column="2"
            >
              <template slot="extra">
                <el-button type="primary" size="small">查看详情</el-button>
              </template>
              <el-descriptions-item label="需求分类">
                {{ item.tag }}
              </el-descriptions-item>
              <el-descriptions-item label="交货地点">
                {{ item.location }}
              </el-descriptions-item>
              <el-descriptions-item label="发布时间">
                {{ item.time }}
              </el-descriptions-item>
              <el-descriptions-item label="截止时间">
                {{ item.timeD }}
              </el-descriptions-item>
              <el-descriptions-item label="价格意向">
                {{ item.price }}
              </el-descriptions-item>
              <el-descriptions-item label="求购数量">
                {{ item.amount }}
              </el-descriptions-item>
              <el-descriptions-item label="买家要求">
                {{ item.detail }}
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </el-row>
        <el-divider class="dosd-divider"></el-divider>
        <el-row class="dosd-bottom-row">
          <el-col class="dosd-bottom" :span="5">
            <span>{{ item.visit }}人浏览</span>
          </el-col>
          <el-col class="dosd-bottom" :span="5">
            <span>{{ item.comment }}条评论</span>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="dosd" v-else>
      <div class="dosd-div" v-for="(item, index) in dataS.items" :key="index">
        <el-row class="dosd-user-info">
          <el-col class="dosd-user-info-left" :span="24">
            <span class="dosd-span">{{ item.userName }}</span>
          </el-col>
        </el-row>
        <el-row>
          <div class="dosd-card">
            <el-descriptions :title="item.name" :column="2">
              <template slot="extra">
                <el-button type="primary" size="small">查看详情</el-button>
              </template>
              <el-descriptions-item label="商品分类">
                {{ item.tag }}
              </el-descriptions-item>
              <el-descriptions-item label="交货地点">
                {{ item.location }}
              </el-descriptions-item>
              <el-descriptions-item label="发布时间">
                {{ item.time }}
              </el-descriptions-item>
              <el-descriptions-item label="参考价格">
                {{ item.price }}
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </el-row>
        <el-divider class="dosd-divider"></el-divider>
        <el-row class="dosd-bottom-row">
          <el-col class="dosd-bottom" :span="5">
            <span>{{ item.visit }}人浏览</span>
          </el-col>
          <el-col class="dosd-bottom" :span="5">
            <span>{{ item.comment }}条评论</span>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import lodash from "lodash";

export default {
  data() {
    return {
      DS: "l",
      dataD: {
        items: [
          {
            tag: "demo1",
            userName: "userName",
            time: "time",
            timeD: "timeD",
            price: "price",
            amount: "amount",
            location: "location",
            name: "name",
            visit: "100",
            comment: "100",
            detail:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et, minima expedita distinctio dicta iusto unde repudiandae! Ex, deleniti iste.",
          },
        ],
      },
      dataDCopy: {
        items: [
          {
            tag: "demo1",
            userName: "userName",
            time: "time",
            timeD: "timeD",
            price: "price",
            amount: "amount",
            location: "location",
            name: "name",
            visit: "100",
            comment: "100",
            detail:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et, minima expedita distinctio dicta iusto unde repudiandae! Ex, deleniti iste.",
          },
        ],
      },
      dataS: {
        items: [
          {
            tag: "demo1",
            userName: "userName",
            time: "time",
            price: "price",
            location: "location",
            name: "name",
            visit: "100",
            comment: "100",
          },
        ],
      },
      dataSCopy: {
        items: [
          {
            tag: "demo1",
            userName: "userName",
            time: "time",
            price: "price",
            location: "location",
            name: "name",
            visit: "100",
            comment: "100",
          },
        ],
      },
    };
  },
  beforeMount() {
    this.getDataD();
    this.getDataS();
  },
  methods: {
    getDataD: function () {
      this.axios({
        method: "get",
        url: "/get/demanddisplay2bd",
      }).then((response) => {
        this.dataD = response.data;
        this.dataDCopy = lodash.cloneDeep(response.data);
      });
    },
    getDataS: function () {
      this.axios({
        method: "get",
        url: "/get/demanddisplay2bs",
      }).then((response) => {
        this.dataS = response.data;
        this.dataSCopy = lodash.cloneDeep(response.data);
      });
    },
    useTag: function (tag) {
      if (this.DS == "l") {
        if (tag == "全部") {
          this.dataD = lodash.cloneDeep(this.dataDCopy);
        } else {
          let items = [];
          for (let index in this.dataDCopy.items) {
            if (this.dataDCopy.items[index].tag == tag) {
              items.push(this.dataDCopy.items[index]);
            }
          }
          this.dataD.items = items;
        }
      } else {
        if (tag == "全部") {
          this.dataS = lodash.cloneDeep(this.dataSCopy);
        } else {
          let items = [];
          for (let index in this.dataSCopy.items) {
            if (this.dataSCopy.items[index].tag == tag) {
              items.push(this.dataSCopy.items[index]);
            }
          }
          this.dataS.items = items;
        }
      }
    },
    setDS: function (tag) {
      this.DS = tag;
    },
  },
};
</script>

<style>
.dosd {
  width: 1020px;
  display: flex;
  flex-wrap: wrap;
  margin: 20px auto 0 auto;
}
.dosd-div {
  background: white;
  width: 490px;
  margin: 10px;
}
.dosd-user-info {
  height: 40px;
  color: #979b99;
  background: #f3f7ea;
}
.dosd-user-info-left {
  text-align: left;
}
.dosd-span {
  margin-left: 10px;
  line-height: 40px;
}
.dosd-card {
  margin: 10px 10px 0 10px;
}
.dosd-divider {
  width: 470px;
  margin: 10px 10px;
}
.dosd-bottom-row {
  text-align: left;
}
.dosd-bottom {
  font-size: 14px;
  color: #979b99;
  margin: 0 0 10px 10px;
}
.dosd .el-descriptions__title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dosd-card1 .el-descriptions-item__content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  -webkit-box-align: start;
}
</style>