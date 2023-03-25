<script setup lang="ts">
import { defineProps, computed } from "vue";
import { ElementMeta, ElementTypeData } from "@/types/fastform/Element.js";

const props = defineProps<{
  elementData: ElementMeta;
}>();

const elementData = computed(() => {
  return props.elementData;
});
</script>
<template>
  <v-text-field :label="elementData.label" variant="outlined" />
</template>
