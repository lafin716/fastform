<script setup lang="ts">
import { useElementStore } from "@/stores/front/elementStore";

const store = useElementStore();
</script>
<template>
  <v-row class="ml-0 mr-0">
    <v-col cols="6">
      <v-text-field
        v-model="store.data.placeholder"
        label="기본메시지"
        placeholder="입력항목의 기본메시지를 입력하세요."
        variant="outlined"
      />
    </v-col>
  </v-row>
</template>
