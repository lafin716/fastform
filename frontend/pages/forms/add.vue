<script setup lang="ts">
import { ref } from "vue";
import { computed } from "vue";
import { useTheme } from "vuetify";
const theme = useTheme();
const success = theme.current.value.colors.success;
</script>
<template>
  <v-row>
    <v-col cols="12">
      <v-card elevation="10" class="withbg">
        <v-card-item>
          <div class="d-sm-flex align-center justify-space-between pt-sm-2">
            <div>
              <v-card-title class="text-h5">폼 만들기</v-card-title>
            </div>
            <div class="my-sm-0 pr-2">
              <v-btn class="bg-success">저장</v-btn>
            </div>
          </div>
          <div class="mt-6">cccc</div>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
