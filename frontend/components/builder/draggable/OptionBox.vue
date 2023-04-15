<script setup lang="ts">
import { useFormStore } from "~~/stores/front/formStore";

const props = defineProps<{
  parentId: number;
}>();

const formStore = useFormStore();
const items = reactive([
  {
    title: "행 추가",
    type: "row",
    addEvent: () => {
      formStore.addLayout({ type: "row", name: "새 행" }, props.parentId);
    },
  },
  {
    title: "열 추가",
    type: "col",
    addEvent: () => {
      formStore.addLayout({ type: "col", name: "새 열" }, props.parentId);
    },
  },
]);

const removeEvent = () => {
  formStore.removeLayout(props.parentId);
};
</script>
<template>
  <v-menu location="bottom right">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" size="1rem" class="mr-1">
        <v-icon size="5">mdi-plus</v-icon>
      </v-btn>
      <v-btn size="1rem" @click="removeEvent" v-if="parentId > 0">
        <v-icon size="5">mdi-close</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="i"
        @click="item.addEvent"
      >
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
