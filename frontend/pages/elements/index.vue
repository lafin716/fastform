<script setup lang="ts">
import ContentCard from "@/components/layout/part/ContentCard.vue";
import { ref } from "vue";

const headers = ref([
  { text: "라벨", value: "name" },
  { text: "타입", value: "type" },
  { text: "생성일", value: "created_at" },
  { text: "수정일", value: "updated_at" },
]);

const items = ref([
  {
    name: "이름입력",
    type: "텍스트",
    created_at: "2021-08-01",
    updated_at: "2021-08-01",
  },
]);
</script>
<template>
  <ContentCard title="항목 관리">
    <template v-slot:actions>
      <v-btn class="bg-primary">새로 만들기</v-btn>
    </template>
    <template v-slot:contents>
      <v-data-table :headers="headers" :items="items"></v-data-table>
    </template>
  </ContentCard>
</template>
