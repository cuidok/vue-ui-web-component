<script setup>
import BasicText from "@/components/text/BasicText.vue";
import {ref} from "vue";

const theme = ref({
  fontWeight: '500',
  fontSize: '16px',
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