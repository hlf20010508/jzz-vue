<template>
  <div>
    <div class="ptmr">
      <el-row v-for="(item, index) in items" :key="index">
        <!-- 图片列 -->
        <el-col class="ptmr-c0" :span="4">
          <img :src="item.img" />
        </el-col>
        <!-- 第二列 -->
        <el-col class="ptmr-c1" :span="6">
          <div>
            <p class="ptmr-Name">{{ item.name }}</p>
            <p class="ptmr-Desc">{{ item.description }}</p>
            <p class="ptmr-type">{{ item.type }}</p>
          </div>
        </el-col>
        <!-- 第三列 -->
        <el-col class="ptmr-c1" :offset="1" :span="3">
          <div>
            <p class="ptmr-UP">{{ item.price }}</p>
          </div>
        </el-col>
        <!-- 第四列 -->
        <el-col class="ptmr-c1" :span="6">
          <div>
            <p class="ptmr-Desc">{{ item.owner }}</p>
          </div>
        </el-col>
        <!-- 第五列 -->
        <el-col class="ptmr-c2" :span="4">
          <div>
            <el-button type="primary" plain>查看详情</el-button>
          </div>
        </el-col>
      </el-row>
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
      items: [
        {
          name: "name",
          img: "/static/img/market2b_images/2.jpeg",
          description: "description",
          type: 'type',
          owner: "owner",
          price: "price",
        },
      ],
    };
  },
  beforeMount() {
    this.getData();
  },
  methods: {
    getData: function () {
      this.axios({
        method: "get",
        url: "/get/patentmarket",
      }).then((response) => (this.items = response.data.items));
    },
  },
};
</script>

<style>
.ptmr {
  margin: 20px auto 0 auto;
  background: white;
  width: 1000px;
}
.ptmr .el-row {
  border: 1px solid #eeeeee;
  height: 140px;
}
.ptmr img {
  height: 100px;
}
.ptmr-c0 {
  height: 100%;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ptmr-c1 {
  height: 100%;
  text-align: left;
  display: flex;
  align-items: center;
}
.ptmr-Name {
  font-size: 20px;
  width: 260px;
  margin: 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ptmr-Desc {
  width: 260px;
  font-size: 16px;
  color: #666666;
  margin: 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.ptmr-type {
  width: 260px;
  font-size: 14px;
  color: #a5a5a5;
  margin: 10px 0;
}
.ptmr-UP {
  font-size: 20px;
  margin: 10px 0;
}
.ptmr-c2 {
  height: 100%;
  display: flex;
  align-items: center;
}
.ptmr-c2 div {
  display: flex;
  flex-direction: column;
}
.ptmr-c2 .el-button--primary {
  padding: 10px 20px;
}
.ptmr-c2 .el-button--text {
  margin: 0;
  padding: 10px 0;
}
</style>