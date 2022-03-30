<template>
  <title-screen image-source="https://i.redd.it/nrbim3cb7r771.jpg" 
                :title-screen-index="indexList" />

  <chapter-screen chapter-id="nuts"
                  chapter-title="Example chapter"
                  chapter-text="waluigi waluigi waluigi"/>

</template>

<script setup lang="ts">
import TitleScreen from '@/components/TitleScreen.vue';
import ChapterScreen from '@/components/ChapterScreen.vue';

import type titleScreenIndex from '@/types/indexList';

const indexList: titleScreenIndex[] = [
  {
    name: 'deez',
    link: 'nuts',
    id: 0
  },
    {
    name: 'ligma',
    link: 'balls',
    id: 1
  },
]
</script>

<style lang="scss" scoped>

</style>