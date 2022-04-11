<template>
  <div class="IC">
    <!-- 幻灯片 -->
    <el-carousel
      :interval="5000"
      direction="vertical"
      :height="height"
      @change="zoom"
    >
      <el-carousel-item class="ciic" v-for="(item, index) in imgs" :key="index">
        <!-- 文字 -->
        <div class="p-ic">
          <p class="description">
            {{ item.description }}
          </p>
        </div>
        <!-- 顶开文字 -->
        <div class="for-p-ic"></div>
        <!-- 图片 -->
        <div class="img_IndexPics">
          <img class="IndexPics" :src="item.img" :data-ic-id="index" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import $ from "jquery";
let init_height = "450px"; //大尺寸
let zoom_height = "400px"; //小尺寸

// 图片由大变小
function _zoom(current) {
  let img = $("img[data-ic-id=" + current + "]");
  img.stop()
  img.css("height", init_height); //设置为大尺寸
  img.animate(
    {
      height: zoom_height, //设置为小尺寸
    },
    3500
  );
}

export default {
  data() {
    return {
      height: zoom_height,
      imgs: [
        {
          img: "/static/img/index_images/carousel/0.jpeg",
          description: "Lorem ipsum dolor sit.0",
        },
        {
          img: "/static/img/index_images/carousel/1.jpeg",
          description: "Lorem ipsum dolor sit.1",
        },
        {
          img: "/static/img/index_images/carousel/2.jpeg",
          description: "Lorem ipsum dolor sit.2",
        },
      ],
    };
  },
  mounted() {
    // 第一次变换
    $(function () {
      //div为绝对定位，需要设置长宽，不然图片不显示
      let img = $("img.IndexPics");
      img.css("height", init_height); //设置为大尺寸
      img.animate(
        {
          height: zoom_height, //设置为小尺寸
        },
        3500
      );
    });
  },
  methods: {
    zoom: _zoom,
  },
};
</script>

<style>
div.IC {
  margin: 20px auto 0 auto;
  width: 1000px;
}
.el-carousel__item:nth-child(n) {
  background-color: #dfdfdf;
  display: flex;
}
div.img_IndexPics {
  width: 500px;
  height: 400px;
}
div.p-ic {
  display: flex;
  height: 400px;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
}
p.description {
  margin: 0 20px;
  font-size: 40px;
}
.for-p-ic {
  width: 500px;
  height: 400px;
  flex-shrink: 0;
  overflow: hidden;
}
div.img_IndexPics {
  display: inline-block;
  position: absolute;
  right: 0;
  overflow: hidden;
}
img.IndexPics {
  position: absolute;
  right: 0;
}
</style>
