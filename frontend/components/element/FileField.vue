<script setup lang="ts">
import { useElementStore } from "@/stores/elementStore";

const store = useElementStore();
</script>
<template>
  <v-file-input
    :accept="store.data.accept"
    :placeholder="store.data.placeholder"
    :label="store.label"
    :prepend-icon="store.data.icon"
    variant="outlined"
    :multiple="store.data.multiple.value"
    :chips="true"
  />
</template>
