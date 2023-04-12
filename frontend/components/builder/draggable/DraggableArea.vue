<script setup lang="ts">
import draggable from "vuedraggable";
import OptionBox from "./OptionBox.vue";
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
        <p class="menu-area">
          <OptionBox :parentId="element.id" />
        </p>
        <DraggableArea v-model="element.elements" />
      </div>
    </template>
  </draggable>
</template>
<style scoped>
.layout-item {
  position: relative;
  padding: 0.8rem 1rem;
  margin: 0.5rem 0.5rem;
  border: 1px dashed #646363;
  border-radius: 0.25rem;
  background-color: #fff;
  cursor: move;
  min-height: 4rem;
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

.layout-item.row {
  flex: 1 0 0;
}

.layout-item.row > div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.layout-item.col {
  flex: 1 0 0;
}

.layout-item.col > div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
}

.menu-area {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: -0.5rem;
  right: 0.5rem;
}
</style>
