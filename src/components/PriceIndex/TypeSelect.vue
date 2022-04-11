<template>
  <el-row>
    <div class="ts">
      <p class="ts-name">{{ name }}</p>
      <el-checkbox-group
        v-if="max > 1"
        class="ts-div"
        :max="max"
        v-model="selected"
      >
        <el-checkbox
          class="ts-radio"
          v-for="(item, index) in items"
          :key="index"
          :label="item"
          border
          @change="postSelected"
        >
          {{ item }}
        </el-checkbox>
      </el-checkbox-group>
      <div v-else class="ts-div">
        <el-radio
          class="ts-radio"
          v-for="(item, index) in items"
          :key="index"
          :label="item"
          v-model="chosen"
          border
          @change="postSelected"
        >
          {{ item }}
        </el-radio>
      </div>
    </div>
  </el-row>
</template>

<script>
export default {
  props: ["name", "items", "max"],
  data() {
    return {
      selected: [],
      chosen: "",
    };
  },
  beforeMount() {
    if (this.max > 1) {
      this.selected.push(this.items[0]);
    } else {
      this.chosen = this.items[0];
    }
  },
  methods: {
    postSelected: function () {
      if (this.max > 1) {
        this.$emit("getSelected", this.selected);
      } else {
        this.$emit("getSelected", this.chosen);
      }
    },
  },
};
</script>

<style>
.ts {
  width: 490px;
  margin: 10px 10px 0 10px;
}
.ts-name {
  text-align: left;
  margin: 16px 0 5px 10px;
}
.ts-div {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.ts-radio {
  margin: 5px 10px;
  width: 143px;
  height: 30px;
}
</style>