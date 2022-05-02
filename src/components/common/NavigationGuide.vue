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
    <li :class="$route.path === '/' ? 'active' : ''"><a>Główna</a></li>
    <li><a>Oferta</a></li>
    <li><a>Kontakt</a></li>
    <li><a>O nas</a></li>
  </ul>
</template>

<script>
export default {
  name: "NavigationGuide",
};
</script>

<style lang="scss" scoped>
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
