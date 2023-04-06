import { defineStore } from "pinia";
import { elementApi } from "@/api/elementApi";

export const useElementListStore = defineStore("elementList", {
  state: () => ({
    elements: ref([]),
  }),

  actions: {
    async getElements() {
      const { $toast } = useNuxtApp();
      const response = await elementApi.getElements();
      console.log("getElements response", response);

      if (response.error.value) {
        $toast.error("일시적인 오류 입니다. \n" + response.error.value.message);
        return;
      }

      console.log(response.data.value);
    },
  },
});
