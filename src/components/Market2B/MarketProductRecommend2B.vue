<template>
  <div>
    <TitleH1 :title="title" />
    <div class="mpr2b">
      <el-row v-for="(item, index) in items" :key="index">
        <!-- 图片 -->
        <el-col class="mpr2bc0" :span="4">
          <img :src="item.img" />
        </el-col>
        <!-- 第二列 -->
        <el-col class="mpr2bc1" :span="6">
          <div>
            <p class="mpr2bName">{{ item.name }}</p>
            <p class="mpr2bDesc">{{ item.description }}</p>
            <p class="mpr2bTime">{{ item.time }}</p>
          </div>
        </el-col>
        <!-- 第三列 -->
        <el-col class="mpr2bc1" :span="6">
          <div>
            <p class="mpr2bUP">{{ item.unitPrice }}</p>
            <p class="mpr2bDesc">{{ item.location }}</p>
          </div>
        </el-col>
        <el-col class="mpr2bc1" :span="4">
          <div>
            <p class="mpr2b-cc">{{ item.contact }}</p>
            <p class="mpr2b-cc">{{ item.company }}</p>
          </div>
        </el-col>
        <el-col class="mpr2bc2" :span="4">
          <div>
            <el-button type="primary" plain>查看详情</el-button>
            <el-button type="text">加入购物车</el-button>
            <el-button type="text"
              ><i class="el-icon-star-off" />收藏</el-button
            >
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
      title: "为您推荐",
      items: [
        {
          name: "name",
          time: "time",
          img: "/static/img/market2b_images/2.jpeg",
          description: "description",
          contact: "contact",
          unitPrice: "unitPrice",
          location: "location",
          company: "company",
        },
      ],
    };
  },
  beforeMount() {
    this.getData()
  },
  methods: {
    getData: function(){
      this.axios({
        method: 'get',
        url: '/get/marketproductrecommend2b'
      }).then((response)=>(this.items=response.data.items))
    }
  },
};
</script>

<style>
.mpr2b {
  margin: 0 auto;
  background: white;
  width: 1000px;
}
.mpr2b .el-row {
  border: 1px solid #eeeeee;
  height: 140px;
}
.mpr2b img {
  height: 100px;
  width: 100px;
}
.mpr2bc0 {
  height: 100%;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mpr2bc1 {
  height: 100%;
  text-align: left;
  display: flex;
  align-items: center;
}
.mpr2bName {
  max-width: 230px;
  font-size: 18px;
  margin: 10px 0;
}
.mpr2bDesc {
  max-width: 230px;
  font-size: 13px;
  color: #666666;
  margin: 10px 0;
}
.mpr2b-cc {
  max-width: 150px;
  font-size: 13px;
  color: #666666;
  margin: 10px 0;
}
.mpr2bTime {
  max-width: 230px;
  font-size: 14px;
  color: #a5a5a5;
  margin: 10px 0;
}
.mpr2bUP {
  max-width: 230px;
  font-size: 18px;
  margin: 10px 0;
}
.mpr2bc2 {
  height: 100%;
  display: flex;
  align-items: center;
}
.mpr2bc2 div {
  display: flex;
  flex-direction: column;
}
.mpr2bc2 .el-button--primary {
  padding: 10px 20px;
}
.mpr2bc2 .el-button--text {
  margin: 0;
  padding: 10px 0;
}
.mpr2b p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>