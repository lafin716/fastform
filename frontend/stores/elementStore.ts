import { defineStore } from "pinia";
import { ElementTypeData } from "~~/components/element/elementData";
import { ElementType } from "~~/types/fastform/Element";

export const useElementStore = defineStore("element", () => {
  const type: ElementType = ElementTypeData.TEXT;
  const label: string = "항목 1";
  const data: any = {};

  const serialize = () => {
    return {
      type,
      label,
      data,
    };
  };

  return { type, label, data, serialize };
});
