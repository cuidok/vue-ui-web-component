<script setup>

import PrimaryButton from "@/components/button/PrimaryButton.vue";
import CloseRegularlyNotificationIns from "@/components/notification/CloseRegularlyNotification.js";
</script>

<template>
  <div class="notifications-preview__container">
    <div class="notifications-preview__title">
      <h1>Notifications</h1>
    </div>
    <div class="notifications-preview__buttons">
      <div class="notifications-preview__button">
        <primary-button :handle-click="() => {
          CloseRegularlyNotificationIns({
            title: 'Notification',
            content: 'This is notification content',
            delayMs: 3000,
          });
        }" :style="{width: 'auto'}">Close regularly notification</primary-button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>