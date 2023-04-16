import { defineStore } from "pinia";
import { elementApi } from "~~/api/elementApi";
import { Element } from "~~/types/builder/Element";

export const useElementStore = defineStore("elementStore", {
  state: () => ({
    preview: <Element>{},
    element: <Element>{},
    elements: <Element[]>[],
  }),

  actions: {
    async getElements() {
      const { $toast } = useNuxtApp();
      const response = await elementApi.getElements();
      if (response.error.value) {
        $toast.error("일시적인 오류 입니다. \n" + response.error.value.message);
        return;
      }

      if (response.data.value === null) {
        return;
      }

      this.elements = response.data.value;
    },
  },

  getters: {},
});
