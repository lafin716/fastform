<script setup lang="ts">
import ContentCard from "@/components/layout/part/ContentCard.vue";
import draggable from "vuedraggable";
import DraggableArea from "@/components/builder/draggable/DraggableArea.vue";
import { useFormStore } from "~~/stores/front/formStore";
import { useElementListStore } from "~~/stores/elementList";
import TextIcon from "~~/components/shared/TextIcon.vue";
import OptionBox from "~~/components/builder/draggable/OptionBox.vue";

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
    elements: [],
  };
};
const showLayout = ref(false);
const formStore = useFormStore();
const save = () => {
  console.log(formStore.currentId);
  console.log(JSON.parse(JSON.stringify(formStore.layouts)));
};

const elementListStore = useElementListStore();
elementListStore.getElements();
</script>
<template>
  <ContentCard title="폼 만들기" :grid="9">
    <template v-slot:actions>
      <v-btn class="bg-success" @click="save">저장</v-btn>
    </template>
    <template v-slot:headers>
      <div class="d-flex row">
        <draggable
          v-model="elementListStore.elements"
          :group="{ name: 'people', pull: 'clone', put: false }"
          :clone="addLayout"
          :sort="false"
          item-key="id"
          class="d-flex row scroll-x"
        >
          <template #item="{ element }">
            <div class="element-item">
              <TextIcon :title="element.type"></TextIcon>
              <span>{{ element.label }}</span>
            </div>
          </template>
        </draggable>
      </div>
    </template>
    <template v-slot:contents>
      <div class="layout-bar" v-if="showLayout">
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
        <p class="menu-area">
          <OptionBox :parentId="0" />
        </p>
        <DraggableArea v-model="formStore.layouts" />
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
  position: relative;
  border: 1px solid #e0e0e0;
  border-radius: 0.25rem;
  min-height: 300px;
  padding: 0.7rem;
}

.element-bar {
  overflow-x: auto;
}

.element-item {
  min-width: 150px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  padding: 10px;
  margin: 10px;
  cursor: grab;
}

.scroll-x {
  overflow-x: auto;
}

.menu-area {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: -0.5rem;
  right: 0.5rem;
}
</style>
