<template>
  <div class="m2cdd">
    <el-row :gutter="30">
      <el-col :span="8">
        <el-row>
          <div class="m2cdd-station-brief" >
            <el-descriptions title="店铺名称" :column='1'>
              <el-descriptions-item label="主营业务">
                主营业务
              </el-descriptions-item>
              <el-descriptions-item label="联系方式">
                联系方式
              </el-descriptions-item>
            </el-descriptions>
            <!-- <el-row>
              <p>名称</p>
            </el-row>
            <el-row>
              <p>主营业务</p>
            </el-row>
            <el-row>
              <p>联系方式</p>
            </el-row> -->
          </div>
        </el-row>
        <el-row>
          <div class="m2cdd-commodity-recommend">
            <router-link to="">推荐商品</router-link>
          </div>
        </el-row>
      </el-col>
      <el-col :span="16">
        <div class="m2cdd-commodity-brief">
          <el-row>
            <p>商品参数</p>
          </el-row>
          <el-row>
            <p>商品描述</p>
          </el-row>
        </div>
        <el-row>
          <div class="m2cdd-detail-imgs">
            <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urls: [
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
      ],
    };
  },
};
</script>

<style>
.m2cdd {
  width: 1000px;
  margin: 20px auto 0 auto;
}
.m2cdd-station-brief {
  background: white;
  margin: 0 auto 0 auto;
  width: 280px;
  padding: 10px;
}
.m2cdd-commodity-recommend {
  background: white;
  margin: 0 auto 0 auto;
  width: 300px;
  margin-top: 20px;
}
.m2cdd-commodity-brief {
  background: white;
  text-align: left;
  padding-left: 10px;
  /* margin: 0 0 0 10px; */
}
.m2cdd-detail-imgs {
  margin-top: 20px;
}
</style>