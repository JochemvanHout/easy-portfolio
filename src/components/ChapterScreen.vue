<template>
  <div class="chapter-screen-wrapper"
       :id="chapterId">
    <slot name="content">

    </slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  chapterId: String,
  backgroundColor: String
});

// const backgroundColor = 'red';

</script>

<style lang="scss" scoped>

.chapter-screen-wrapper {
  width: 100%;
  height: 50vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: v-bind(backgroundColor);
}

</style>