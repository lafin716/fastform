<script setup lang="ts">
import { defineProps, computed, markRaw } from "vue";
import { useElementStore } from "@/stores/elementStore";
import { elementMap } from "@/components/element/elementData";

const store = useElementStore();
const props = defineProps<{
  elementId: string;
}>();

const selectedElement = computed(() => {
  const id = props.elementId;
  store.setElement(elementMap[id].element);
});
</script>
<template>
  <v-row class="ml-0 mr-0">
    <v-col>
      {{ props }}
      <v-btn></v-btn>
      {{ store.element }}
      {{ selectedElement }}
    </v-col>
  </v-row>
</template>
