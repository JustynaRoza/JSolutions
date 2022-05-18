<template>
  <Carousel :items-to-show="1" :wrap-around="true">
    <Slide v-for="item in items" :key="slide">
      <v-img
        :src="item.src"
        height="300"
        width="500"
        class="carousel__item"
      ></v-img>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  name: "CarouselFotos",
  data() {
    return {
      items: [
        {
          src: new URL(`../../assets/mitsuPoziomo.jpg`, import.meta.url).href,
        },
        {
          src: new URL(`../../assets/laser.jpg`, import.meta.url).href,
        },
        {
          src: new URL(`../../assets/przebijarka.jpg`, import.meta.url).href,
        },
        {
          src: new URL(`../../assets/agie.jpg`, import.meta.url).href,
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>

<style lang="scss" scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
