<template>
  <v-img
    :src="getImageUrl()"
    :height="height"
    class="bg-grey-lighten-2 mt-16"
    cover
  ></v-img>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
  methods: {
    getImageUrl() {
      return new URL(`../assets/mitsuPoziomo.jpg`, import.meta.url).href;
    },
  },
  computed: {
    height() {
      console.log(this.$vuetify.display.name);
      switch (this.$vuetify.display.name) {
        case "xs":
          return 220;
        case "sm":
          return 400;
        case "md":
          return 400;
        case "lg":
          return 500;
        case "xl":
          return 600;
      }
    },
  },
};
</script>
