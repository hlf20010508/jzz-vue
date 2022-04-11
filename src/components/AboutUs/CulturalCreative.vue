<template>
  <div>
    <TitleH1 :title="title" />
    <el-row class="CC">
      <!-- 简介 -->
      <el-row class="tac">
        <p>{{ text }}</p>
      </el-row>
      <!-- 图片 -->
      <el-row class="tac">
        <el-col :span="8" v-for="(item, index) in imgs" :key="index">
          <img class="imgcc" :src="item" />
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import TitleH1 from "../Shared/TitleH1";

export default {
  components: {
    TitleH1,
  },
  data() {
    return {
      title: "文创赋能",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorem culpa et at nam consequuntur temporibus cumque! Atque praesentium perferendis id, sint autem ratione nemo deserunt numquam illo voluptate totam.",
      imgs: [
        "/static/img/index_images/crafts/1.jpg",
        "/static/img/index_images/crafts/2.jpg",
        "/static/img/index_images/crafts/3.jpg",
      ],
    };
  },
};
</script>

<style>
img.imgcc {
  height: 300px;
}
.CC {
  width: 100%;
  background: white;
}
</style>