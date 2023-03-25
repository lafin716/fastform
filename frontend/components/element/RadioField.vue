<script setup lang="ts">
import { useElementStore } from "@/stores/elementStore";
import { computed } from "vue";

const store = useElementStore();
const direction = computed(() => {
  return store.data.direction === "horizontal" ? "row" : "col";
});
</script>
<template>
  <v-radio-group :inline="direction === 'row'">
    <template v-for="(item, index) in store.data.items" :key="index">
      <v-radio :label="item.text" :value="item.value" variant="outlined" />
    </template>
  </v-radio-group>
</template>
