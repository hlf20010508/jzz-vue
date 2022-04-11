<template>
  <div>
    <Top />
    <Breadcrumb :items="breadcrumb" />
    <Background />
    <Bottom />
  </div>
</template>

<script>
import Top from "../components/Shared/Top";
import Breadcrumb from "../components/Shared/Breadcrumb";
import Background from "../components/Plot/Background";
import Bottom from "../components/Shared/Bottom";

export default {
  components: {
    Top,
    Breadcrumb,
    Background,
    Bottom,
  },
  data() {
    return {
      breadcrumb: [
        {
          name: "产业园区策划",
          url: { path: "/plot" },
        },
      ],
    };
  },
};
</script>