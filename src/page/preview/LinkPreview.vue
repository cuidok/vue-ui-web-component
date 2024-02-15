<script setup>

import BasicLink from "@/components/link/BasicLink.vue";

const openNewTab = () => {
  window.open('https://github.com/', '_blank');
}
</script>

<template>
  <div class="text-preview__container">
    <div class="text-preview__title">
      <h1>Links</h1>
    </div>
    <div class="text-preview__texts">
      <div class="text-preview__text">
        <basic-link :content="'This is edge url'" :handle-click="openNewTab">This is link text.</basic-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>