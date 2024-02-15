<script setup>
import {computed, onMounted, ref} from "vue";

const props = defineProps({
  /**
   * The style of the close regularly notification configuration.
   * @type {Object}
   * width: The width of the close regularly notification.
   * backgroundColor: The background color of the close regularly notification.
   * boxShadowColor: The box shadow color of the close regularly notification.
   * timeBarColor: The color of the time bar.
   * timeBarShadowColor: The shadow color of the time bar.
   * titleFontSize: The font size of the title.
   * titleFontWeight: The font weight of the title.
   * titleFontColor: The color of the title.
   * contentFontSize: The font size of the content.
   * contentFontWeight: The font weight of the content.
   * contentFontColor: The color of the content.
   */
  style: {
    type: Object,
  },
  title: {
    type: String,
    default: undefined,
  },
  content: {
    type: String,
    default: undefined,
  },
  delayMs: {
    type: Number,
    default: 3000,
  },
})

const progress = ref(0);

const createTimeProcessBar = () => {
  const interval = setInterval(() => {
    progress.value += 1;
    if (progress.value >= 100) {
      clearInterval(interval);
    }
  }, props.delayMs / 100);
}

onMounted(() => {
  createTimeProcessBar();
  console.log(props.style)
});

const notificationBoxStyle = computed(() => {
  const { width, backgroundColor, boxShadowColor } = props.style || {};

  return {
    ...(width && {'--width': width}),
    ...(backgroundColor && {'--background-color': backgroundColor}),
    ...(boxShadowColor && {'--box-shadow-color': boxShadowColor}),
  };
});

const titleFontStyle = computed(() => {
  const { titleFontSize, titleFontWeight, titleFontColor } = props.style || {};

  return {
    ...(titleFontSize && {'--title-font-size': titleFontSize}),
    ...(titleFontWeight && {'--title-font-weight': titleFontWeight}),
    ...(titleFontColor && {'--title-font-color': titleFontColor}),
  };
});

const contentFontStyle = computed(() => {
  const { contentFontSize, contentFontWeight, contentFontColor } = props.style || {};

  return {
    ...(contentFontSize && {'--content-font-size': contentFontSize}),
    ...(contentFontWeight && {'--content-font-weight': contentFontWeight}),
    ...(contentFontColor && {'--content-font-color': contentFontColor}),
  };
});

const timeBarStyle = computed(() => {
  const { timeBarColor, timeBarShadowColor } = props.style || {};

  return {
    ...(timeBarColor && {'--time-bar-color': timeBarColor}),
    ...(timeBarShadowColor && {'--time-bar-shadow-color': timeBarShadowColor}),
  };
});
</script>

<template>
  <div class="close-regularly-notification__container close-regularly-notification__style" :style="notificationBoxStyle">
    <div class="close-regularly-notification__title">
      <p class="close-regularly-notification__title-font close-regularly-notification__font" :style="titleFontStyle"> {{title}} </p>
    </div>
    <div class="close-regularly-notification__content">
      <p class="close-regularly-notification__content-font close-regularly-notification__font" :style="contentFontStyle"> {{content}} </p>
    </div>
    <div class="close-regularly-notification__time-bar" v-bind:style="{ width: progress + '%', ...timeBarStyle }"></div>
  </div>
</template>

<style scoped>
.close-regularly-notification__style {
  --width: 300px;
  --background-color: #ffffff;
  --box-shadow-color: #d3d3d3;
  --time-bar-color: linear-gradient(to right, #7F7FD5, #86A8E7);
  --time-bar-shadow-color: #8f8f8f;
  --title-font-size: 18px;
  --title-font-weight: 600;
  --title-font-color: #000000;
  --content-font-size: 14px;
  --content-font-weight: 400;
  --content-font-color: #000000;
}

.close-regularly-notification__container {
  height: auto;
  min-height: 100px;
  width: var(--width);
  border-radius: 4px;
  background-color: var(--background-color);
  position: fixed;
  top: 30px;
  right: 30px;
  padding: 0 20px;
  word-wrap: break-word;
  box-shadow: 0 2px 4px var(--box-shadow-color);
  animation: slide-down 0.3s ease-in-out;
}

.close-regularly-notification__font {
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
  margin: 12px 0;
}

.close-regularly-notification__title-font {
  font-size: var(--title-font-size);
  font-weight: var(--title-font-weight);
  color: var(--title-font-color);
}

.close-regularly-notification__content-font {
  font-size: var(--content-font-size);
  font-weight: var(--content-font-weight);
  color: var(--content-font-color);
}

.close-regularly-notification__time-bar {
  height: 5px;
  border-radius: 2px;
  background: var(--time-bar-color);
  box-shadow: 0 1px 1px var(--time-bar-shadow-color);
  transition: width 0.1s ease-in-out;
  margin: 10px 0 10px 0;
}
@keyframes slide-down {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>