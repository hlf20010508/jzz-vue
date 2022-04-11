<template>
  <div>
    <Top />
    <Breadcrumb :items="breadcrumb" />
    <SearchBar />
    <PtMFilter />
    <Recommend />
    <Bottom />
  </div>
</template>

<script>
import Top from "../components/Shared/Top";
import Breadcrumb from "../components/Shared/Breadcrumb";
import SearchBar from "../components/Shared/SearchBar";
import PtMFilter from "../components/PatentMarket/PtMFilter";
import Recommend from "../components/PatentMarket/Recommend";
import Bottom from "../components/Shared/Bottom";

export default {
  components: {
    Top,
    Breadcrumb,
    SearchBar,
    PtMFilter,
    Recommend,
    Bottom,
  },
  data() {
    return {
      breadcrumb: [
        {
          name: "专利市场",
          url: { path: "/patentmarket" },
        },
      ],
    };
  },
};
</script>