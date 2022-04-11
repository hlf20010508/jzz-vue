<template>
  <div class="sad">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="sadCol">
          <el-row>
            <el-col class="sadSep" :span="1">
              <hr align="center" width="1" color="#82b229" size="20" />
            </el-col>
            <el-col :span="19" class="sadNewSTitle"> 最新求购信息 </el-col>
            <el-col :span="4" class="sadMore">
              <router-link class="sadA" to="/demanddisplay2b">
                更多
                <i class="el-icon-arrow-right"></i>
              </router-link>
            </el-col>
          </el-row>
          <el-row>
            <el-table class="sadTable" :data="tableData.tableDataLeft">
              <el-table-column prop="name" label="商品名称" width="150">
              </el-table-column>
              <el-table-column prop="price" label="价格" width="80">
              </el-table-column>
              <el-table-column prop="amount" label="数量" width="90">
              </el-table-column>
              <el-table-column prop="location" label="交货地" width="80">
              </el-table-column>
              <!-- <el-table-column prop="time" label="发货时间" width="80">
              </el-table-column> -->
              <el-table-column width="80">
                <template slot-scope="scope">
                  <el-button
                    @click="handleClickLeft(scope.row)"
                    type="text"
                    size="small"
                    >查看详情</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="sadCol">
          <el-row>
            <el-col class="sadSep" :span="1">
              <hr align="center" width="1" color="#82b229" size="20" />
            </el-col>
            <el-col :span="19" class="sadNewSTitle"> 最新供应信息 </el-col>
            <el-col :span="4" class="sadMore">
              <router-link class="sadA" to="/demanddisplay2b">
                更多
                <i class="el-icon-arrow-right"></i>
              </router-link>
            </el-col>
          </el-row>
          <el-row>
            <el-table class="sadTable" :data="tableData.tableDataRight">
              <el-table-column prop="name" label="商品名称" width="200">
              </el-table-column>
              <el-table-column prop="price" label="价格" width="100">
              </el-table-column>
              <el-table-column prop="location" label="交货地" width="100">
              </el-table-column>
              <!-- <el-table-column prop="time" label="发布时间" width="80">
              </el-table-column> -->
              <el-table-column width="80">
                <template slot-scope="scope">
                  <el-button
                    @click="handleClickRight(scope.row)"
                    type="text"
                    size="small"
                    >查看详情</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: {
        tableDataLeft: [
          {
            name: "demo",
            price: "demo",
            amount: "demo",
            location: "demo",
            time: "demo",
          },
        ],
        tableDataRight: [
          {
            name: "demo",
            price: "demo",
            location: "demo",
            time: "demo",
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
        url: "/get/supplyanddemand",
      }).then((response) => (this.tableData = response.data));
    },
    handleClickLeft: function (row) {},
    handleClickRight: function (row) {},
  },
};
</script>

<style>
.sad {
  width: 1000px;
  margin: 20px auto 0 auto;
}
.sadCol {
  background: white;
}
.sadSep {
  padding-left: 20px;
  padding-top: 15px;
}
.sadSep hr {
  margin: 0;
}
.sadNewSTitle {
  text-align: left;
  padding-left: 10px;
  padding-top: 15px;
}
.sadMore {
  padding-top: 15px;
  padding-right: 20px;
}
.sadA {
  text-decoration: none;
  color: #82b229;
}
.sadTable {
  width: 100%;
  padding: 0 10px;
}
.sadTable .el-table__cell{
  padding: 6px 0;
}
.sadTable .cell{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.el-table table{
  width: 0px;
}
</style>