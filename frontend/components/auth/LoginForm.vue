<script setup lang="ts">
import { ref } from "vue";
import { authApi } from "@/api/authApi";

const isAutoLogin = ref(true);
const email = ref("");
const password = ref("");
const { $toast } = useNuxtApp();

const login = async (email: string, password: string) => {
  if (!email || !password) {
    $toast.error("이메일과 비밀번호를 입력해주세요.");
    return;
  }
  console.log("email", email);
  console.log("password", password);

  const { data, error } = await authApi.login(email, password);
  if (error) {
    console.log("error", error);
    return;
  }
  console.log("data", data);
  return;
};
</script>
<template>
  <form>
    <v-row class="d-flex mb-3">
      <v-col cols="12">
        <v-label class="font-weight-bold mb-1">이메일</v-label>
        <v-text-field
          v-model="email"
          variant="outlined"
          hide-details
          color="primary"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-label class="font-weight-bold mb-1">비밀번호</v-label>
        <v-text-field
          v-model="password"
          variant="outlined"
          type="password"
          hide-details
          color="primary"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="pt-0">
        <div class="d-flex flex-wrap align-center ml-n2">
          <v-checkbox v-model="isAutoLogin" color="primary" hide-details>
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
        <v-btn
          @click="login(email, password)"
          color="primary"
          size="large"
          block
          flat
          >로그인</v-btn
        >
      </v-col>
    </v-row>
  </form>
</template>
