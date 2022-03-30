<template>
  <div class="chapter-screen-wrapper"
       :id="chapterId">
    <section class="section">
      <h1>{{ chapterTitle }}</h1>
      <p>{{ chapterText }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  chapterTitle: String,
  chapterText: String,
  chapterId: String
});

</script>

<style lang="scss" scoped>

.chapter-screen-wrapper {
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: center;
}

</style>