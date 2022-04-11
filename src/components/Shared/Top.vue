<template>
  <div class="top">
    <div class="topdiv">
      <el-row>
        <!-- 君之竹 -->
        <el-col :span="6">
          <div class="top-left">
            <router-link :to="url" class="topLink"> {{ title }}</router-link>
          </div>
        </el-col>
        <!-- 右边项目 -->
        <el-col :span="18">
          <div class="top-right">
            <!-- 产品与服务 -->
            <el-dropdown
              trigger="click"
              :hide-on-click="false"
              placement="bottom"
              @command="toUrl"
            >
              <!-- 名字 -->
              <span class="topspan">
                {{ product.name }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <!-- 菜单 -->
              <el-dropdown-menu slot="dropdown">
                <!-- 项目 -->
                <el-dropdown-item
                  class="topdi"
                  divided
                  v-for="(item, index) in product.content"
                  :key="index"
                  :command="item.url"
                >
                  {{ item.name }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <!-- 关于我们 -->
            <router-link class="topLink" :to="about.url">
              {{ about.name }}
            </router-link>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      title: "君之竹",
      url: "/",
      product: {
        name: "产品与服务",
        content: [
          {
            name: "文创竹产品商城",
            url: "/market2c",
          },
          {
            name: "竹材批发商城",
            url: "/market2b",
          },
          {
            name: "消费者需求展示",
            url: "/demanddisplay2c",
          },
          {
            name: "企业用户供求展示",
            url: "/demanddisplay2b",
          },
          {
            name: "专利市场",
            url: "/patentmarket",
          },
          {
            name: "产业园区策划",
            url: "/plot",
          },
        ],
      },
      about: {
        name: "关于我们",
        url: "/aboutus",
      },
    };
  },
  methods: {
    toUrl: function (url) {
      this.$router.push({ path: url });
    },
  },
};
</script>

<style>
div.top {
  background: white;
  height: 60px;
  width: 100%;
}
div.topdiv {
  background: white;
  width: 1000px;
  margin: 0 auto;
}
.top-left {
  text-align: left;
  margin-left: 10px;
}
.top-right {
  text-align: right;
  margin-right: 10px;
}
.topLink {
  text-decoration: none;
  color: #82b329;
  vertical-align: middle;
  line-height: 60px;
  font-size: 18px;
  font-weight: 400;
}
.topspan {
  vertical-align: middle;
  margin: 0 10px;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  color: #82b329;
}
.topspan i {
  margin-left: -4px;
  font-size: 18px;
}
.topdi {
  text-align: center;
}
.topa {
  text-decoration: none;
  color: black;
}
</style>