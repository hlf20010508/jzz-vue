<template>
  <div class="ptmf">
    <el-row>
      <el-col :span="2">
        <p class="ptmf-p">专利类型</p>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="type" placeholder="请选择">
          <el-option
            v-for="item in types"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2" :offset="1">
        <p class="ptmf-p">价格区间</p>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="priceRange" placeholder="请选择">
          <el-option
            v-for="item in priceRanges"
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
      types: ["技术", "设计"],
      type: "",
      priceRanges: ["100-200", "200-300", "300-400", "400-500", "500-600"],
      priceRange: "",
    };
  },
};
</script>

<style>
.ptmf {
  width: 1000px;
  background: white;
  margin: 20px auto 0 auto;
  padding: 10px 0;
}
.ptmf-p {
  margin: 0 0 0 10px;
  line-height: 28px;
  text-align: left;
}
</style>