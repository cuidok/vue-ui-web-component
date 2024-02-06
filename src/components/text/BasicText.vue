<script setup>
import {computed, defineProps} from "vue";

const props = defineProps({
  /**
   * The style object to be applied to the text.
   * @type {Object}
   * fontSize: The font size of the text.
   * fontWeight: The font weight of the text.
   * color: The color of the text.
   */
  style: {
    type: Object
  },
});

const computedStyle = computed(() => {
  const { fontSize, color, fontWeight } = props.style || {};
  return {
    ...(fontSize && { fontSize: fontSize }),
    ...(fontWeight && { fontWeight: fontWeight }),
    ...(color && { color: color }),
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