<template>
  <div>
    <Top />
    <Breadcrumb :items='breadcrumb' />
    <Content />
    <Bottom />
  </div>
</template>

<script>
import Top from "../components/Shared/Top";
import Breadcrumb from "../components/Shared/Breadcrumb";
import Content from "../components/Produce/Content";
import Bottom from "../components/Shared/Bottom";

export default {
  components: {
    Top,
    Breadcrumb,
    Content,
    Bottom,
  },
  data() {
    return {
      breadcrumb: [
        {
          name: '竹材批发商城',
          url: {path: '/market2b'},
        },
        {
          name: '加工服务',
          url: {path: '/produce'},
        },
      ],
    }
  },
};
</script>