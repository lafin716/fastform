<script setup lang="ts">
import ContentCard from "@/components/layout/part/ContentCard.vue";
import { ElementTypeData } from "@/components/element/elementData";
import { useElementStore } from "@/stores/front/elementStore";
import { useElementDataStore } from "@/stores/elementData";
import { ElementTypeList } from "~~/types/builder/Element";

const store = useElementStore();
const dataStore = useElementDataStore();
const elementStore = useElementStore();
const saveElement = () => {
  dataStore.save();
  navigateTo("/elements");
};
</script>
<template>
  <div>
    <ContentCard title="입력항목 만들기">
      <template v-slot:actions>
        <v-btn class="bg-success" @click="saveElement">저장</v-btn>
      </template>
      <template v-slot:contents>
        <ElementField />
      </template>
    </ContentCard>
    <ContentCard title="미리보기">
      <template v-slot:contents>
        <ElementViewer />
      </template>
    </ContentCard>
  </div>
</template>
<style lang=""></style>
