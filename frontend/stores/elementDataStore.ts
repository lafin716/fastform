import { defineStore } from "pinia";
import { elementApi } from "~~/api/elementApi";
import { useElementStore } from "./elementStore";

export const useElementDataStore = defineStore("elementData", {
  state: () => ({
    type: "",
    label: "",
    data: {},
  }),

  actions: {
    async save() {
      const { $toast } = useNuxtApp();
      const store = useElementStore();
      this.type = store.type.id;
      this.label = store.label;
      this.data = store.data ?? {};

      if (!this.type || !this.label) {
        $toast.error("데이터를 입력해주세요.");
        return;
      }

      const data = {
        type: this.type,
        label: this.label,
        data: this.data,
      };

      const response = await elementApi.createElement(data);
      if (response.error.value) {
        $toast.error("일시적인 오류 입니다. \n" + response.error.value.message);
        return;
      }

      $toast.success("저장되었습니다.");
    },
  },
});
