import { defineStore } from "pinia";
import { elementApi } from "@/api/elementApi";

export interface Element {
  _id: string;
  userId: string;
  type: string;
  label: string;
  data: any;
}

export const useElementListStore = defineStore("elementList", {
  state: () => ({
    elements: [] as any,
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

  getters: {
    items: (state) => state.elements,
  },
});
