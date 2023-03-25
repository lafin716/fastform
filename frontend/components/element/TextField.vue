<script setup lang="ts">
import { defineProps, computed } from "vue";
import { TextElement } from "@/types/fastform/Element.js";
import { TextElementOption } from "@/types/fastform/ElementOption";

const props = defineProps<{
  elementData: TextElement;
}>();

const elementData = computed(() => {
  console.log(props.elementData);
  return props.elementData;
});

const optionData = computed(() => {
  console.log(props.elementData.data);
  return props.elementData.data;
});
</script>
<template>
  <v-text-field :label="elementData.label" variant="outlined" />
</template>
