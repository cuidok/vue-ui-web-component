<script setup>
import BasicTable from "@/components/table/BasicTable.vue";
import TextButton from "@/components/button/TextButton.vue";

const tableHeader = [
  {
    label: 'Header 1',
    key: 'header1',
  },
  {
    label: 'Header 2',
    key: 'header2',
  },
  {
    label: 'Header 3',
    key: 'header3',
  },
];

const tableData = [
  {
    header1: 'Row 1 Data 1',
    header2: 'Row 1 Data 2',
    header3: 'Row 1 Data 3',
  },
  {
    header1: 'Row 2 Data 1',
    header2: 'Row 2 Data 2',
    header3: 'Row 2 Data 3',
  },
  {
    header1: 'Row 3 Data 1',
    header2: 'Row 3 Data 2',
    header3: 'Row 3 Data 3',
  },
];

</script>

<template>
  <div class="tables-preview__container">
    <div class="tables-preview__title">
      <h1>Tables</h1>
    </div>
    <div class="tables-preview__buttons">
      <div class="tables-preview__button">
        <basic-table :header="tableHeader" :data="tableData">
          <template #default="lineItem">
            <text-button :handle-click="() => console.log(lineItem)">Console</text-button>
          </template>
        </basic-table>
      </div>
    </div>
    <div class="tables-preview__buttons">
      <div class="tables-preview__button">
        <basic-table :header="tableHeader" :data="[]"></basic-table>
      </div>
    </div>
    <div class="tables-preview__buttons">
      <div class="tables-preview__button">
        <basic-table :header="tableHeader" :is-loading="true"></basic-table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tables-preview__buttons {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}
</style>