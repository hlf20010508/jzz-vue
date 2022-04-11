<template>
  <div>
    <!-- 标题 -->
    <h1 class="TitleH1">{{ title }}</h1>
    <!-- 分割线 -->
    <hr align="center" width="30" color="#82b329" size="2" />
  </div>
</template>

<script>
import Seperator from './Seperator'

export default {
  components:{
    Seperator
  },
  props: ["title"],
};
</script>

<style>
.TitleH1 {
  margin-top: 30px;
}
</style>
