<script setup>
import {computed, defineProps} from "vue";

const props = defineProps({
  style: {
    type: Object,
    default: () => {
      return {
        fontSize: 'var(--font-size)',
        fontWeight: 'var(--font-weight)',
        color: 'var(--color-text)',
      };
    },
  },
});

const computedStyle = computed(() => {
  const { fontSize, color, fontWeight } = props.style;
  return {
    ...(fontSize && { fontSize }),
    ...(fontWeight && { fontWeight }),
    ...(color && { color }),
  };
});

</script>

<template>
  <p class="normal-text__text normal-text__style" :style="computedStyle">
    <slot></slot>
  </p>
</template>

<style scoped>
.normal-text__style {
  --color-text: #181818;
  --font-size: 16px;
  --font-weight: normal;
}

.normal-text__text {
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
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  color: var(--color-text);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p {
  margin: 0;
  padding: 8px 0;
}
</style>