<template>
  <div id="deflayout">
    <div class="sticky">
      <header-info />
      <navigation-guide :scrollVal="ScrollValue" />
    </div>
    <div id="content" class="mb-10 footerMargin" v-scroll="handleScroll">
      <slot />
    </div>
    <footer-bottom />
  </div>
</template>

<script>
import NavigationGuide from "./components/common/NavigationGuide.vue";
import HeaderInfo from "./components/common/HeaderInfo.vue";
import FooterBottom from "./components/common/FooterBottom.vue";
export default {
  name: "defaultLayout",
  data() {
    return {
      ScrollValue: 0,
    };
  },
  components: {
    HeaderInfo,
    NavigationGuide,
    FooterBottom,
  },
  methods: {
    handleScroll: function () {
      this.ScrollValue = window.scrollY;
    },
  },
};
</script>

<style>
.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 99999;
}
#content {
  /* margin: 5px 10px; */
}
</style>
