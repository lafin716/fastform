<script setup lang="ts">
import { useElementStore } from "@/stores/front/elementStore";
import { computed } from "vue";

const store = useElementStore();
const direction = computed(() => {
  return store.data.direction === "horizontal"
    ? "d-flex flex-row"
    : "d-flex flex-column";
});
</script>
<template>
  <div :class="direction">
    <template v-for="(item, index) in store.data.items" :key="index">
      <v-checkbox :label="item.text" :value="item.value" variant="outlined" />
    </template>
  </div>
</template>
