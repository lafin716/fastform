import { defineStore } from "pinia";
import { elementApi } from "~~/api/elementApi";
import { useElementStore } from "./front/elementStore";

export interface ElementData {
  type: string;
  label: string;
  data: any;
}

export const useElementDataStore = defineStore("elementData", {
  state: () => ({
    type: "",
    label: "",
    data: {},
  }),

  actions: {
    async getOne(id: string) {
      const { $toast } = useNuxtApp();
      const response = await elementApi.getElement(id);
      if (response.error.value) {
        $toast.error("일시적인 오류 입니다. \n" + response.error.value.message);
        return;
      }

      if (!response.data.value) {
        $toast.error("일시적인 오류 입니다. 잠시 후 다시 시도해주세요.");
        return;
      }

      this.type = response.data.value.type;
      this.label = response.data.value.label;
      this.data = response.data.value.data;
    },
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

    async update(id: string) {
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

      const response = await elementApi.updateElement(id, data);
      if (response.error.value) {
        $toast.error("일시적인 오류 입니다. \n" + response.error.value.message);
        return;
      }

      $toast.success("저장되었습니다.");
    },

    async delete(id: string) {
      const { $toast } = useNuxtApp();
      const response = await elementApi.deleteElement(id);
      if (response.error.value) {
        $toast.error("일시적인 오류 입니다. \n" + response.error.value.message);
        return;
      }

      $toast.success("삭제되었습니다.");
    },
  },
});
