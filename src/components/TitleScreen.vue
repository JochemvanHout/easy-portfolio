<template>
  <div class="title-screen-wrapper">
    <section class="section left">
      <img :src="imageSource"
           class="main-image">
    </section>

    <section class="section right">
      <div class="section-text-content">
        <h1>Placeholder title</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <ol>
          <div v-for="item in titleScreenIndex"
              :key="item.id">
            <a :href="`#${item.link}`">{{ item.name }}</a>
          </div>
        </ol>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
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