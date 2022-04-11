<template>
  <div>
    <el-row>
      <!-- 左 -->
      <el-col :span="1" :offset="offset">
        <hr :align="align" :width="leftW" color="#82b329" size="2" />
      </el-col>
      <!-- 右 -->
      <el-col :span="1">
        <hr :align="align" :width="rightW" color="#e5e5e5" size="2" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    align: {
      default: "left",
    },
    leftW: {
      default: "30",
    },
    rightW: {
      default: "400",
    },
    offset: {
      default: 1,
    },
  },
};
</script>