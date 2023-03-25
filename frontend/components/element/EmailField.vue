<script setup lang="ts">
import { defineProps, computed } from "vue";
import { ElementMeta } from "@/types/fastform/Element.js";

const props = defineProps<{
  elementData: ElementMeta;
}>();

const elementData = computed(() => {
  return props.elementData;
});
</script>
<template>
  <v-text-field :label="elementData.label" type="email" variant="outlined" />
</template>
