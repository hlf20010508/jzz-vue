<template>
  <div class="dp">
    <span class="dp-name">时间段：</span>
    <el-date-picker
      v-model="value1"
      align="right"
      type="date"
      placeholder="开始日期"
      :picker-options="pickerOptions"
      size="mini"
      value-format='yyyy-MM-dd'
      @change="postDate"
      :clearable='false'
      style="width:130px"
      >
    </el-date-picker>
    <span class="dp-span">至</span>
    <el-date-picker
      v-model="value2"
      align="right"
      type="date"
      placeholder="开始日期"
      :picker-options="pickerOptions"
      size="mini"
      value-format='yyyy-MM-dd'
      @change="postDate"
      :clearable='false'
      style="width:130px"
      >
    </el-date-picker>
  </div>
</template>


<script>

export default {
  props: ['startDate','endDate'],
  data() {
    return {
      pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
      };
  },
  beforeMount() {
    // const end = new Date();
    // const start = new Date();
    // start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
    // this.value=[format(start),format(end)]
    this.value1=this.startDate
    this.value2=this.endDate
  },
  methods: {
    postDate: function () {
      this.$emit("getDate", [this.value1,this.value2]);
    },
  },
};
</script>

<style>
.dp {
  margin: 16px 0 0 20px;
  text-align: left;
}
.dp-span{
  margin: 0 10px;
}
</style>