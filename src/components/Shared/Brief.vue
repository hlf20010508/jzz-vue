<template>
  <div>
    <TitleH1 :title="title" />
    <!-- 图片在左边 -->
    <el-row v-if="side == 'left'" class="tac">
      <!-- 图片 -->
      <el-col :span="12">
        <img class="PI" :src="url" />
      </el-col>
      <!-- 文字列 -->
      <el-col class="brief" :span="12">
        <!-- 标题 -->
        <el-row>
          <el-col :offset="1">
            <h2 class="PI">{{ subTitle }}</h2>
          </el-col>
        </el-row>
        <Seperator />
        <!-- 内容 -->
        <el-row>
          <el-col :span="22" :offset="1">
            <p class="PI">{{ text }}</p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!-- 图片在右边 -->
    <el-row v-else class="tac">
      <!-- 文字列 -->
      <el-col class="brief" :span="12">
        <!-- 标题 -->
        <el-row>
          <el-col :offset="1">
            <h2 class="PI">{{ subTitle }}</h2>
          </el-col>
        </el-row>
        <Seperator />
        <!-- 内容 -->
        <el-row>
          <el-col :span="22" :offset="1">
            <p class="PI">{{ text }}</p>
          </el-col>
        </el-row>
      </el-col>
      <!-- 图片 -->
      <el-col class="brief" :span="12">
        <img class="PI" :src="url" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TitleH1 from "./TitleH1";
import Seperator from "./Seperator";

export default {
  props: {
    title: {
      required: true,
    },
    url: {
      required: true,
    },
    subTitle: {
      required: true,
    },
    text: {
      required: true,
    },
    side: {
      default: "left",
    },
  },
  components: {
    TitleH1,
    Seperator,
  },
};
</script>

<style>
img.PI {
  height: 400px;
}
h2.PI {
  margin-top: 60px;
  text-align: left;
}
p.PI {
  text-align: left;
}
.brief {
  height: 400px;
  width: 500px;
  background: white;
  overflow: hidden;
}
</style>