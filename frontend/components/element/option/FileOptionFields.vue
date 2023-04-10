<script setup lang="ts">
import { useElementStore } from "@/stores/front/elementStore";
const store = useElementStore();
store.data.accept = "*/*";
store.data.placeholder = "파일을 선택해주세요.";
store.data.icon = "mdi-file";
store.data.multiple = { text: "아니오", value: false };
</script>
<template>
  <div>
    <v-row class="ml-0 mr-0">
      <v-col cols="6">
        <v-text-field
          v-model="store.data.placeholder"
          label="안내메시지"
          variant="outlined"
        />
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="store.data.accept"
          label="허용확장자"
          placeholder="허용할 확장자를 입력해주세요."
          variant="outlined"
        />
      </v-col>
    </v-row>
    <v-row class="ml-0 mr-0">
      <v-col cols="6">
        <v-select
          label="다중선택여부"
          v-model="store.data.multiple"
          :items="[
            { text: '아니오', value: false },
            { text: '예', value: true },
          ]"
          item-title="text"
          item-value="value"
          variant="outlined"
          return-object
        />
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="store.data.icon"
          label="아이콘"
          variant="outlined"
        />
      </v-col>
    </v-row>
  </div>
</template>
