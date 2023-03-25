<script setup lang="ts">
import { computed, markRaw } from "vue";
import { elementMap } from "./elementData.js";
import { useElementStore } from "@/stores/elementStore";

const store = useElementStore();
const selectedElement = computed(() => {
  return markRaw(elementMap[store.type.id].component.preview);
});
</script>
<template>
  <component :is="selectedElement" />
</template>
