<script setup lang="ts"></script>
<template>
  <div class="container">
    <div class="row">
      <div class="col">1</div>
      <div class="col">2</div>
      <div class="col">3</div>
      <div class="col">4</div>
      <div class="col">5</div>
      <div class="col">6</div>
      <div class="col">6</div>
      <div class="col">6</div>
      <div class="col">6</div>
    </div>
    <div class="col">
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 1rem;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid #ccc;
}

.col {
  flex: 1 0 0;
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 0.5rem;
}
</style>
