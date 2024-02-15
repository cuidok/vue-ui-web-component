<script setup>
import BasicButton from "@/components/button/BasicButton.vue";
import {computed, ref} from "vue";

const theme = ref({
  backgroundColor: '#f1f1f1',
  hoverBackgroundColor: '#ff4d4f',
  color: '#ff4d4f',
  hoverColor: '#fff',
})

const props = defineProps({
  style: {
    type: Object,
  },
  isLoading: {
    type: Boolean,
  },
  handleClick: {
    type: Function,
  },
});

const buttonStyle = computed(() => {
  return {
    ...theme.value,
    ...props.style,
  };
});
</script>

<template>
  <basic-button :style="buttonStyle" :is-loading="isLoading" :handle-click="handleClick">
    <slot></slot>
  </basic-button>
</template>

<style scoped>

</style>