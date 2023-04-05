<script setup lang="ts">
import { RouterView } from "vue-router";

const title = ref("FastForm - 유연하고 강력한 폼 제작 도구");
useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - FastForm`
      : "FastForm - 유연하고 강력한 폼 제작 도구";
  },
});
</script>
<template>
  <v-app>
    <RouterView />
  </v-app>
</template>
