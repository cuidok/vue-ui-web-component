<script setup>
import {computed, defineProps} from "vue";

const props = defineProps({
  style: {
    type: Object,
    default: () => {
      return {
        fontSize: '15px',
        fontWeight: 'normal',
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
  <p class="normal-text__text normal-text__color" :style="computedStyle">
    <slot></slot>
  </p>
</template>

<style scoped>
.normal-text__color {
  --color-text: #494949FF;
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
  font-size: 15px;
  font-weight: normal;
  color: var(--color-text);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p {
  margin: 15px 0;
  padding: 0;
}
</style>