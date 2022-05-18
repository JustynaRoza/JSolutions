<template>
  <v-footer
    class="bg-grey-lighten-1 text-white text-center d-flex flex-column newColor"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4 text-white"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>

    <div class="text-white pt-0">
      Tu jest stopka nie wiem co tutaj ma być bo jest tak bal efe whefuew
      ejwnfJEW EWFJEWIOFJE FEWNFIWQ jweiofe eiwfue
      <a
        href="https://www.flaticon.com/free-icons/machine"
        title="machine icons"
        >Machine icons created by Freepik - Flaticon</a
      >
    </div>

    <v-divider></v-divider>

    <div class="text-white">
      {{ new Date().getFullYear() }} — <strong>JSolutions</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "FooterInfo",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>

<style>
.newColor {
  background-color: #204b63 !important;
}
</style>
