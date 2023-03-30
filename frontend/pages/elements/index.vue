<script setup lang="ts">
import ContentCard from "@/components/layout/part/ContentCard.vue";
import { ref } from "vue";
import { PencilIcon, TrashIcon } from "vue-tabler-icons";
import { elementApi } from "@/api/elementApi";

const elementDatas = elementApi.getElements();
console.log("elementDatas", elementDatas);

const headers = ref([
  { text: "라벨", value: "name" },
  { text: "타입", value: "type" },
  { text: "생성일", value: "created_at" },
  { text: "수정일", value: "updated_at" },
]);

const items = ref([
  {
    id: 1,
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
      <v-table class="month-table">
        <thead>
          <tr>
            <th class="text-subtitle-1 font-weight-bold text-center">번호</th>
            <th class="text-subtitle-1 font-weight-bold text-center">라벨</th>
            <th class="text-subtitle-1 font-weight-bold text-center">타입</th>
            <th class="text-subtitle-1 font-weight-bold text-center">
              등록날짜
            </th>
            <th class="text-subtitle-1 font-weight-bold text-center">관리</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.name" class="month-item">
            <td class="text-center">
              {{ item.id }}
            </td>
            <td class="text-center">
              {{ item.name }}
            </td>
            <td class="text-center">
              <v-chip
                :class="'text-body-1 bg-success'"
                color="white"
                size="small"
              >
                {{ item.type }}
              </v-chip>
            </td>
            <td class="text-center">
              <h6 class="text-body-1 text-muted">{{ item.created_at }}</h6>
            </td>
            <td class="text-center">
              <v-btn icon variant="flat">
                <PencilIcon class="text-info" />
              </v-btn>
              <v-btn icon variant="flat">
                <TrashIcon class="text-error" />
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </template>
  </ContentCard>
</template>
