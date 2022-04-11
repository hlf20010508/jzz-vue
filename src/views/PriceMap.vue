<template>
  <div>
    <Top />
    <Breadcrumb :items="breadcrumb" />
    <PMFilter />
    <Chart />
    <Bottom />
  </div>
</template>

<script>
import Top from "../components/Shared/Top";
import Breadcrumb from "../components/Shared/Breadcrumb";
import PMFilter from "../components/PriceMap/PMFilter";
import Chart from "../components/PriceMap/Chart";
import Bottom from "../components/Shared/Bottom";

export default {
  components: {
    Top,
    Breadcrumb,
    PMFilter,
    Chart,
    Bottom,
  },
  data() {
    return {
      breadcrumb: [
        {
          name: "竹材批发商城",
          url: { path: "/market2b" },
        },
        {
          name: "价格地图",
          url: { path: "/pricemap" },
        },
      ],
    };
  },
};
</script>