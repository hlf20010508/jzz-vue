<template>
  <div class="bottom">
    <div class="bottom-div">
      <!-- 分割线以上 -->
      <el-row class="tac">
        <!-- 快速导航列 -->
        <el-col :span="3" :offset="1">
          <!-- 快速导航 -->
          <p class="bottomTitle">{{ fastNavi.title }}</p>
          <!-- 导航链接 -->
          <div
            class="bottomLink"
            v-for="(item, index) in fastNavi.urls"
            :key="index"
          >
            <router-link :to="item.url">
              {{ item.name }}
            </router-link>
          </div>
        </el-col>
        <!-- 垂直分割线 -->
        <el-col :span="1">
          <el-divider class="bottomDividerV" direction="vertical"></el-divider>
        </el-col>
        <!-- 联系方式列 -->
        <el-col :span="5" :offset="1">
          <!-- 联系我们 -->
          <p class="bottomTitle">{{ contact.title }}</p>
          <!-- 联系方式 -->
          <p
            class="bottomContact"
            v-for="(item, index) in contact.items"
            :key="index"
          >
            <i :class="item.icon" />{{ item.name }}：{{ item.info }}
          </p>
        </el-col>
      </el-row>
      <!-- 分割线 -->
      <el-row class="tac">
        <el-divider class="bottomDividerH" direction="horizontal"></el-divider>
      </el-row>
      <!-- 分割线以下 -->
      <el-row class="tac underDivi">
        <!-- 版权标识 -->
        <el-col :span="4" :offset="1">
          <p class="copyright">{{ copyright }}</p>
        </el-col>
        <!-- 友情链接 -->
        <el-col :span="7" :offset="11">
          <p class="friendship">
            <!-- 友情链接 -->
            {{ friendshipLink.name }}：
            <!-- 链接 -->
            <a
              class="bottomFriendLinks"
              v-for="(item, index) in friendshipLink.urls"
              :key="index"
              :href="item.url"
              >{{ item.name }}</a
            >
          </p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fastNavi: {
        title: "快速导航",
        urls: [
          {
            name: "文创竹产品商城",
            url: "/market2c",
          },
          {
            name: "竹材批发商城",
            url: "/market2b",
          },
          {
            name: "关于我们",
            url: "/aboutus",
          },
        ],
      },
      contact: {
        title: "联系我们",
        items: [
          {
            name: "电话",
            info: "12345678900",
            icon: "el-icon-phone-outline",
          },
          {
            name: "邮箱",
            info: "123@123.com",
            icon: "el-icon-message",
          },
          {
            name: "地址",
            info: "浙江省杭州市浙江理工大学",
            icon: "el-icon-location-outline",
          },
        ],
      },
      copyright: "Copyright © 2022 L-ING",
      friendshipLink: {
        name: "友情链接",
        urls: [
          {
            name: "中国建材网",
            url: "https://www.bmlink.com/",
          },
          {
            name: "中国木业网",
            url: "https://www.wood365.cn/",
          },
          {
            name: "中国竹产业协会",
            url: "http://www.cbiachina.com/",
          },
        ],
      },
    };
  },
};
</script>

<style>
div.bottom {
  margin-top: 60px;
  width: 100%;
  text-align: left;
  background: #2e3238;
}
.bottom-div {
  width: 1000px;
  background: #2e3238;
  margin: 0 auto;
}
.bottomTitle {
  margin-top: 20px;
  color: white;
  font-size: 14px;
}
.bottomLink {
  font-size: 12px;
  margin-bottom: 12px;
}
.bottomLink a {
  text-decoration: none;
  color: white;
}
.bottomLink a:hover {
  color: #82b229;
}
.bottomDividerV {
  margin-top: 40px;
  height: 115px;
  background: #505357;
}
.bottomContact {
  font-size: 12px;
  color: white;
}
.bottomDividerH {
  background-color: #505357;
  margin-top: -10px;
}
.underDivi {
  margin-top: -30px;
  color: white;
  font-size: 12px;
}
.bottomFriendLinks {
  color: white;
  margin-right: 8px;
  text-decoration: none;
}
.bottomFriendLinks:hover {
  color: #82b229;
}
</style>