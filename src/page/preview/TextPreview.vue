<script setup>

import BasicText from "@/components/text/BasicText.vue";
import EmphasizeText from "@/components/text/EmphasizeText.vue";
import SecondaryText from "@/components/text/SecondaryText.vue";
</script>

<template>
  <div class="text-preview__container">
    <div class="text-preview__title">
      <h1>Texts</h1>
    </div>
    <div class="text-preview__texts">
      <div class="text-preview__text">
        <basic-text>This is basic text.</basic-text>
      </div>
      <div class="text-preview__text">
        <emphasize-text>This is emphasize text.</emphasize-text>
      </div>
      <div class="text-preview__text">
        <secondary-text>This is secondary text.</secondary-text>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>