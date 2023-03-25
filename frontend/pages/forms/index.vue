<script setup lang="ts">
import ContentCard from "@/components/layout/part/ContentCard.vue";
</script>
<template>
  <ContentCard title="폼 목록">
    <template v-slot:actions>
      <v-btn class="bg-success">저장</v-btn>
    </template>
    <template v-slot:contents> 안녕하세요 </template>
  </ContentCard>
</template>
