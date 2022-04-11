<template>
  <div>
    <Top />
    <Breadcrumb :items="breadcrumb" />
    <SearchBar />
    <LeftOrRight :left="'求购'" :right="'供应'" @setLR="setDS" />
    <Classification
      @getTag="getTag"
      :name="clfName"
      :buttonName="clfButtonName"
      :items="clfItems"
      :url="clfUrl"
    />
    <DemandDisplay ref="dosd" />
    <Bottom />
  </div>
</template>

<script>
import Top from "../components/Shared/Top";
import Breadcrumb from "../components/Shared/Breadcrumb";
import SearchBar from "../components/Shared/SearchBar";
import LeftOrRight from "../components/Shared/LeftOrRight";
import Classification from "../components/Shared/Classification";
import DemandDisplay from "../components/DemandDisplay2B/DemandDisplay";
import Bottom from "../components/Shared/Bottom";

export default {
  components: {
    Top,
    Breadcrumb,
    SearchBar,
    LeftOrRight,
    Classification,
    DemandDisplay,
    Bottom,
  },
  data() {
    return {
      clfName: "需求分类：",
      clfButtonName: "发布需求",
      clfItems: ["全部", "竹编", "竹皮","重竹","复合竹材","竹炭"],
      clfUrl: "/demo",
      breadcrumb: [
        {
          name: "企业用户供求展示",
          url: { path: "/demanddisplay2b" },
        },
      ],
      tag: "全部",
    };
  },
  methods: {
    getTag: function (tag) {
      this.$refs.dosd.useTag(tag);
    },
    setDS: function (tag) {
      if (tag == "l") {
        this.clfName = "需求分类";
      } else {
        this.clfName = "商品分类";
      }
      this.$refs.dosd.setDS(tag);
    },
  },
};
</script>

<style>
</style>