<script setup>
import {computed, defineProps, ref} from "vue";

const props = defineProps({
  /**
   * The style of the input configuration.
   * @type {Object}
   * width: The width of the input.
   * height: The height of the input.
   * padding: The padding of the input.
   * fontSize: The font size of the input.
   * color: The color of the input.
   * borderColor: The border of the input.
   * borderRadius: The border radius of the input.
   * focusBorderColor: The border color of the input when focused.
   */
  style: {
    type: Object
  },
  placeholder: {
    type: String,
  },
  modelValue: {
    type: String
  }
});

const emit = defineEmits(['update:modelValue'])

const onInput = (event) => {
  emit('update:modelValue', event.target.value)
}

const isFocus = ref(false);

const inputStyle = computed(() => {
  const { width, height, padding, fontSize, color, borderColor, borderRadius, focusBorderColor } = props.style || {};

  let style = {
    ...(width && {width: width}),
    ...(height && {height: height}),
    ...(padding && {padding: padding}),
    ...(fontSize && {fontSize: fontSize}),
    ...(color && {color: color}),
    ...(borderColor && {borderColor: borderColor}),
    ...(borderRadius && {borderRadius: borderRadius}),
  };

  if (isFocus.value) {
    style = {
      ...style,
      ...(focusBorderColor && {borderColor: focusBorderColor}),
      ...(focusBorderColor && {boxShadow: `0 0 0 1px ${focusBorderColor}`}),
    };
  }

  return style;
});
</script>

<template>
  <input class="basic-input__input basic-input__style"
         :placeholder="placeholder"
         @focus="isFocus = true"
         @blur="isFocus = false"
         :style="inputStyle"
         @input="onInput">
</template>

<style scoped>
.basic-input__style {
  --input-width: auto;
  --input-height: auto;
  --input-padding: 8px;
  --input-font-size: 16px;
  --input-font-color: #333;
  --input-border-color: #ccc;
  --input-border-radius: 2px;
  --input-focus-border-color: #679bff;
  --input-focus-box-shadow-color: #679bff;
}

.basic-input__input {
  width: var(--input-width);
  height: var(--input-height);
  padding: var(--input-padding);
  font-size: var(--input-font-size);
  color: var(--input-font-color);
  border: 1px solid var(--input-border-color);
  border-radius: var(--input-border-radius);
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.basic-input__input:focus {
  outline: none;
  border-color: var(--input-focus-border-color);
  box-shadow: 0 0 0 1px var(--input-focus-box-shadow-color);
}
</style>