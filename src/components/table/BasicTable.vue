<script setup>

import {computed, defineProps, ref} from "vue";

const props = defineProps({
  /**
   * The style of the table configuration.
   * @type {Object}
   * tableWidth: The width of the table.
   * tableBorderColor: The border color of the table.
   * tableHeaderBackgroundColor: The background color of the table header.
   * tableThFontSize: The font size of the table header.
   * tableThFontWeight: The font weight of the table header.
   * tableTdFontSize: The font size of the table data.
   * tableTdFontWeight: The font weight of the table data.
   * tableBodyTrHoverBackgroundColor: The background color of the table body row when hovered.
   * loadingRingSize: The size of the loading ring.
   * loadingRingWeight: The weight of the loading ring.
   * loadingRingColor: The color of the loading ring.
   * loadingRingBackgroundColor: The background color of the loading ring.
   */
  style: {
    type: Object,
  },
  /**
   * The header of the table.
   * @type {Array}
   * label: The label of the header.
   * key: The key of the header.
   * width: The width of the header.
   */
  header: {
    type: Array,
    default: () => {
      return [];
    },
  },
  /**
   * The data of the table.
   * @type {Array}
   */
  data: {
    type: Array,
    default: () => {
      return [];
    },
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});

let hoverLineKey = ref(undefined);

const tableStyle = computed(() => {
  const {tableWidth, tableBorderColor} = props.style || {};
  return {
    ...(tableWidth && {width: tableWidth}),
    ...(tableBorderColor && {borderColor: tableBorderColor}),
  }
});

const tableHeaderLineStyle = computed(() => {
  const {tableHeaderBackgroundColor} = props.style || {};
  return {
    ...(tableHeaderBackgroundColor && {backgroundColor: tableHeaderBackgroundColor}),
  };
});

const tableHeaderFontStyle = computed(() => {
  const {tableThFontSize, tableThFontWeight} = props.style || {};
  return {
    ...(tableThFontSize && {fontSize: tableThFontSize}),
    ...(tableThFontWeight && {fontWeight: tableThFontWeight}),
  };
});

const tableBodyFontStyle = computed(() => {
  const {tableTdFontSize, tableTdFontWeight} = props.style || {};
  return {
    ...(tableTdFontSize && {fontSize: tableTdFontSize}),
    ...(tableTdFontWeight && {fontWeight: tableTdFontWeight}),
  };
});

const tableBodyLineStyle = computed(() => (key) => {

  const {tableBodyTrHoverBackgroundColor} = props.style || {};

  if (hoverLineKey === undefined) {
    return {}
  }

  if (hoverLineKey.value === key) {
    return {
      ...(tableBodyTrHoverBackgroundColor && {backgroundColor: tableBodyTrHoverBackgroundColor}),
    };
  }
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
  <table class="basic-table__table basic-table__style" :style="tableStyle">
    <thead>
    <tr class="basic-table__head-line" :style="tableHeaderLineStyle">
      <th v-for="(value, key) in header" :key="`${value.key}-${key}`">
        <p class="basic-table__head-font basic-table__font" :style="tableHeaderFontStyle">{{ value.label }}</p>
      </th>
      <th v-if="$slots.default">
        <p class="basic-table__head-font basic-table__font" :style="tableBodyFontStyle"> Operators </p>
      </th>
    </tr>
    </thead>
    <tbody v-if="isLoading" class="basic-table__loading-body">
    <tr>
      <td :colspan="header.length + ($slots.default ? 1 : 0)">
        <div class="basic-table__loading-body__loading-ring-container">
          <p class="basic-table__loading-body__loading-ring" :style="loadingRingStyle"></p>
        </div>
      </td>
    </tr>
    </tbody>
    <tbody v-else-if="props.data && props.data.length > 0">
    <tr v-for="(lineItem, key) in data" :key="key" class="basic-table__body-line" :style="tableBodyLineStyle(key)"
        @mouseover="hoverLineKey = key" @mouseout="hoverLineKey = undefined">
      <td v-for="(h) in header">
        <p class="basic-table__body-font basic-table__font">{{ lineItem[h.key] }}</p>
      </td>
      <td v-if="$slots.default" class="basic-table__operators">
        <slot :lineItem="lineItem"></slot>
      </td>
    </tr>
    </tbody>
    <tbody v-else class="basic-table__empty-body">
    <tr>
      <td :colspan="header.length + ($slots.default ? 1 : 0)">
        <p class="basic-table__empty-body__font basic-table__body-font">No data</p>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
.basic-table__style {
  --table-width: 100%;
  --table-border-color: #f2f2f2;
  --table-header-background-color: #ececec;
  --table-th-font-size: 16px;
  --table-th-font-weight: 500;
  --table-td-font-size: 15px;
  --table-td-font-weight: normal;
  --table-body-tr-hover-background-color: #f2f2f2;
  --loading-ring-size: 16px;
  --loading-ring-weight: 2px;
  --loading-ring-color: #6070ff;
  --loading-ring-background-color: #f1f1f1;
}

.basic-table__font {
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
}

.basic-table__table {
  width: var(--table-width);
  border-collapse: collapse;
  border: 1px solid var(--table-border-color);
  box-shadow: 0 0 2px 0 var(--table-border-color);
}

.basic-table__head-line {
  background-color: var(--table-header-background-color);
  transition: background-color 0.3s ease-in-out;
}

.basic-table__body-line {
  transition: background-color 0.3s ease-in-out;
}

.basic-table__body-line:hover {
  background-color: var(--table-body-tr-hover-background-color);
}

.basic-table__head-font {
  margin: 0;
  font-size: var(--table-th-font-size);
  font-weight: var(--table-th-font-weight);
}

.basic-table__body-font {
  margin: 0;
  font-size: var(--table-td-font-size);
  font-weight: var(--table-td-font-weight);
}

table {
  border-collapse: separate;
  text-indent: initial;
  border-spacing: 0;
}

th {
  padding: 6px 10px;
  border: none;
  text-align: left;
}

td {
  padding: 6px 10px;
  border: none;
}

.basic-table__empty-body {
  height: 100px;
}

.basic-table__empty-body__font {
  text-align: center;
}

.basic-table__loading-body {
  height: 100px;
}

.basic-table__loading-body__loading-ring-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.basic-table__loading-body__loading-ring {
  width: var(--loading-ring-size);
  height: var(--loading-ring-size);
  border: var(--loading-ring-weight) solid var(--loading-ring-background-color);
  border-top-color: var(--loading-ring-color);
  border-radius: 50%;
  background-color: transparent;
  animation: basic-table__loading-body__spin-ring 1s linear infinite;
}

.basic-table__operators {
  display: flex;
  flex-direction: row;
}

@keyframes basic-table__loading-body__spin-ring {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>