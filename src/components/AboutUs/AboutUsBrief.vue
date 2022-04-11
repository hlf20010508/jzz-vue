<template>
  <div>
    <Brief
      :title="title"
      :url="url"
      :subTitle="subTitle"
      :text="text"
      :side="side"
    />
  </div>
</template>

<script>
import Brief from "../Shared/Brief";

export default {
  components: {
    Brief,
  },
  data() {
    return {
      title: "关于我们",
      url: "/static/img/test.jpeg",
      subTitle: "竹产业互联网平台",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, placeat illo laborum ad optio nostrum laboriosam fugiat aperiam animi debitis.",
      side: "right",
    };
  },
};
</script>