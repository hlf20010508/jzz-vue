<template>
  <div class="clf">
    <el-row>
      <el-col :span="21">
        <div class="clf-row">
          <span class="clf-span1">{{ name }}</span>
          <el-button
            v-for="(item, index) in items"
            :key="index"
            type="text"
            @click="postTag(item)"
          >
            {{ item }}
          </el-button>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="clf-button-right">
          <div>
            <el-button type="primary" plain @click="toRoute">
              {{ buttonName }}
            </el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["name", "buttonName", "items",'url'],
  methods: {
    postTag: function (name) {
      this.$emit("getTag", name);
    },
    toRoute: function(){
        this.$router.push(this.url)
    }
  },
};
</script>

<style>
.clf {
  width: 1000px;
  margin: 20px auto 0 auto;
  /* text-align: left; */
}
.clf-row {
  text-align: left;
  background: white;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
.clf-span1 {
  font-weight: 500;
  font-size: 14px;
  margin: 0 10px;
}
.clf-button-right {
  width: 100%;
  display: flex;
}
.clf-button-right div {
  margin: 0 10px 0 auto;
}
</style>