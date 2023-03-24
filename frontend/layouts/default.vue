<script setup lang="ts">
import { RouterView } from 'vue-router';
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
  <v-locale-provider>
    <v-app>
      <LayoutFullMain />
      <v-main>
        <v-container fluid class="page-wrapper">
          <div class="maxWidth">
            <RouterView />
          </div>
        </v-container>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>
