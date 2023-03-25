<script setup lang="ts">
import { defineProps, computed } from "vue";
import { ElementMeta, ElementTypeData } from "@/types/fastform/Element.js";

const props = defineProps<{
  elementData: ElementMeta;
}>();

const elementData = computed(() => {
  return props.elementData;
});

console.log("textarea", props);
</script>
<template>
  <v-textarea :label="elementData.label" rows="10" variant="outlined" />
</template>
