<script setup>
import BasicButton from "@/components/button/BasicButton.vue";
import {computed, ref} from "vue";

const theme = ref({
  width: 'auto',
  backgroundColor: 'transparent',
  hoverBackgroundColor: '#3f98ff',
  color: '#0078ee',
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