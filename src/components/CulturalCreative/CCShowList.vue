<template>
  <div class="ccsl">
    <div v-if="lor == 'l'">
      <div class="ccsl-l" v-for="(item, index) in data.itemsL" :key="index">
        <el-row>
          <el-col :span="1">
            <img :src="item.icon" class="ccsl-l-icon">
          </el-col>
          <el-col :span="20">
            <p class="ccsl-l-name">{{ item.name }}</p>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" class="ccsl-l-visit">访问空间</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" v-for="(i, index) in item.imgs" :key="index">
            <img class="ccsl-l-img" :src="i" />
          </el-col>
        </el-row>
      </div>
    </div>
    <div v-else>
      <div class="ccsl-r">
        <div v-for="(item, index) in data.itemsR" :key="index">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <a href="">
              <img :src="item.img" class="ccsl-rimage" />
              <p class="ccsl-rp1">{{ item.name }}</p>
            </a>
            <p class="ccsl-rp2">
              <span>作者</span>
              {{ item.authorName }}
            </p>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lor: "l",
      data: {
        itemsL: [
          {
            name: "name",
            icon: "static/img/test.jpeg",
            imgs: [
              "static/img/test.jpeg",
              "static/img/test.jpeg",
              "static/img/test.jpeg",
              "static/img/test.jpeg",
            ],
          },
        ],
        itemsR: [
          {
            url: "",
            img: "/static/img/test.jpeg",
            name: "name",
            authorName: "authorName",
          },
        ],
      },
    };
  },
  beforeMount() {
    this.getData()
  },
  methods: {
    getData: function () {
      this.axios({
        method: "get",
        url: "/get/culturalcreative",
      }).then((response) => (this.data = response.data));
    },
    getLR: function (tag) {
      this.lor = tag;
    },
  },
};
</script>

<style>
.ccsl {
  width: 1000px;
  margin: 20px auto 0 auto;
}
.ccsl-l {
  background: white;
  border: 1px solid #eeeeee;
  text-align: left;
  padding-bottom: 10px;
}
.ccsl-l-name {
  margin: 20px 0 10px 25px;
  font-size: 20px;
  line-height: 40px;
}
.ccsl-l-icon {
  margin: 25px 0 15px 25px;
  width: 30px;
  height: 30px;
}
.ccsl-l-visit {
  margin: 20px 0 10px 0;
}
.ccsl-l-img {
  height: 150px;
  width: 200px;
  margin-left: 25px;
  margin-bottom: 10px;
}
.ccsl-r {
  /* padding: 10px 0; */
  margin: 0 auto;
  /* background: white; */
  width: 1020px;
  display: flex;
  flex-wrap: wrap;
}
.ccsl-r div .el-card {
  width: 228px;
  height: 274px;
  margin: 10px;
  text-align: left;
}
.ccsl-r a {
  text-decoration: none;
  color: black;
}
.ccsl-r a:hover {
  color: #82b329;
}
.ccsl-rimage {
  height: 200px;
  display: block;
}
.ccsl-rp1 {
  font-size: 18px;
  margin: 10px 0px 10px 20px;
}
.ccsl-rp2 {
  font-size: 12px;
  font-weight: 700;
  margin: 10px 0px 10px 20px;
  color: #979b99;
}
.ccsl-rp2 span {
  font-size: 12px;
  color: #979b99;
}
.ccsl p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>