<script setup lang="ts">
import { ref, defineProps, computed } from "vue";
import { ElementMeta } from "@/types/fastform/Element.js";

const props = defineProps<{
  elementData: ElementMeta;
}>();

const elementData = computed(() => {
  return props.elementData;
});

const items = computed(() => {
  return [];
});
</script>
<template>
  <v-select :label="elementData.label" :items="items" variant="outlined" />
</template>
