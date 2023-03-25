import { defineStore } from "pinia";

export const useElementDataStore = defineStore("elementData", () => {
  const id: string = "";
  const data: any = {};

  return { id, data };
});
