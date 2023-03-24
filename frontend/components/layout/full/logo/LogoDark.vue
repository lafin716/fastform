<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
const primary = ref("rgb(var(--v-theme-primary))");
const secondary = ref("rgb(var(--v-theme-secondary))");
</script>
<template>
  <div class="logo">
    <NuxtLink to="/">
      <img src="/images/logos/logo.png" alt="logo" class="logo-img" />
    </NuxtLink>
  </div>
</template>
<style scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.logo-img {
  width: 80%;
}
</style>
