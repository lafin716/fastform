<script setup lang="ts">
import { ref, defineProps, computed } from "vue";
import { ElementMeta } from "@/types/fastform/Element.js";

const props = defineProps<{
  elementData: ElementMeta;
}>();

const elementData = computed(() => {
  return props.elementData;
});
</script>
<template>
  <v-checkbox :label="elementData.label" />
</template>
