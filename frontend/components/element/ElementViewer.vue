<script setup lang="ts">
import { computed, markRaw, defineProps } from "vue";
import { Element } from "@/types/fastform/Element.js";
import { elementMap } from "./elementData.js";

const props = defineProps<{
  elementData: Element;
}>();

const selectedElement = computed(() => {
  return markRaw(elementMap[props.elementData.type.id].preview);
});
</script>
<template>
  <div>
    <component :is="selectedElement" :elementData="props.elementData" />
  </div>
</template>
