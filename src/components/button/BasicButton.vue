<script setup>
import {computed, ref} from "vue";

const isHovered = ref(false);

const props = defineProps({
  style: {
    type: Object,
    default: () => {
      return {
        width: '120px',
        height: '36px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: 'var(--color-background)',
        hoverBackgroundColor: 'var(--color-background-hover)',
        color: 'var(--color-text)',
        hoverColor: 'var(--color-text-hover)',
        loadingRingSize: '16px',
        loadingRingWeight: '2px',
        loadingRingColor: 'var(--color-loading-ring)',
        loadingRingBackgroundColor: 'var(--color-loading-ring-background)',
      };
    },
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  handleClick: {
    type: Function,
    default: () => {
    },
  },
});

const buttonStyle = computed(() => {
  return {
    width: props.style.width,
    height: props.style.height,
    border: props.style.border,
    borderRadius: props.style.borderRadius,
    backgroundColor: isHovered.value ? props.style.hoverBackgroundColor : props.style.backgroundColor,
    color: isHovered.value ? props.style.hoverColor : props.style.color,
  };
});

const loadingRingStyle = computed(() => {
  return {
    width: props.style.loadingRingSize,
    height: props.style.loadingRingSize,
    border: `${props.style.loadingRingWeight} solid ${props.style.loadingRingBackgroundColor}`,
    borderTopColor: props.style.loadingRingColor,
  };
});

</script>

<template>
  <button class="basic-button__button basic-button__color"
          :style="buttonStyle"
          @mouseover="isHovered = true"
          @mouseleave="isHovered = false"
          @click="handleClick">
    <span v-if="isLoading" class="ring-loading" :style="loadingRingStyle"></span>
    <slot v-else></slot>
  </button>
</template>

<style scoped>
.basic-button__color {
  --color-background: #f1f1f1;
  --color-background-hover: #e7e7e7;
  --color-text: #494949FF;
  --color-text-hover: #000000;
  --color-loading-ring: #6070ff;
  --color-loading-ring-background: #ffffff;
}

.basic-button__button {
  width: 120px;
  height: 36px;
  border: none;
  border-radius: 2px;
  background-color: var(--color-background);
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

.basic-button__button:hover {
  background-color: var(--color-background-hover);
  color: var(--color-text-hover);
}

.ring-loading {
  width: 16px;
  height: 16px;
  border: 2px solid var(--color-loading-ring-background);
  border-top-color: var(--color-loading-ring);
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