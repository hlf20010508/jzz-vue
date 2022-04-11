<template>
  <div class="pbg">
    <div class="pbg-div">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="地址">
          <el-input v-model="formInline.address" placeholder="地址"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input
            v-model="formInline.contact"
            placeholder="联系方式"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
        <p class="pbg-p">我们将在3个工作日内与您联系</p>
      </el-form>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      formInline: {
        address: "",
        contact: "",
      },
      bgImage: "",
    };
  },
  beforeMount() {
    this.getBg();
  },
  mounted() {
    $(".pbg").css("background-image", 'url(/static/img/plot/1.jpg)');
  },
  methods: {
    getBg: function () {
      this.axios({
        method: "get",
        url: "/get/plotBg",
      }).then((response) => {
        this.bgImage = response.data.bgImage;
      });
    },
    onSubmit() {
      alert("提交成功！");
    },
  },
};
</script>

<style>
.pbg {
  width: 1000px;
  height: 681.25px;
  margin: 20px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pbg .el-form-item__label {
  color: white;
}
.pbg-p {
  color: white;
  margin: 0;
}
</style>