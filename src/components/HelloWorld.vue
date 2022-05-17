<template>
  <v-carousel hide-delimiters cycle interval="5000" hide-on-leave="true">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      cover
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
  <v-container class="grey lighten-5 mt-16" :style="size">
    <v-row class="mb-6" no-gutters>
      <v-col
        sm="5"
        md="6"
        style="justify-self: end"
        class="justify-end text-justify"
      >
        <p class="pa-2 text-right" outlined tile>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem
        </p>
      </v-col>
      <v-col
        sm="5"
        offset-sm="2"
        md="6"
        offset-md="0"
        class="text-center my-auto"
      >
        <img :src="getImage('milling-machine')" height="150" class="ma-auto" />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        sm="5"
        offset-sm="2"
        md="6"
        offset-md="0"
        class="text-center my-auto"
      >
        <img :src="getImage('laser')" height="150" class="ma-auto" />
      </v-col>
      <v-col
        sm="5"
        md="6"
        style="justify-self: end"
        class="justify-end text-justify"
      >
        <p class="pa-2 text-left" outlined tile>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem
        </p>
      </v-col>
    </v-row>
    <v-row class="mb-6" no-gutters>
      <v-col
        sm="5"
        md="6"
        style="justify-self: end"
        class="justify-end text-justify"
      >
        <p class="pa-2 text-right" outlined tile>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem
        </p>
      </v-col>
      <v-col
        sm="5"
        offset-sm="2"
        md="6"
        offset-md="0"
        class="text-center my-auto"
      >
        <img :src="getImage('machine-press')" height="150" class="ma-auto" />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        sm="5"
        offset-sm="2"
        md="6"
        offset-md="0"
        class="text-center my-auto"
      >
        <img :src="getImage('drilling-machine')" height="150" class="ma-auto" />
      </v-col>
      <v-col
        sm="5"
        md="6"
        style="justify-self: end"
        class="justify-end text-justify"
      >
        <p class="pa-2 text-left" outlined tile>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    items: [
      {
        src: new URL(`../assets/mitsuPoziomo.jpg`, import.meta.url).href,
      },
      {
        src: new URL(`../assets/mitsuPoziomo.jpg`, import.meta.url).href,
      },
      {
        src: new URL(`../assets/mitsuPoziomo.jpg`, import.meta.url).href,
      },
      {
        src: new URL(`../assets/mitsuPoziomo.jpg`, import.meta.url).href,
      },
    ],
  }),
  methods: {
    getImageUrl() {
      return new URL(`../assets/mitsuPoziomo.jpg`, import.meta.url).href;
    },
    getImage(name) {
      return new URL(`../assets/${name}.png`, import.meta.url).href;
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
    size() {
      switch (this.$vuetify.display.name) {
        case "xs":
          return "width:90%";
        case "sm":
          return "width:90%";
        case "md":
          return "width:60%";
        case "lg":
          return "width:50%";
        case "xl":
          return "width:45%";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.new-transition {
  &-leave-active {
    position: absolute;
  }
  &-enter-active,
  &-leave,
  &-leave-to {
    transition: 1000ms; /* here you can define your desired time for transition */
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
