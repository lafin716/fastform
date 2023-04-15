import { defineStore } from "pinia";
import { ElementTypeData } from "~~/components/element/elementData";
import { ElementType } from "~~/types/fastform/Element";

export const useElementStore = defineStore("element", () => {
  let type: ElementType = ElementTypeData.TEXT;
  let label: string = "항목 1";
  let data: any = {};

  const serialize = () => {
    return {
      type: type.id,
      label: label,
      data,
    };
  };

  const setElement = (element: any) => {
    type = element.type;
    label = element.label;
    data = element.data;
  };

  return { type, label, data, serialize };
});
