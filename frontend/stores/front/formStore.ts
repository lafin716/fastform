import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => ({
    name: "",
    elements: [
      {
        id: 1,
        type: "row",
        name: "행 레이아웃",
        icon: "mdi-table-row",
        elements: [],
      },
    ],
  }),

  actions: {},

  getters: {},
});
