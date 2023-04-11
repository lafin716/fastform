import { defineStore } from "pinia";

export interface FormStoreElement {
  id: number;
  type: "row" | "col";
  name: string;
  elements: FormStoreElement[];
}

const findFormStoreElement = (
  parents: FormStoreElement[],
  id: number
): FormStoreElement | undefined => {
  for (let parent of parents) {
    if (parent.id === id) {
      return parent;
    }
    if (parent.elements.length > 0) {
      let result = findFormStoreElement(parent.elements, id);
      if (result) {
        return result;
      }
    }
  }
  return undefined;
};

export const useFormStore = defineStore("form", {
  state: () => ({
    currentId: 1,
    name: "",
    elements: <FormStoreElement[]>[
      {
        id: 1,
        type: "row",
        name: "행",
        elements: [],
      },
    ],
  }),

  actions: {
    addLayout(layout: any, parentId: number | undefined) {
      const newLayout = {
        id: this.nextLayoutId,
        type: layout.type,
        name: layout.name,
        elements: [],
      };

      // 부모 ID가 없으면 최상위에 추가
      if (!parentId) {
        this.elements.push(newLayout);
        this.currentId = this.nextLayoutId;
        return;
      }

      // 부모 ID가 있으면 부모에 추가
      const foundParent = findFormStoreElement(this.elements, parentId);
      console.log("foundParent", foundParent);

      if (!foundParent) return;
      foundParent.elements.push(newLayout);
      this.currentId = this.nextLayoutId;
    },
  },

  getters: {
    nextLayoutId: (state) => {
      return state.currentId + 1;
    },
  },
});
