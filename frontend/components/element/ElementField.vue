<script setup lang="ts">
import { computed, markRaw } from "vue";
import { useElementStore } from "@/stores/front/elementStore";
import { elementMap } from "@/components/element/elementData";

const store = useElementStore();
const selectedOptionField = computed(() => {
  const option = elementMap[store.type.id].component.option;
  if (option === null) {
    return null;
  }

  return markRaw(option);
});
</script>
<template>
  <component :is="selectedOptionField" />
</template>
