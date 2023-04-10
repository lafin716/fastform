<script setup lang="ts">
import { useElementStore } from "@/stores/front/elementStore";

const store = useElementStore();
</script>
<template>
  <v-select
    :label="store.label"
    :items="store.data.items"
    item-title="text"
    item-value="value"
    variant="outlined"
  />
</template>
