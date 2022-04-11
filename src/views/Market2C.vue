<template>
  <div>
    <Top />
    <Breadcrumb :items="breadcrumb" />
    <SearchBar />
    <MarketNavi :dataUrl="dataUrl" />
    <!-- <MarketNavi :dataUrl="dataUrl" :imgUrl="imgUrl" /> -->
    <MarketProductRecommend2C />
    <Bottom />
  </div>
</template>

<script>
import Top from "../components/Shared/Top";
import Breadcrumb from "../components/Shared/Breadcrumb";
import SearchBar from "../components/Shared/SearchBar";
import MarketNavi from "../components/Shared/MarketNavi";
import TitleH1 from "../components/Shared/TitleH1";
import MarketProductRecommend2C from "../components/Market2C/MarketProductRecommend2C";
import Bottom from "../components/Shared/Bottom";

export default {
  components: {
    Top,
    Breadcrumb,
    SearchBar,
    MarketNavi,
    TitleH1,
    MarketProductRecommend2C,
    Bottom,
  },
  data() {
    return {
      breadcrumb: [
        {
          name: "文创竹产品商城",
          url: { path: "/market2c" },
        },
      ],
      dataUrl: "/get/marketnavi2c",
      // dataUrl: "/static/MarketNavi/2c.json",
      // imgUrl: "/static/img/market2c_images/2.jpg",
    };
  },
};
</script>