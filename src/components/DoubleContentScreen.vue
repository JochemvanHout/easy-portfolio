<template>
  <div class="double-content-wrapper">
    <section class="section left">
      <slot name="content-left" />
    </section>

    <section class="section right">
        <slot name="content-right" />
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>

.double-content-wrapper {
  width: 100%;
  height: 100vh;

  display: flex;

  .section {
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}

</style>