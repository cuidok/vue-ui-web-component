<script setup>
import {computed, ref} from "vue";

const props = defineProps({
  style: {
    type: Object
  },
  id: {
    type: String
  },
  type: {
    type: String
  },
  placeholder: {
    type: String,
  },
  label: {
    type: String
  }
});

const containerStyle = computed(() => {
  const {width, height} = props.style || {};
  return {
    ...(width && {width: width}),
    ...(height && {height: height}),
  };
});

const labelStyle = computed(() => {
  const {labelFontSize, labelFontColor, labelFontWeight} = props.style || {};
  return {
    ...(labelFontSize && {fontSize: labelFontSize}),
    ...(labelFontColor && {color: labelFontColor}),
    ...(labelFontWeight && {fontWeight: labelFontWeight}),
  };
});

const isFocus = ref(false);

const inputStyle = computed(() => {
  const {
    inputPadding,
    inputFontSize,
    inputFontColor,
    inputBorderColor,
    inputBorderRadius,
    focusBorderColor,
    focusBoxShadowColor,
    placeholderColor
  } = props.style || {};

  let style = {
    ...(inputPadding && {padding: inputPadding}),
    ...(inputFontSize && {fontSize: inputFontSize}),
    ...(inputFontColor && {color: inputFontColor}),
    ...(inputBorderColor && {borderColor: inputBorderColor}),
    ...(inputBorderRadius && {borderRadius: inputBorderRadius}),
    ...(placeholderColor && {'--placeholder-color': placeholderColor})
  };

  if (isFocus.value) {
    style = {
      ...style,
      ...(focusBorderColor && {borderColor: focusBorderColor}),
      ...(focusBoxShadowColor && {boxShadow: `0 0 0 1px ${focusBoxShadowColor}`}),
    };
  }

  return style;
});
</script>

<template>
  <div class="label-input__container label-input__style" :style="containerStyle">
    <label class="label-input__title"
           :for="id"
           :style="labelStyle">{{ label }}</label>
    <input class="label-input__input"
           :type="type"
           :id="id"
           :placeholder="placeholder"
           :style="inputStyle"
           @focus="isFocus = true"
           @blur="isFocus = false"/>
  </div>
</template>

<style scoped>
.label-input__style {
  --input-width: auto;
  --input-height: auto;
  --input-padding: 8px;
  --input-font-size: 16px;
  --input-font-color: #333;
  --input-border-color: #ccc;
  --input-border-radius: 2px;
  --input-focus-border-color: #679bff;
  --input-focus-box-shadow-color: #679bff;
  --input-placeholder-font-color: #999;
  --input-placeholder-font-size: 14px;
  --label-font-size: 14px;
  --label-font-color: #656565;
  --label-font-weight: 500;
}

.label-input__container {
  width: var(--input-width);
  height: var(--input-height);
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;
}

.label-input__title {
  font-family: Inter,
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

  font-size: var(--label-font-size);
  font-weight: var(--label-font-weight);
  color: var(--label-font-color);

  margin-bottom: 4px;
}

.label-input__input {
  width: 100%;
  height: 100%;
  padding: var(--input-padding);
  font-size: var(--input-font-size);
  color: var(--input-font-color);
  border: 1px solid var(--input-border-color);
  border-radius: var(--input-border-radius);
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.label-input__input:focus {
  outline: none;
  border-color: var(--input-focus-border-color);
  box-shadow: 0 0 0 1px var(--input-focus-box-shadow-color);
}

.label-input__input::placeholder {
  color: var(--input-placeholder-font-color);
  font-size: var(--input-placeholder-font-size);
  opacity: 1; /* Firefox */
}

/* Internet Explorer 10-11 */
.label-input__input:-ms-input-placeholder {
  color: var(--input-placeholder-font-color);
  font-size: var(--input-placeholder-font-size);
}

/* Microsoft Edge */
.label-input__input::-ms-input-placeholder {
  color: var(--input-placeholder-font-color);
  font-size: var(--input-placeholder-font-size);
}
</style>