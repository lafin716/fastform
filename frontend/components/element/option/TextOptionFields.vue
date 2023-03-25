<script setup lang="ts">
import { ref, defineProps } from "vue";
import { Element } from "~~/types/fastform/Element";
import { TextElementOption } from "~~/types/fastform/ElementOption";

const props = defineProps<{
  options: TextElementOption;
}>();

const options = ref(props.options);
</script>
<template>
  <v-row class="ml-0 mr-0">
    <v-col cols="6">
      <v-text-field
        v-model="options.placeholder"
        label="입력항목 기본메시지"
        placeholder="입력항목의 기본메시지를 입력하세요."
        variant="outlined"
      />
    </v-col>
  </v-row>
</template>
