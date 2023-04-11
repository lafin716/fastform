<script setup lang="ts">
import ContentCard from "@/components/layout/part/ContentCard.vue";
import draggable from "vuedraggable";
import DraggableArea from "@/components/builder/draggable/DraggableArea.vue";
import { useFormStore } from "~~/stores/front/formStore";

const layouts = reactive([
  { id: 1, type: "row", name: "행 레이아웃", icon: "mdi-table-row" },
  { id: 2, type: "col", name: "열 레이아웃", icon: "mdi-table-column" },
]);

const nextLayoutId = computed(() => {
  return layouts.length + 1;
});

const addLayout = (layout: any) => {
  return {
    id: nextLayoutId,
    type: layout.type,
    name: layout.name,
  };
};

const formStore = useFormStore();
</script>
<template>
  <ContentCard title="폼 만들기">
    <template v-slot:actions>
      <v-btn class="bg-success">저장</v-btn>
    </template>
    <template v-slot:contents>
      <div class="layout-bar">
        <draggable
          v-model="layouts"
          :group="{ name: 'people', pull: 'clone', put: false }"
          :clone="addLayout"
          :sort="false"
          item-key="id"
        >
          <template #item="{ element }">
            <div class="layout-item">
              <v-icon class="mr-2">{{ element.icon }}</v-icon>
              <span>{{ element.name }}</span>
            </div>
          </template>
        </draggable>
      </div>
      <v-spacer class="my-3"></v-spacer>
      <div class="layout-box">
        <DraggableArea v-model="formStore.elements" />
      </div>
    </template>
  </ContentCard>
</template>
<style scoped>
.layout-bar > div {
  display: flex;
  flex-direction: row;
}
.layout-item {
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  padding: 10px;
  margin: 10px;
  cursor: grab;
}

.layout-box {
  border: 1px solid #e0e0e0;
  border-radius: 0.25rem;
  min-height: 300px;
  padding: 0.7rem;
}
</style>
