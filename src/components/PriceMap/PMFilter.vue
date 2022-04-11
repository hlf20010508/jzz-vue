<template>
  <div class="pmf">
    <el-row>
      <el-col :span="2">
        <p class="pmf-p">种类</p>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="classification" placeholder="请选择">
          <el-option
            v-for="item in classifications"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2" :offset="1">
        <p class="pmf-p">城市</p>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="city" placeholder="请选择">
          <el-option
            v-for="item in cities"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classifications: ["竹编", "竹皮", "重竹", "复合竹材", "竹炭"],
      classification: "",
      cities: [
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
      ],
      city: "",
    };
  },
};
</script>

<style>
.pmf {
  width: 1000px;
  background: white;
  margin: 20px auto 0 auto;
  padding: 10px 0;
}
.pmf-p {
  margin: 0 0 0 10px;
  line-height: 28px;
  text-align: left;
}
</style>