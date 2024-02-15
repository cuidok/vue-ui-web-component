<script setup>
import {computed, ref} from "vue";

const isHovered = ref(false);

const props = defineProps({
  /**
   * The style of the button configuration.
   * @type {Object}
   * width: The width of the button.
   * height: The height of the button.
   * border: The border of the button.
   * borderRadius: The border radius of the button.
   * backgroundColor: The background color of the button.
   * hoverBackgroundColor: The background color of the button when hovered.
   * color: The color of the button.
   * hoverColor: The color of the button when hovered.
   * loadingRingSize: The size of the loading ring.
   * loadingRingWeight: The weight of the loading ring.
   * loadingRingColor: The color of the loading ring.
   * loadingRingBackgroundColor: The background color of the loading ring.
   */
  style: {
    type: Object
  },
  /**
   * The loading state of the button.
   * @type {Boolean}
   */
  isLoading: {
    type: Boolean,
    default: false,
  },
  /**
   * The click event of the button.
   * @type {Function}
   */
  handleClick: {
    type: Function,
    default: () => {
    },
  },
});

const buttonStyle = computed(() => {
  const { width, height, border, borderRadius, backgroundColor, hoverBackgroundColor, color, hoverColor } = props.style || {};
  return {
    ...(width && { width }),
    ...(height && { height }),
    ...(border && { border }),
    ...(borderRadius && { borderRadius }),
    ...(isHovered.value && hoverBackgroundColor && { backgroundColor: hoverBackgroundColor }),
    ...(!isHovered.value && backgroundColor && { backgroundColor }),
    ...(isHovered.value && color && { color: hoverColor }),
    ...(!isHovered.value && color && { color }),
  };
});

const loadingRingStyle = computed(() => {
  const { loadingRingSize, loadingRingWeight, loadingRingColor, loadingRingBackgroundColor } = props.style || {};
  return {
    ...(loadingRingSize && { width: loadingRingSize }),
    ...(loadingRingSize && { height: loadingRingSize }),
    ...(loadingRingWeight && loadingRingBackgroundColor && { border: `${loadingRingWeight} solid ${loadingRingBackgroundColor}` }),
    ...(loadingRingColor && { borderTopColor: loadingRingColor }),
  };
});
</script>

<template>
  <button class="basic-button__button basic-button__style"
          :style="buttonStyle"
          @mouseover="isHovered = true"
          @mouseleave="isHovered = false"
          @click="handleClick">
    <span v-if="isLoading" class="ring-loading" :style="loadingRingStyle"></span>
    <slot v-else></slot>
  </button>
</template>

<style scoped>
.basic-button__style{
  --width: 120px;
  --height: 36px;
  --border: none;
  --border-radius: 5px;
  --background-color: #f1f1f1;
  --background-color-hover: #e7e7e7;
  --font-size: 16px;
  --font-wight: 500;
  --color: #494949FF;
  --color-hover: #000000;
  --loading-ring-size: 16px;
  --loading-ring-weight: 2px;
  --loading-ring-color: #6070ff;
  --loading-ring-background-color: #ffffff;
}

.basic-button__button {
  width: var(--width);
  height: var(--height);
  border: var(--border);
  border-radius: var(--border-radius);
  background-color: var(--background-color);
  color: var(--color-text);
  font-size: var(--font-size);
  font-weight: var(--font-wight);
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

.basic-button__button:hover {
  background-color: var(--background-color-hover);
  color: var(--color-hover);
}

.ring-loading {
  width: var(--loading-ring-size);
  height: var(--loading-ring-size);
  border: var(--loading-ring-weight) solid var(--loading-ring-background-color);
  border-top-color: var(--loading-ring-color);
  border-radius: 50%;
  background-color: transparent;
  animation: spin-ring 1s linear infinite;
}

@keyframes spin-ring {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>