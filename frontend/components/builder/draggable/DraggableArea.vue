<script setup lang="ts">
import draggable from "vuedraggable";

const props = defineProps<{
  value?: [];
  list?: [];
}>();
const realValue = computed(() => {
  return props.value || props.list;
});
</script>
<template>
  <draggable v-model="realValue" group="people" item-key="id">
    <template #item="{ element }">
      <div class="layout-item" :class="element.type">
        <span class="layout-title">{{ element.name }} {{ element.id }}</span>
        <DraggableArea v-model="element.children" />
      </div>
    </template>
  </draggable>
</template>
<style scoped>
.layout-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  margin: 0.5rem 0.5rem;
  border: 1px dashed #646363;
  border-radius: 0.25rem;
  background-color: #fff;
  cursor: move;
  min-height: 5rem;
}

.layout-item .layout-title {
  font-weight: bold;
  margin-right: 1rem;
  font-size: 0.7rem;
  color: #646363;
  position: absolute;
  top: -0.5rem;
  left: 0.5rem;
  background: #fff;
  padding: 0rem 0.3rem;
}

.layout-item:hover {
  background-color: #f5f5f5;
}

.layout-item.row > div {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.layout-item.col {
  min-width: 10rem;
}

.layout-item.col > div {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
