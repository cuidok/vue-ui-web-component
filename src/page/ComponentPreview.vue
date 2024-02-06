<script setup>

import ButtonPreview from "@/page/preview/ButtonPreview.vue";
import TextPreview from "@/page/preview/TextPreview.vue";
import TablePreview from "@/page/preview/TablePreview.vue";
import InputPreview from "@/page/preview/InputPreview.vue";
</script>

<template>
  <div class="app__container">
    <div class="app__menu"></div>
    <div class="app__body">
      <text-preview></text-preview>
      <input-preview></input-preview>
      <button-preview></button-preview>
      <table-preview></table-preview>
    </div>
  </div>
</template>

<style scoped>
.app__container {
  width: 100%;
  height: 98vh;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

.app__menu {
  width: 100px;
  height: 100%;
  margin-right: 10px;
}

.app__body {
  width: calc(100% - 100px);;
  height: 100%;
  display: flex;
  flex-direction: column;
}

</style>