<script setup lang="ts">
import { useElementStore } from "@/stores/elementStore";

const store = useElementStore();
</script>
<template>
  <v-textarea
    :label="store.label"
    :placeholder="store.data.placeholder"
    rows="10"
    variant="outlined"
  />
</template>
