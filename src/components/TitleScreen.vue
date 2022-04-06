<template>
  <div class="title-screen-wrapper">
    <section class="section left">
      <img :src="imageSource"
           class="main-image">
    </section>

    <section class="section right">
      <div class="section-text-content">
        <slot name="content" />

        <div v-for="item in titleScreenIndex"
            :key="item.id">
          <a :href="`#${item.link}`">{{ item.name }}</a>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import type titleScreenIndex from '@/types/indexList';

const props = defineProps({
  imageSource: String,
  titleScreenIndex: Array as PropType<titleScreenIndex[]>
});

</script>

<style lang="scss" scoped>

.title-screen-wrapper {
  width: 100%;
  height: 100vh;

  display: flex;

    .section {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .right {
      flex-direction: column;

      .section-text-content {
        width: 70%;
      }
    }

    .left {

      .main-image {
        max-width: 70%;
      }
    }
}

</style>