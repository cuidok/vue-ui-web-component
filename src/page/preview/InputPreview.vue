<script setup>

import BasicInput from "@/components/input/BasicInput.vue";
import LabelInput from "@/components/input/LabelInput.vue";
</script>

<template>
  <div class="input-preview__container">
    <div class="input-preview__title">
      <h1>Inputs</h1>
    </div>
    <div class="input-preview__inputs">
      <div class="input-preview__input">
        <basic-input></basic-input>
      </div>
      <div class="input-preview__input">
        <label-input :label="'This is label'" :placeholder="'This is placeholder'" :style="{width: '200px', placeholderColor: 'red'}"></label-input>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-preview__input {
  margin-bottom: 10px;
}
</style>