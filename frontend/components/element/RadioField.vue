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
  <v-radio-group>
    <v-radio label="Yes" value="yes"></v-radio>
    <v-radio label="No" value="no"></v-radio>
  </v-radio-group>
</template>
