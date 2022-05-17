<template>
  <p
    class="text-justify ma-16 pa-4 font-weight-bold borderStyles"
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
  <!-- <div>
    <v-icon color="green darken-2">mdi-tire</v-icon>
  </div> -->
  <div class="about">
    <timeline />
  </div>
</template>
<script>
import Timeline from "../components/common/Timeline.vue";

export default {
  data() {
    return {};
  },
  components: {
    Timeline,
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
  border-image: linear-gradient(to right bottom, #204b63, white 52%) 1;
  /* border-image: linear-gradient(to left bottom, #204b63 10%, white) 1; */
  /* border-image: linear-gradient(red 10%, 30%, blue 90%) 1; */
  /* border-image: radial-gradient(circle, #204b63, white) 1; */
  /* border-image: linear-gradient(to bottom, #204b63, white) 1 100%; */
}
</style>
