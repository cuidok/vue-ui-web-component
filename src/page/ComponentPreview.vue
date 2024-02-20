<script setup>
import ButtonPreview from "@/page/preview/ButtonPreview.vue";
import TextPreview from "@/page/preview/TextPreview.vue";
import TablePreview from "@/page/preview/TablePreview.vue";
import InputPreview from "@/page/preview/InputPreview.vue";
import NotificationPreview from "@/page/preview/NotificationPreview.vue";
import LinkPreview from "@/page/preview/LinkPreview.vue";
</script>

<template>
  <div class="app__container">
    <div class="app__header">
      Vue UI web components
    </div>
    <div class="app__body">
      <div class="app__menu"></div>
      <div class="app__preview">
        <text-preview></text-preview>
        <link-preview></link-preview>
        <input-preview></input-preview>
        <button-preview></button-preview>
        <table-preview></table-preview>
        <notification-preview></notification-preview>
      </div>
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
  flex-direction: column;
}

.app__header {
  width: 100%;
  height: 50px;
  background-color: #2d2d2d;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #cccccc;
}

.app__body {
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: row;
}

.app__menu {
  width: 400px;
  height: 100%;
  margin-right: 100px;
}

.app__preview {
  height: 100%;
  display: flex;
  flex-direction: column;
}

</style>