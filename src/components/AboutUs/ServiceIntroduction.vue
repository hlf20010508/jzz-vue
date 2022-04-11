<template>
  <div>
    <TitleH1 :title="title" />
    <!-- 上部分 -->
    <el-row class="tac">
      <!-- 左列 -->
      <el-col :span="5">
        <!-- 导航栏 -->
        <el-menu
          default-active="0"
          background-color="#4f5b7e"
          text-color="#fff"
          active-text-color="#82b329"
          @select="change"
        >
          <!-- 每个项目 -->
          <el-menu-item
            class="sielmi"
            v-for="(item, index) in navi"
            :index="index.toString()"
            :key="index"
          >
            <!-- 项目名 -->
            <span slot="title" class="navi">{{ item }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <!-- 右列 -->
      <el-col class="detail" :span="19">
        <!-- 标题 -->
        <el-row>
          <el-col :offset="1">
            <h2 class="dt">{{ details[currentIndex].title }}</h2>
          </el-col>
        </el-row>
        <Seperator :rightW="700" />
        <!-- 内容 -->
        <el-row>
          <el-col :span="30" :offset="1">
            <p class="dt">{{ details[currentIndex].detail }}</p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!-- 下部分 -->
    <el-row class="tac1">
      <!-- 各个项目 -->
      <el-col :span="6" v-for="(item, index) in advantages" :key="index">
        <!-- 图片 -->
        <img :src="item.icon" />
        <!-- 文字 -->
        <p>{{ item.text }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TitleH1 from "../Shared/TitleH1";
import Seperator from "../Shared/Seperator";

export default {
  components: {
    TitleH1,
    Seperator,
  },
  data() {
    return {
      title: "服务简介",
      navi: ["文创服务", "交易市场", "策划服务"],
      details: [
        {
          title: "文创赋能",
          detail:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quae dignissimos iure sed nemo sit voluptas suscipit accusamus animi exercitationem!",
        },
        {
          title: "市场分销",
          detail:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quae dignissimos iure sed nemo sit voluptas suscipit accusamus animi exercitationem!",
        },
        {
          title: "产业园区策划",
          detail:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quae dignissimos iure sed nemo sit voluptas suscipit accusamus animi exercitationem!",
        },
      ],
      advantages: [
        {
          icon: "/static/img/index_images/icons/1.png",
          text: "降低货物采购成本",
        },
        {
          icon: "/static/img/index_images/icons/2.png",
          text: "降低资金占用成本",
        },
        {
          icon: "/static/img/index_images/icons/3.png",
          text: "降低仓储物流成本",
        },
        {
          icon: "/static/img/index_images/icons/4.png",
          text: "降低人力人工成本",
        },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    change: function (index) {
      //改变导航内容
      this.currentIndex = index;
    },
  },
};
</script>

<style>
h2.dt {
  margin-top: 60px;
}
.tac1 {
  margin: 40px auto 0 auto;
  width: 1000px;
}
span.navi {
  line-height: 100px;
  font-size: 20px;
}
.sielmi {
  height: 100px;
}
.detail {
  text-align: left;
  background: white;
  height: 300px;
}
</style>