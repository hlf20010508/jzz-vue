<template>
  <div class="ccf">
    <el-row v-if="lor == 'l'">
      <el-col :span="2">
        <p class="ccf-p">所在地</p>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="location" placeholder="请选择">
          <el-option
            v-for="item in locations"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{
              item.value
            }}</span>
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2" :offset="2">
        <p class="ccf-p">交付量</p>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="amountRange" placeholder="请选择">
          <el-option
            v-for="item in amountRanges"
            :key="item.value"
            :label="item.value"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row v-else>
      <el-col :span="2">
        <p class="ccf-p">作品种类</p>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="classification" placeholder="请选择">
          <el-option
            v-for="item in classifications"
            :key="item.value"
            :label="item.value"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2" :offset="2">
        <p class="ccf-p">价格区间</p>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="priceRange" placeholder="请选择">
          <el-option
            v-for="item in priceRanges"
            :key="item.value"
            :label="item.value"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lor: "l",
      locations: [
        {
          value: "Beijing",
          label: "北京",
        },
        {
          value: "Shanghai",
          label: "上海",
        },
        {
          value: "Nanjing",
          label: "南京",
        },
        {
          value: "Chengdu",
          label: "成都",
        },
        {
          value: "Shenzhen",
          label: "深圳",
        },
        {
          value: "Guangzhou",
          label: "广州",
        },
      ],
      location: "",
      amountRanges: [
        {
          value: "0-100",
        },
        {
          value: "100-200",
        },
        {
          value: "200-300",
        },
        {
          value: "300-400",
        },
        {
          value: "400-500",
        },
      ],
      amountRange: "",
      classifications: [
        {
          value: "class1",
        },
        {
          value: "class2",
        },
        {
          value: "class3",
        },
        {
          value: "class4",
        },
        {
          value: "class5",
        },
      ],
      classification: "",
      priceRanges: [
        {
          value: "100-200",
        },
        {
          value: "200-300",
        },
        {
          value: "300-400",
        },
        {
          value: "400-500",
        },
      ],
      priceRange: "",
    };
  },
  methods: {
    getLR: function (tag) {
      this.lor = tag;
    },
  },
};
</script>

<style>
.ccf {
  width: 1000px;
  background: white;
  margin: 20px auto 0 auto;
  padding: 10px 0;
}
.ccf-p {
  margin: 0 0 0 10px;
  line-height: 28px;
  text-align: left;
}
</style>