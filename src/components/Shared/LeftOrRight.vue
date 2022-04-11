<template>
  <div class="lor">
    <div class="lor-div">
      <el-row>
        <el-col
          class="lor-col-d lor-col"
          :span="12"
          @click.native="change('l')"
        >
          <span>{{left}}</span>
        </el-col>
        <el-col
          class="lor-col-s lor-col"
          :span="12"
          @click.native="change('r')"
        >
          <span>{{right}}</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  props: ['left','right'],
  methods: {
    change: function (tag) {
      if (tag == "l") {
        $(".lor-col-d").css("background", "#82b329");
        $(".lor-col-s").css("background", "white");
      } else {
        $(".lor-col-s").css("background", "#82b329");
        $(".lor-col-d").css("background", "white");
      }
      this.$emit('setLR',tag)
    },
  },
};
</script>

<style>
.lor {
  width: 1000px;
  margin: 20px auto 0 auto;
}
.lor-div{
  width: 500px;
  margin: 0 auto;
}
.lor-col {
  background: #82b329;
  height: 40px;
}
.lor-col span {
  line-height: 40px;
  font-size: 16px;
  color: #606266;
}
.lor-col-d {
  background: #82b329;
}
.lor-col-s {
  background: white;
}
</style>