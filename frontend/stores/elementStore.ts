import { defineStore } from "pinia";

export const useElementStore = defineStore("element", () => {
  const element = ref(null);

  function setElement(value: any) {
    element.value = value;
  }

  return { element, setElement };
});
