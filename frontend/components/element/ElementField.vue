<script setup lang="ts">
import { computed, markRaw } from "vue";
import { useElementStore } from "@/stores/elementStore";
import { elementFieldSet } from "./elementData";

const selectedType = reactive(ElementTypeData.TEXT);
const store = useElementStore();
const selectedOptionField = computed(() => {
  const option = elementMap[store.preview.type].component.option;
  if (option === null) {
    return null;
  }

  return markRaw(option);
});
</script>
<template>
  <v-row class="ml-0 mr-0">
    <v-col cols="6" xs12>
      <v-select
        v-model="store.preview.type"
        :items="Object.values(elementFieldSet)"
        item-title="label"
        item-value="id"
        label="타입"
        variant="outlined"
        return-object
      />
    </v-col>
    <v-col cols="6">
      <v-text-field
        v-model="store.preview.label"
        label="라벨"
        variant="outlined"
      />
    </v-col>
  </v-row>
  <!-- <component :is="selectedOptionField" /> -->
</template>
