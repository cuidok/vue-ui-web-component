<script setup>

import BasicText from "@/components/text/BasicText.vue";
import EmphasizeText from "@/components/text/EmphasizeText.vue";
</script>

<template>
  <div class="text-preview__container">
    <div class="text-preview__title">
      <h1>Texts</h1>
    </div>
    <div class="text-preview__texts">
      <div class="text-preview__text">
        <basic-text>This is basic text.</basic-text>
        <emphasize-text>This is emphasize text.</emphasize-text>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>