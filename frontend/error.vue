<script setup lang="ts">
// Page title
const title = ref("404-페이지를 찾을 수 없습니다.");
useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - 404-페이지를 찾을 수 없습니다.`
      : "FastForm - 404-페이지를 찾을 수 없습니다.";
  },
});
</script>
<template>
  <div class="d-flex justify-center align-center text-center h-100vh">
    <div>
      <img src="/images/background/errorimg.svg" width="500" alt="404" />
      <h1 class="text-h1 pt-3">이런!</h1>
      <h4 class="text-h4 my-8">요청하신 페이지를 찾을 수 없습니다.</h4>
      <v-btn flat color="primary" class="mb-4" to="/">메인페이지로 이동</v-btn>
    </div>
  </div>
</template>
