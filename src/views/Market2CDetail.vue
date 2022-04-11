<template>
  <div>
    <Top />
    <Breadcrumb :items="breadcrumb" />
    <SearchBar />
    <Purchase />
    <Detail />
    <Bottom />
  </div>
</template>

<script>
import Top from "../components/Shared/Top";
import Breadcrumb from "../components/Shared/Breadcrumb";
import SearchBar from "../components/Shared/SearchBar";
import Purchase from "../components/Market2CDetail/Purchase";
import Detail from "../components/Market2CDetail/Detail";
import Bottom from "../components/Shared/Bottom";

export default {
  components: {
    Top,
    Breadcrumb,
    SearchBar,
    Purchase,
    Detail,
    Bottom,
  },
  data() {
    return {
      data: {
        img: "img",
        name: "name",
        price: "price",
      },
      breadcrumb: [
        {
          name: "文创竹产品商城",
          url: { path: "/market2c" },
        },
        {
          name: "商品详情",
          url: { path: "/market2c/" + this.$route.params.itemId },
        },
      ],
    };
  },
  beforeMount() {
    this.getData();
  },
  methods: {
    getData: function () {
      this.axios({
        method: "get",
        url: "/get/market2cdetail",
        params: {
          itemId: this.$route.params.itemId,
        },
      }).then((response) => {
        this.data = response.data;
      });
    },
  },
};
</script>