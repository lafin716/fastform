<script setup lang="ts">
import ContentCard from "@/components/layout/part/ContentCard.vue";
import { ElementTypeData } from "@/components/element/elementData";
import { useElementStore } from "@/stores/front/elementStore";
import { useElementDataStore } from "@/stores/elementDataStore";

const store = useElementStore();
const dataStore = useElementDataStore();
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
        <v-row class="ml-0 mr-0">
          <v-col cols="6" xs12>
            <v-select
              v-model="store.type"
              :items="Object.values(ElementTypeData)"
              item-title="label"
              item-value="id"
              label="타입"
              variant="outlined"
              return-object
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="store.label"
              label="라벨"
              variant="outlined"
            />
          </v-col>
        </v-row>
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
