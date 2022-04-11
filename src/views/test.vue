<template>
  <div class="master">
    <el-row :gutter="20">
      <el-col :span="6"><div class="test"></div></el-col>
      <el-col :span="6"><div class="test"></div></el-col>
      <el-col :span="6"><div class="test"></div></el-col>
      <el-col :span="6"><div class="test"></div></el-col>
    </el-row>
  </div>
</template>

<style>
div.master{
    width: 1000px;
    margin: 0 auto;
}
div.test{
    height: 40px;
    width: 100%;
    background: red;
}
</style>