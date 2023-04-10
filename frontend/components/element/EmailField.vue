<script setup lang="ts">
import { useElementStore } from "@/stores/front/elementStore";
import { ref } from "vue";

const store = useElementStore();
</script>
<template>
  <v-text-field
    :label="store.label"
    :placeholder="store.data.placeholder"
    variant="outlined"
  />
</template>
