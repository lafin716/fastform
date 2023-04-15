<script setup lang="ts">
import ContentCard from "@/components/layout/part/ContentCard.vue";
import { computed } from "vue";
import { PencilIcon, TrashIcon } from "vue-tabler-icons";
import { useElementListStore } from "~~/stores/elementList";
import { useElementDataStore } from "~~/stores/elementData";

const elementListStore = useElementListStore();
const items: any = computed(() => {
  const storeItems = elementListStore.items;
  return storeItems;
});

elementListStore.getElements();

const elementDataStore = useElementDataStore();
const confirmRemove = (id: string) => {
  const result = confirm("정말 삭제하시겠습니까?");
  if (result) {
    elementDataStore.delete(id);
    elementListStore.getElements();
  }
};
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
                <PencilIcon
                  class="text-info"
                  @click="navigateTo(`/elements/${item._id}`)"
                />
              </v-btn>
              <v-btn icon variant="flat">
                <TrashIcon
                  class="text-error"
                  @click="confirmRemove(item._id)"
                />
              </v-btn>
            </td>
          </tr>
          <tr v-if="!items">
            <td colspan="5" class="text-center">
              <v-progress-circular indeterminate color="primary" />
            </td>
          </tr>
          <tr v-if="items.length === 0">
            <td colspan="5" class="text-center">
              <v-chip color="white" size="small"> 항목이 없습니다. </v-chip>
            </td>
          </tr>
        </tbody>
      </v-table>
    </template>
  </ContentCard>
</template>
