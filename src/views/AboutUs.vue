<template>
  <div>
    <Top />
    <Breadcrumb :items="breadcrumb" />
    <IndexCarousel />
    <PlatformBrief />
    <AboutUsBrief />
    <ServiceIntroduction />
    <Partner />
    <Advantage />
    <Bottom />
    <!-- <CulturalCreative /> -->
  </div>
</template>

<script>
import Top from "../components/Shared/Top";
import Breadcrumb from "../components/Shared/Breadcrumb";
import IndexCarousel from "../components/AboutUs/IndexCarousel";
import PlatformBrief from "../components/AboutUs/PlatformBrief";
import AboutUsBrief from "../components/AboutUs/AboutUsBrief";
import ServiceIntroduction from "../components/AboutUs/ServiceIntroduction";
import Partner from "../components/AboutUs/Partner";
import Advantage from "../components/AboutUs/Advantage";
import Bottom from "../components/Shared/Bottom";
// import CulturalCreative from "../components/AboutUs/CulturalCreative";

export default {
  components: {
    Top,
    Breadcrumb,
    IndexCarousel,
    PlatformBrief,
    AboutUsBrief,
    ServiceIntroduction,
    Partner,
    Advantage,
    Bottom,
    // CulturalCreative,
  },
  data() {
    return {
      breadcrumb: [
        {
          name: "关于我们",
          url: {path: '/aboutus'},
        },
      ],
    };
  },
};
</script>