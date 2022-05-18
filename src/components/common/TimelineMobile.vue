<template>
  <div v-for="(item, i) in items" :key="i">
    <div class="ma-6">
      <p class="text-justify py-auto">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Contrary to popular belief, Lorem Ipsum is not
        simply random text. It has roots in a piece of classical Latin
        literature from 45 BC, making it over 2000 years old. Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem
        Ipsum passage, and going through the cites of the word in classical
        literature, discovered the undoubtable source.
      </p>
    </div>
    <v-card class="ma-6">
      <v-img :src="item.src" cover :lazy-src="item.src">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>

      <v-card-title> Maszyna nazwa </v-card-title>

      <v-card-subtitle> Coś krótkiego </v-card-subtitle>

      <v-card-actions>
        <v-btn
          color="orange-lighten-2"
          variant="text"
          @click="item.show = !item.show"
        >
          Pokaż szczegóły
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          :icon="item.show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="item.show = !item.show"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="item.show">
          <v-divider></v-divider>

          <v-card-text>
            Richard McClintock, a Latin professor at Hampden-Sydney College in
            Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word in classical literature, discovered the undoubtable
            source.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "timeLine",
  data() {
    return {
      show: false,
      items: [
        {
          color: "#0477ba",
          icon: "mdi-tools",
          src: new URL(`../../assets/mitsuPoziomo.jpg`, import.meta.url).href,
          show: false,
        },
        {
          color: "#0477ba",
          icon: "",
          src: new URL(`../../assets/laser.jpg`, import.meta.url).href,
          show: false,
        },
        {
          color: "#0477ba",
          icon: "",
          src: new URL(`../../assets/przebijarka.jpg`, import.meta.url).href,
          show: false,
        },
        {
          color: "#0477ba",
          icon: "",
          src: new URL(`../../assets/agie.jpg`, import.meta.url).href,
          show: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
