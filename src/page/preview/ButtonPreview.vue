<script setup>

import BasicButton from "@/components/button/BasicButton.vue";
import DangerButton from "@/components/button/DangerButton.vue";
import PrimaryButton from "@/components/button/PrimaryButton.vue";
</script>

<template>
  <div class="buttons-preview__container">
    <div class="buttons-preview__title">
      <h1>Buttons</h1>
    </div>
    <div class="buttons-preview__buttons">
      <div class="buttons-preview__button">
        <basic-button>Basic Button</basic-button>
      </div>
      <div class="buttons-preview__button">
        <basic-button :is-loading="true">Loading Button</basic-button>
      </div>
      <div class="buttons-preview__button">
        <danger-button>Danger Button</danger-button>
      </div>
      <div class="buttons-preview__button">
        <primary-button>Primary Button</primary-button>
      </div>
    </div>
  </div>

</template>

<style scoped>
.buttons-preview__buttons {
  display: flex;
  flex-direction: row;
}

.buttons-preview__button {
  margin-right: 10px;
}
</style>