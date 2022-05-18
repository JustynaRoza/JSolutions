<template>
  <p
    class="text-justify mx-xs-4 mx-sm-4 mx-md-16 mt-16 mb-5 pa-4 font-weight-bold borderStyles"
    style="font-size: 20px; font-variant: small-caps"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </p>
  <div class="text-center icons">
    <i class="fa-solid fa-cog fa-spin fa-xl"></i>
    <i class="fa-solid fa-cog fa-spin fa-xl"></i>
    <i class="fa-solid fa-cog fa-spin fa-xl"></i>
  </div>
  <div class="about">
    <timeline v-if="!$vuetify.display.mobile" />
    <timeline-mobile v-else />
  </div>
</template>
<script>
import Timeline from "../components/common/Timeline.vue";
import TimelineMobile from "../components/common/TimelineMobile.vue";

export default {
  data() {
    return {};
  },
  components: {
    Timeline,
    TimelineMobile,
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    margin: 10%;
  }
}
.borderStyles {
  border-top-width: 4px;
  border-top-style: solid;
  border-left-width: 4px;
  border-left-style: solid;
  border-top-left-radius: 10px;
  border-image: linear-gradient(to right bottom, #204b63, white 52%) 1;
  background-origin: border-box;
  background-clip: content-box, border-box;
  /* border-image: linear-gradient(45deg,red,blue) border-box; */
  /* border-image: linear-gradient(to left bottom, #204b63 10%, white) 1; */
  /* border-image: linear-gradient(red 10%, 30%, blue 90%) 1; */
  /* border-image: radial-gradient(circle, #204b63, white) 1; */
  /* border-image: linear-gradient(to bottom, #204b63, white) 1 100%; */

  /* -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor; 
  mask-composite: exclude;  */
}
.icons i {
  margin: 5px;
  color: #204b63;
}
</style>
