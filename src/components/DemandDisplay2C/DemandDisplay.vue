<template>
  <div class="dd2c">
    <div class="dd2c-div" v-for="(item, index) in data.items" :key="index">
      <el-row class="dd2c-user-info">
        <el-col class="dd2c-user-info-left" :span="24">
          <span class="dd2c-span">{{ item.userName }}</span>
        </el-col>
      </el-row>
      <el-row>
        <div class="dd2c-card">
          <el-descriptions :title="item.name" :column="1">
            <template slot="extra">
              <el-button type="primary" size="small"
                >查看详情</el-button
              >
            </template>
            <el-descriptions-item label="发布时间">
              {{ item.time }}
            </el-descriptions-item>
            <el-descriptions-item label="需求分类">
              {{ item.tag }}
            </el-descriptions-item>
            <el-descriptions-item label="需求详情">
              {{ item.detail }}
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </el-row>
      <el-divider class="dd2c-divider"></el-divider>
      <el-row class="dd2c-bottom-row">
        <el-col class="dd2c-bottom" :span="5">
          <span>{{ item.visit }}人浏览</span>
        </el-col>
        <el-col class="dd2c-bottom" :span="5">
          <span>{{ item.comment }}条评论</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import lodash from "lodash";

export default {
  data() {
    return {
      data: {
        items: [
          {
            tag: "demo1",
            userName: "userName",
            time: "time",
            name: "name",
            visit: "100",
            comment: "100",
            detail:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et, minima expedita distinctio dicta iusto unde repudiandae! Ex, deleniti iste.",
          },
        ],
      },
      dataCopy: {
        items: [
          {
            tag: "demo1",
            userName: "userName",
            time: "time",
            name: "name",
            visit: "100",
            comment: "100",
            detail:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et, minima expedita distinctio dicta iusto unde repudiandae! Ex, deleniti iste.",
          },
        ],
      },
    };
  },
  beforeMount() {
    this.getData();
  },
  methods: {
    getData: function () {
      this.axios({
        method: "get",
        url: "/get/demanddisplay2c",
      }).then((response) => {
        this.data = response.data;
        this.dataCopy = lodash.cloneDeep(response.data);
      });
    },
    useTag: function (tag) {
      if (tag == "全部") {
        this.data = lodash.cloneDeep(this.dataCopy);
      } else {
        let items = [];
        for (let index in this.dataCopy.items) {
          if (this.dataCopy.items[index].tag == tag) {
            items.push(this.dataCopy.items[index]);
          }
        }
        this.data.items = items;
      }
    },
  },
};
</script>

<style>
.dd2c {
  width: 1020px;
  display: flex;
  flex-wrap: wrap;
  margin: 20px auto 0 auto;
}
.dd2c-div {
  background: white;
  width: 490px;
  margin: 10px;
}
.dd2c-user-info {
  height: 40px;
  color: #979b99;
  background: #f3f7ea;
}
.dd2c-user-info-left {
  text-align: left;
}
.dd2c-span {
  margin-left: 10px;
  line-height: 40px;
}
.dd2c-card {
  margin: 10px 10px 0 10px;
  height: 206px;
}
.dd2c-divider {
  width: 470px;
  margin: 10px 10px;
}
.dd2c-bottom-row {
  text-align: left;
}
.dd2c-bottom {
  font-size: 14px;
  color: #979b99;
  margin: 0 0 10px 10px;
}
.dd2c .el-descriptions__title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dd2c-card .el-descriptions-item__content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  -webkit-box-align: start;
}
</style>