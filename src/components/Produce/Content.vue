<template>
  <div class="pc">
    <LeftOrRight :left="'列表'" :right="'地图'" @setLR="setLM" />
    <div v-if="tag=='l'">
      <div class="pc-type">
        <el-row>
          <el-col :span="2">
            <p class="pc-p">所在地</p>
          </el-col>
          <el-col :span="4">
            <el-select v-model="location" size="mini" placeholder="请选择">
              <el-option
                v-for="item in cities"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">
                  {{ item.value }}
                </span>
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="2" :offset="1">
            <p class="pc-p">企业名</p>
          </el-col>
          <el-col :span="4">
            <el-input size="mini" v-model="facName"></el-input>
          </el-col>
          <el-col :span="2" :offset="4">
            <el-button size="mini" type="primary" @click="query"
              >查询</el-button
            >
          </el-col>
        </el-row>
        <el-row class="pc-row2">
          <el-col :span="2">
            <p class="pc-ab-button">加工能力</p>
          </el-col>
          <el-col class="pc-ab" :span="22">
            <el-button
              v-for="(item, index) in ability"
              :key="index"
              type="text"
              @click="changeAbility(index)"
              >{{ item }}</el-button
            >
          </el-col>
        </el-row>
      </div>
      <div class="pc-fac">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="name" label="加工厂名称" width="300">
          </el-table-column>
          <el-table-column prop="ability" label="加工能力" width="200">
          </el-table-column>
          <el-table-column prop="location" label="所在区域" width="300">
          </el-table-column>
          <el-table-column width="200">
            <template slot-scope="scope">
              <el-button @click="enter(scope.row)" type="text" size="small">
                进入店铺
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <Map v-else/>
  </div>
</template>

<script>
import LeftOrRight from "../Shared/LeftOrRight";
import Map1 from "./Map";

export default {
  components: {
    LeftOrRight,
    Map,
  },
  data() {
    return {
      location: "",
      facName: "",
      tag: "l",
      cities: [
        {
          value: "Beijing",
          label: "北京",
        },
      ],
      ability: ["ability1"],
      tableData: [
        {
          name: "name1",
          ability: "ability1",
          location: "location1",
        },
      ],
    };
  },
  beforeMount() {
    this.getData();
  },
  methods: {
    getData: function () {
      this.axios({
        method: "get",
        url: "/get/produce",
      }).then((response) => {
        this.ability = response.data.ability;
        this.tableData = response.data.tableData;
      });
    },
    setLM: function (tag) {
      this.tag = tag;
    },
    query: function () {},
    changeAbility: function () {},
    enter: function () {},
  },
};
</script>

<style>
.pc {
  width: 1000px;
  margin: 20px auto 0 auto;
}
.pc-type {
  width: 100%;
  background: white;
  padding-top: 10px;
  margin-top: 20px;
}
.pc-fac {
  width: 100%;
  background: white;
  margin-top: 20px;
}
.pc-p {
  margin: 0 0 0 10px;
  line-height: 28px;
  text-align: left;
  font-size: 14px;
}
.pc-ab {
  text-align: left;
}
.pc-ab-button {
  margin: 0 0 0 10px;
  line-height: 40px;
  text-align: left;
  font-size: 14px;
}
.pc-row2 {
  margin-top: 10px;
}
</style>