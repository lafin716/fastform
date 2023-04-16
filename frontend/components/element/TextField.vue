<script setup lang="ts">
import { useElementStore } from "@/stores/elementStore";

const store = useElementStore();
const element = computed(() => {
  if (store.element === null) {
    return {
      label: "텍스트박스",
      type: "",
    };
  }

  return markRaw(store.element);
});
</script>
<template>
  <v-text-field
    type="text"
    :label="element.label"
    :placeholder="element.options?.placeholder ?? ''"
    variant="outlined"
  />
</template>
