<script setup lang="ts">
import { defineProps, computed } from "vue";
const props = defineProps<{ title: string }>();
const title = computed(() => {
  if (!props.title) {
    return "";
  }

  return props.title;
});
</script>
<template>
  <v-row>
    <v-col cols="12">
      <v-card elevation="10" class="withbg">
        <v-card-item>
          <div class="d-sm-flex align-center justify-space-between pt-sm-2">
            <div>
              <v-card-title class="text-h5">{{ title }}</v-card-title>
            </div>
            <div class="my-sm-0 pr-2">
              <slot name="actions"></slot>
            </div>
          </div>
          <div class="mt-6">
            <slot name="contents"></slot>
          </div>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
