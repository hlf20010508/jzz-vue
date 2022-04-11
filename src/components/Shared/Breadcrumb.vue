<template>
  <div class="bc">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <span class="bccl">当前位置：</span>
      <el-breadcrumb-item v-for="(item, index) in items" :key="index" :to="item.url">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
    props: ['items']
}
</script>

<style>
.bc{
  width: 1000px;
  margin: 20px auto 0 auto;
}
.bccl{
  margin-left: 10px;
  color: #303133;
  font-weight: 700;
  float: left;
}
</style>