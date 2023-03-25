import { defineStore } from "pinia";
import { ElementTypeData } from "~~/components/element/elementData";
import { ElementType } from "~~/types/fastform/Element";

export const useElementStore = defineStore("element", () => {
  const id: string = "";
  const type: ElementType = ElementTypeData.FILE;
  const label: string = "항목 1";
  const data: any = {};

  return { id, type, label, data };
});
