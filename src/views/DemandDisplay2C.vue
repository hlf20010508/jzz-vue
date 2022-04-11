<template>
  <div>
    <Top />
    <Breadcrumb :items="breadcrumb" />
    <SearchBar />
    <Classification @getTag='getTag' :name='clfName' :buttonName='clfButtonName' :items='clfItems' :url='clfUrl' />
    <DemandDisplay ref='dosd'/>
    <Bottom />
  </div>
</template>

<script>
import Top from "../components/Shared/Top";
import Breadcrumb from "../components/Shared/Breadcrumb";
import SearchBar from "../components/Shared/SearchBar";
import Classification from "../components/Shared/Classification";
import DemandDisplay from "../components/DemandDisplay2C/DemandDisplay";
import Bottom from "../components/Shared/Bottom";

export default {
  components: {
    Top,
    Breadcrumb,
    SearchBar,
    Classification,
    DemandDisplay,
    Bottom,
  },
  data() {
    return {
      clfName: "需求分类：",
      clfButtonName: "发布需求",
      clfItems: ['全部',"设计", "功能"],
      clfUrl: '/demo',
      breadcrumb: [
        {
          name: "消费者需求展示",
          url: { path: "/demanddisplay2c" },
        },
      ],
      tag: "全部",
    };
  },
  methods: {
    getTag: function (tag) {
      this.$refs.dosd.useTag(tag)
    },
  },
};
</script>