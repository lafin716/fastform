<script setup lang="ts">
import { ref, defineProps, computed } from "vue";
import { ElementMeta } from "@/types/fastform/Element.js";

const props = defineProps<{
  elementData: ElementMeta;
}>();

const elementData = computed(() => {
  return props.elementData;
});

const picker = ref(new Date().toDateString());
</script>
<template>
  <v-date-picker v-model="picker"></v-date-picker>
</template>
