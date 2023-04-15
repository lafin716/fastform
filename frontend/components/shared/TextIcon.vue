<script setup lang="ts">
const props = defineProps<{
  title: string;
  size?: number;
}>();

const title = computed(() => {
  if (!props.title) {
    return "";
  }

  return (
    props.title.slice(0, 1).toUpperCase() + props.title.slice(1).toLowerCase()
  );
});
</script>
<template>
  <div class="text-icon">
    <span class="text-icon__title">{{ title }}</span>
  </div>
</template>
<style scoped>
.text-icon {
  font-weight: bold;
}
</style>
