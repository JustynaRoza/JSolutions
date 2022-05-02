<template>
  <div id="deflayout">
    <div class="sticky">
      <header-info />
      <navigation-guide />
    </div>
    <div id="content" class="mb-10 footerMargin"><slot /></div>
  </div>
</template>

<script>
import NavigationGuide from "./components/common/NavigationGuide.vue";
import HeaderInfo from "./components/common/HeaderInfo.vue";
export default {
  name: "defaultLayout",
  components: {
    HeaderInfo,
    NavigationGuide,
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
</style>
