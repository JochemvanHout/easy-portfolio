<template>
  <div class="image-wrapper">
    <div v-if="propIsSingleImage">
      <img :src="content">
    </div>
    <div v-else>
      <carousel :items-to-show="1">
        <slide v-for="image in content" :key="image">
          <img class="carousel-item" :src="image">
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const props = defineProps({
  content: {
    type: [String, Array] as PropType<String | String[]>,
    required: true
  }
});

const propIsSingleImage = computed(() => typeof props.content === 'string')

</script>

<style lang="scss" scoped>

.image-wrapper {
  width: 100%;
  height: 50vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: center;

  .carousel-item {
    object-fit: contain;

    width: 100%;
    max-height: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

<style lang="scss">

.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  margin-right: 25px;
}

.carousel__prev {
  box-sizing: content-box;
  border: 5px solid white;
  margin-left: 25px;
}



</style>