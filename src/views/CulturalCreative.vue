<template>
  <div>
    <Top />
    <Breadcrumb :items="breadcrumb" />
    <SearchBar />
    <LeftOrRight :left="'服务商'" :right="'个人'" @setLR="setLR" />
    <CCFilter ref="ccf" />
    <CCShowList ref="ccsl"/>
    <Bottom />
  </div>
</template>

<script>
import Top from "../components/Shared/Top";
import Breadcrumb from "../components/Shared/Breadcrumb";
import SearchBar from "../components/Shared/SearchBar";
import LeftOrRight from "../components/Shared/LeftOrRight";
import CCFilter from "../components/CulturalCreative/CCFilter";
import CCShowList from "../components/CulturalCreative/CCShowList";
import Bottom from "../components/Shared/Bottom";

export default {
  components: {
    Top,
    Breadcrumb,
    SearchBar,
    LeftOrRight,
    CCFilter,
    CCShowList,
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
          name: "文创服务",
          url: { path: "/culturalcreative" },
        },
      ],
    };
  },
  methods: {
    setLR: function (tag) {
        this.$refs.ccf.getLR(tag)
        this.$refs.ccsl.getLR(tag)
    },
  },
};
</script>