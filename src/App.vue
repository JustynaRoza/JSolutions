<template>
  <v-app>
    <v-main>
      <div id="content" style="min-height: 100vh">
        <component :is="layout"><router-view /></component>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
  computed: {
    layout() {
      return this.$route.meta.layout || "defaultLayout";
    },
  },
};
</script>
<style>
html {
  /* font-family: "Helvetica", "Arial", sans-serif !important; */
  font-family: Montserrat, Helvetica Neue, Arial, sans-serif !important;
}
</style>
