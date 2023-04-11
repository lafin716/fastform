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
        children: [
          {
            id: 2,
            type: "col",
            name: "열 레이아웃",
            icon: "mdi-table-column",
            children: [],
          },
          {
            id: 3,
            type: "col",
            name: "열 레이아웃",
            icon: "mdi-table-column",
            children: [],
          },
          {
            id: 4,
            type: "col",
            name: "열 레이아웃",
            icon: "mdi-table-column",
            children: [],
          },
        ],
      },
    ],
  }),

  actions: {},

  getters: {},
});
