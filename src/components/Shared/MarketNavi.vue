<template>
  <div class="m2bn">
    <el-row>
      <!-- 导航列 -->
      <el-col :span="4">
        <!-- 导航 -->
        <el-menu default-active="0" text-color="#82b229">
          <!-- 项目 -->
          <el-menu-item
            v-for="(item, index) in info.navi"
            :key="index"
            :index="index.toString()"
            v-on:mouseenter.native="mouseEnterNavi(index)"
            v-on:mouseleave.native="mouseLeaveNavi"
          >
            <template slot="title">
              <span v-if="item.name">{{ item.name }}</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-col>
      <!-- 内容列 -->
      <el-col :span="20">
        <!-- 浮动 -->
        <div class="floatBoardMaster">
          <div
            v-show="isOnNavi || isOnBoard"
            class="floatBoard"
            v-on:mouseenter="mouseEnterBoard"
            v-on:mouseleave="mouseLeaveBoard"
          >
            <!-- 包裹a -->
            <div
              v-for="(item, index) in info.navi[currentIndex].subs"
              :key="index"
            >
              <a class="items" :href="item.url">{{ item.name }}</a>
            </div>
          </div>
        </div>
        <div class="naviImage">
          <img :src="info.img" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["dataUrl"],
  data() {
    return {
      currentIndex: "0",
      isOnNavi: false,
      isOnBoard: false,
      info: {
        navi: [
          {
            name: "demo",
            subs: [
              {
                name: "demo",
                url: "",
              },
            ],
          },
        ],
        img: "",
      },
    };
  },
  beforeMount() {
    this.getNavi();
  },
  methods: {
    getNavi: function () {
      this.axios({
        method: "get",
        url: this.dataUrl,
      }).then((response) => {
        this.info = response.data;
      });
    },
    mouseEnterNavi: function (index) {
      this.currentIndex = index;
      this.isOnNavi = true;
    },
    mouseLeaveNavi: function () {
      this.isOnNavi = false;
    },
    mouseEnterBoard: function () {
      this.isOnBoard = true;
    },
    mouseLeaveBoard: function () {
      this.isOnBoard = false;
    },
  },
};
</script>

<style>
.m2bn {
  margin: 20px auto 0 auto;
  width: 1000px;
}
div.floatBoardMaster {
  top: 0;
  position: absolute;
}
div.floatBoard {
  border: 1px solid #82b229;
  background: white;
  width: 600px;
  min-height: 200px;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
}
a.items {
  text-decoration: none;
  margin: 10px;
  color: black;
}
a.items:hover {
  color: #82b229;
}
.naviImage {
  height: 280px;
  width: 100%;
  overflow: hidden;
}
.naviImage img {
  width: 100%;
}
</style>