<script setup>

</script>

<template>
  <div class="app__container">
    <div class="app__menu">

    </div>
    <div class="app__body">

    </div>
  </div>
</template>

<style scoped>
.app__container {
  --menu-color: #d7d7d7;
  --body-color: #dedede;
}

.app__container {
  width: 100%;
  height: 98vh;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

.app__menu {
  width: 100px;
  height: 100%;
  margin-right: 10px;
  background-color: var(--menu-color);
}

.app__body {
  width: calc(100% - 100px);;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--body-color);
}

</style>