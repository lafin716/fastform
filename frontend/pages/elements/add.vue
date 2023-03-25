<script setup lang="ts">
import ContentCard from "@/components/layout/part/ContentCard.vue";
import { ref, computed } from "vue";
import { ElementTypeData, ElementMeta } from "@/types/fastform/Element.js";

const elementData = ref<ElementMeta>({
  id: "",
  type: ElementTypeData.TEXT,
  label: "텍스트 항목",
});
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
            <v-text-field
              v-model="elementData.label"
              label="입력 이름"
              variant="outlined"
            />
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="elementData.type"
              :items="Object.values(ElementTypeData)"
              item-title="label"
              item-value="id"
              label="입력 종류"
              variant="outlined"
              return-object
            />
          </v-col>
        </v-row>
      </template>
    </ContentCard>
    <ContentCard title="미리보기">
      <template v-slot:contents>
        <ElementViewer :elementData="elementData" />
      </template>
    </ContentCard>
  </div>
</template>
<style lang=""></style>
