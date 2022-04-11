<template>
  <div>
    <TitleH1 :title="title" />
    <div class="mpr2c">
      <div v-for="(item, index) in data.items" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <router-link :to="'/market2c/'+item.id">
            <img :src="item.img" class="mpr2cimage" />
            <p class="mpr2cp1">{{ item.name }}</p>
          </router-link>
          <p class="mpr2cp2">
            <span>¥</span>
            {{ item.price }}
          </p>
        </el-card>
      </div>
    </div>
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
      title: "为您推荐",
      data: {
        items: [
          {
            id: "0",
            img: "/static/img/market2c_images/recommend/1.jpg",
            name: "name",
            price: "price",
          },
        ],
      },
    };
  },
  beforeMount() {
    this.getData();
  },
  methods: {
    getData: function () {
      this.axios({
        method: "get",
        url: "/get/marketproductrecommend2c",
      }).then((response) => (this.data = response.data));
    },
  },
};
</script>

<style>
.mpr2c {
  /* padding: 10px 0; */
  margin: 0 auto;
  /* background: white; */
  width: 1020px;
  display: flex;
  flex-wrap: wrap;
}
.mpr2c div .el-card {
  width: 233px;
  margin: 10px;
  text-align: left;
}
.mpr2c a {
  text-decoration: none;
  color: black;
}
.mpr2c a:hover {
  color: #82b329;
}
.mpr2cimage {
  width: 100%;
  display: block;
}
.mpr2cp1 {
  font-size: 20px;
  margin: 10px 0px 10px 20px;
}
.mpr2cp2 {
  font-size: 20px;
  font-weight: 700;
  margin: 10px 0px 10px 20px;
  color: #f65d47;
}
.mpr2cp2 span {
  font-size: 12px;
  color: #f65d47;
}
</style>