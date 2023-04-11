import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => ({
    name: "",
    elements: [
      {
        id: 1,
        type: "row",
        name: "행",
        icon: "mdi-table-row",
        elements: [
          {
            id: 2,
            type: "col",
            name: "열",
            icon: "mdi-table-column",
            elements: [
              {
                id: 1,
                type: "row",
                name: "행",
                icon: "mdi-table-row",
                elements: [],
              },
              {
                id: 1,
                type: "row",
                name: "행",
                icon: "mdi-table-row",
                elements: [],
              },
              {
                id: 1,
                type: "row",
                name: "행",
                icon: "mdi-table-row",
                elements: [],
              },
              {
                id: 1,
                type: "row",
                name: "행",
                icon: "mdi-table-row",
                elements: [],
              },
            ],
          },
          {
            id: 3,
            type: "col",
            name: "열",
            icon: "mdi-table-column",
            elements: [],
          },
          {
            id: 4,
            type: "col",
            name: "열",
            icon: "mdi-table-column",
            elements: [],
          },
        ],
      },
    ],
  }),

  actions: {},

  getters: {},
});
