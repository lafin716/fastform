<script setup lang="ts">
import ContentCard from "@/components/layout/part/ContentCard.vue";
import { shallowRef, ref, computed } from "vue";
import { elementMap, ElementTypeData } from "@/components/element/elementData";
import { useElementStore } from "@/stores/elementStore";

const store = useElementStore();
const selectedElementType = shallowRef(ElementTypeData.TEXT);
</script>
<template>
  <div>
    <ContentCard title="입력항목 만들기">
      <template v-slot:actions>
        <v-btn class="bg-success">저장</v-btn>
      </template>
      <template v-slot:contents>
        <v-row class="ml-0 mr-0">
          <v-col cols="6">
            <v-select
              v-model="selectedElementType"
              :items="Object.values(ElementTypeData)"
              item-title="label"
              item-value="id"
              label="입력항목 종류"
              variant="outlined"
              return-object
            />
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="selectedElementType"
              :items="Object.values(ElementTypeData)"
              item-title="label"
              item-value="id"
              label="입력항목 종류"
              variant="outlined"
              return-object
            />
          </v-col>
        </v-row>
        <ElementField :elementId="selectedElementType.id" />
      </template>
    </ContentCard>
    <ContentCard title="미리보기">
      <template v-slot:contents>
        <!-- <ElementViewer :elementData="elementData!" /> -->
      </template>
    </ContentCard>
  </div>
</template>
<style lang=""></style>
