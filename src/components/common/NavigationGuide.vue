<template>
  <!-- <v-layout>

    <v-app-bar color="white" prominent class="mr-16">
      <v-spacer></v-spacer>
      <p class="font-weight-medium mx-5">Główna</p>
      <p class="font-weight-medium mx-5">Kontakt</p>
      <p class="font-weight-medium mx-5">Oferta</p>
    </v-app-bar>

    <v-main> </v-main>
  </v-layout> -->
  <ul class="text-uppercase font-weight-bold" v-if="!$vuetify.display.mobile">
    <li :class="$route.path === '/' ? 'active' : ''" @click="$router.push('/')">
      <a>Główna</a>
    </li>
    <li><a>Oferta</a></li>
    <li><a>Kontakt</a></li>
    <li
      :class="$route.path === '/about' ? 'active' : ''"
      @click="$router.push('/about')"
    >
      <a>O nas</a>
    </li>
    <li style="float: left; padding-left: 12px">
      <v-img :src="Src()" :class="calcStyles"></v-img>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavigationGuide",
  props: {
    scrollVal: Number,
  },
  methods: {
    Src() {
      return new URL(`../../assets/Logo-cropped.svg`, import.meta.url).href;
    },
  },
  computed: {
    calcWidth() {
      if (this.scrollVal === 0) {
        return 200;
      }
      if (this.scrollVal > 0 && this.scrollVal <= 100) return 250;
      if (this.scrollVal > 100 && this.scrollVal) return 300;
    },
    calcHeight() {
      if (this.scrollVal === 0) {
        return 80;
      }
      if (this.scrollVal > 0 && this.scrollVal <= 100) return 100;
      if (this.scrollVal > 100 && this.scrollVal) return 120;
    },
    calcStyles() {
      if (this.scrollVal === 0) {
        return "smallImg";
      }
      if (this.scrollVal > 0 && this.scrollVal <= 100) return "mediumImg";
      if (this.scrollVal > 100 && this.scrollVal) return "bigImg";
    },
  },
};
</script>

<style lang="scss" scoped>
.smallImg {
  width: 200px;
  height: 80px;
  transition: all linear 0.3s;
}
.mediumImg {
  width: 250px;
  height: 100px;
  transition: all linear 0.3s;
}
.bigImg {
  width: 300px;
  height: 120px;
  transition: all linear 0.3s;
}
ul {
  list-style-type: none;
  padding-right: 16%;
  padding: 0;
  overflow: hidden;
  background-color: white;
}

li {
  float: right;
  margin: 4px;
}

li a {
  display: block;
  color: rgb(122, 120, 120);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover,
li.active a {
  color: black;
}

.active a:after {
  border-bottom: solid 3px #17406d;
  transform: scaleX(1);
  color: black;
}

a:after {
  display: block;
  content: "";
  border-bottom: solid 3px #17406d;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
  width: 120%;
  margin-left: -10%;
  color: black;
}
a:hover:not(.active):after {
  color: black;
  transform: scaleX(1);
}
</style>
