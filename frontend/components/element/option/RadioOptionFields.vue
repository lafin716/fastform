<script setup lang="ts">
import { useElementStore } from "@/stores/front/elementStore";
import { ref } from "vue";

const store = useElementStore();
const direction = ref(store.data.direction ?? "vertical");
const options = ref(store.data.option ?? [{ value: "테스트", text: "test" }]);

const addOption = () => {
  options.value.push({ value: "", text: "" });
  updateStore();
};

const removeOption = (index: number) => {
  options.value.splice(index, 1);
  updateStore();
};

const updateStore = () => {
  store.data.direction = direction.value;
  store.data.items = options.value;
};

updateStore();
</script>
<template>
  <v-row class="ml-0 mr-0">
    <v-col cols="6">
      <v-select
        label="노출방향"
        v-model="store.data.direction"
        :items="[
          { text: '세로형', value: 'vertical' },
          { text: '가로형', value: 'horizontal' },
        ]"
        item-title="text"
        item-value="value"
        variant="outlined"
      />
    </v-col>
  </v-row>
  <template v-for="(option, index) in options">
    <v-row class="ml-0 mr-0">
      <v-col cols="11">
        <div class="select-wrap">
          <v-text-field
            class="mr-2 col-5"
            v-model="option.value"
            label="키값"
            variant="outlined"
            @blur="updateStore"
          />
          <v-text-field
            v-model="option.text"
            label="노출텍스트"
            variant="outlined"
            @blur="updateStore"
          />
        </div>
      </v-col>
      <v-col cols="1">
        <v-btn v-if="index == 0" class="bg-primary" @click="addOption">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn v-else class="bg-secondprimary" @click="removeOption(index)">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </template>
</template>
<style scoped>
.select-wrap {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}
</style>
