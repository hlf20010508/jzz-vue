<template>
  <el-row class="sb">
    <el-col :span="21">
      <el-input placeholder="搜索" prefix-icon="el-icon-search" v-model="input">
      </el-input>
    </el-col>
    <el-col :span="3">
      <div class="sb-button">
        <div>
          <el-button type="primary" plain>搜索</el-button>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style>
div.sb {
  margin: 20px auto 0 auto;
  width: 1000px;
}
.sb-button{
  width: 100%;
  display: flex;
}
.sb-button div{
  margin: 0 10px 0 auto;
}
</style>