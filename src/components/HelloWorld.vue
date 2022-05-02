<template>
  <v-img
    :src="getImageUrl()"
    height="600"
    class="bg-grey-lighten-2 mt-16"
    cover
  ></v-img>

  <v-img
    :src="getImageUrl()"
    height="600"
    class="bg-grey-lighten-2 mt-16"
    cover
  ></v-img>

  <v-img
    :src="getImageUrl()"
    height="600"
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
      return new URL(`../assets/maszyna.jpg`, import.meta.url).href;
    },
  },
};
</script>
