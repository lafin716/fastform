<script setup lang="ts">
const show = ref(false);
const message = ref("");
const color = ref("success");

const showToast = (msg: string, type: string) => {
  show.value = true;
  message.value = msg;
  color.value = type;
};
</script>
<template>
  <v-snackbar v-model="show" :top="true" :right="true" :color="color">
    {{ message }}
    <v-btn text @click="show = false">Close</v-btn>
  </v-snackbar>
</template>
