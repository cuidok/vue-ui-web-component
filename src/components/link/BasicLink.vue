<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  style: {
    type: Object,
  },
  handleClick: {
    type: Function,
    required: true,
  },
});

const linkFontStyle = () => {
  const { fontSize, fontWeight, fontColor } = props.style || {};
  return {
    ...(fontSize && { fontSize: fontSize }),
    ...(fontWeight && { fontWight: fontWeight }),
    ...(fontColor && { color: fontColor }),
  };
};
</script>

<template>
  <a class="basic-link__font basic-link__style" @click="handleClick" :style="linkFontStyle">
    <slot></slot>
  </a>
</template>

<style scoped>
.basic-link__style {
  --font-size: 16px;
  --font-weight: 400;
  --font-color: #0078ee;
}
.basic-link__font {
  font-family:
      Inter,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: var(--font-size);
  font-weight: var(--font-weight);
  color: var(--font-color);
}

.basic-link__font:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>