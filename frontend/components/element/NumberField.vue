<script setup lang="ts">
import { useElementStore } from "@/stores/elementStore";

const store = useElementStore();
</script>
<template>
  <v-text-field
    type="number"
    :label="store.label"
    :placeholder="store.data.placeholder"
    variant="outlined"
  />
</template>
