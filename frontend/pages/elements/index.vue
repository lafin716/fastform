<script setup lang="ts">
import ContentCard from "@/components/layout/part/ContentCard.vue";
import { ref, computed, markRaw } from "vue";
import { PencilIcon, TrashIcon } from "vue-tabler-icons";
import { useElementListStore } from "~~/stores/elementList";

const elementListStore = useElementListStore();
const items: any = computed(() => {
  const storeItems = elementListStore.items;
  return storeItems;
});

elementListStore.getElements();
</script>
<template>
  <ContentCard title="항목 관리">
    <template v-slot:actions>
      <v-btn class="bg-primary" @click="navigateTo('/elements/add')"
        >새로 만들기</v-btn
      >
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
          <tr v-for="(item, index) in items" :key="item._id" class="month-item">
            <td class="text-center">
              {{ index + 1 }}
            </td>
            <td class="text-center">
              {{ item.label }}
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
              {{ item.createdAt }}
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
