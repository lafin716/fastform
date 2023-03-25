<script setup lang="ts">
import { computed, shallowRef, markRaw, defineProps } from "vue";
import { ElementMeta, ElementTypeData } from "@/types/fastform/Element.js";
import TextElement from "./TextElement.vue";
import TextAreaElement from "./TextAreaElement.vue";

const props = defineProps<{
  elementData: ElementMeta;
}>();

const elementMap = {
  [ElementTypeData.TEXT.id]: TextElement,
  [ElementTypeData.TEXTAREA.id]: TextAreaElement,
};

const selectedElement = computed(() => {
  return markRaw(elementMap[props.elementData.type.id]);
});
</script>
<template>
  <div>
    <component :is="selectedElement" :elementData="props.elementData" />
  </div>
</template>
