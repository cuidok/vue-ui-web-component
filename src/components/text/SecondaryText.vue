<script setup>
import BasicText from "@/components/text/BasicText.vue";
import {ref} from "vue";

const theme = ref({
  color: '#808080',
  fontSize: '14px',
})

const props = defineProps({
  style: {
    type: Object,
  },
});

const textStyle = ref({
  ...theme.value,
  ...props.style,
});
</script>

<template>
  <basic-text :style="textStyle">
    <slot></slot>
  </basic-text>
</template>

<style scoped>

</style>