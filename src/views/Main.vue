<template>
  <title-screen image-source="https://i.redd.it/nrbim3cb7r771.jpg" 
                :title-screen-index="indexList">
    <template #content>
      <h1>hoohoo</h1>
      <p>asdlkfja;sldkfja;sldkfja;sfjkla;slkdfja;sldkfja;weoitu aw;oetjif a</p>
    </template>
  </title-screen>

  <chapter-screen chapter-id="nuts"
                  background-color="pink">
    <template #content>
      <h1>Example chapter</h1>
      <p>waluigi waluigi waluigi</p>
    </template>
  </chapter-screen>

  <double-content-screen>
    <template #content-left>
      <single-multi-image :content="testImages"/>
    </template>

    <template #content-right>
      <img src="../assets/image.png">
    </template>
  </double-content-screen>

  



</template>

<script setup lang="ts">
import TitleScreen from '@/components/TitleScreen.vue';
import ChapterScreen from '@/components/ChapterScreen.vue';
import SingleMultiImage from '@/components/SingleMultiImage.vue';
import DoubleContentScreen from '@/components/DoubleContentScreen.vue';

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

const testImages: string[] = [
  'https://i.redd.it/nrbim3cb7r771.jpg',
  'https://i.redd.it/jblgbqqvznq81.jpg',
  'https://i.redd.it/37oq5oskkpq81.jpg',
  'src/assets/image.png'
]

// const testImages: string = 'https://i.redd.it/nrbim3cb7r771.jpg';

</script>

<style lang="scss" scoped>

</style>

