<script setup lang="ts">
import { ref } from "vue";
const checkbox = ref(true);
</script>

<template>
  <v-row class="d-flex mb-3">
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">이메일</v-label>
      <v-text-field
        variant="outlined"
        hide-details
        color="primary"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">비밀번호</v-label>
      <v-text-field
        variant="outlined"
        type="password"
        hide-details
        color="primary"
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="pt-0">
      <div class="d-flex flex-wrap align-center ml-n2">
        <v-checkbox v-model="checkbox" color="primary" hide-details>
          <template v-slot:label class="text-body-1">자동로그인</template>
        </v-checkbox>
        <div class="ml-sm-auto">
          <NuxtLink
            to="/"
            class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
            >비밀번호를 잊으셨나요?</NuxtLink
          >
        </div>
      </div>
    </v-col>
    <v-col cols="12" class="pt-0">
      <v-btn to="/" color="primary" size="large" block flat>로그인</v-btn>
    </v-col>
  </v-row>
</template>
