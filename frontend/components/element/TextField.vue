<script setup lang="ts">
import { useElementStore } from "@/stores/front/elementStore";

const store = useElementStore();
</script>
<template>
  <v-text-field
    type="text"
    :label="store.label"
    :placeholder="store.data.placeholder"
    variant="outlined"
  />
</template>
