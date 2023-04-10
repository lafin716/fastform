<script setup lang="ts">
import { ref, defineProps, computed } from "vue";
import { Element } from "@/types/fastform/Element.js";

const props = defineProps<{
  elementData: Element;
}>();

const elementData = computed(() => {
  return props.elementData;
});

const picker = ref(new Date().toDateString());
</script>
<template>
  <v-date-picker v-model="picker"></v-date-picker>
</template>
