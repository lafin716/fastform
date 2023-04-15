import { defineStore } from "pinia";

export interface FormLayout {
  id: number;
  type: "row" | "col";
  name: string;
  layouts: FormLayout[];
  elements: FormElement[];
}

export interface FormElement {
  id: number;
  type: "text" | "number" | "date" | "select" | "checkbox" | "radio";
  label: string;
  data: any;
}

const findFormLayout = (
  parents: FormLayout[],
  id: number
): FormLayout | undefined => {
  for (let parent of parents) {
    if (parent.id === id) {
      return parent;
    }
    if (parent.layouts.length > 0) {
      let result = findFormLayout(parent.layouts, id);
      if (result) {
        return result;
      }
    }
  }
  return undefined;
};

const getRemovedLayouts = (parents: FormLayout[], id: number) => {
  return parents
    .map((item) => {
      return { ...item };
    })
    .filter((item) => {
      if ("layouts" in item) {
        item.layouts = getRemovedLayouts(item.layouts, id);
      }
      return item.id !== id;
    });
};

export const useFormStore = defineStore("form", {
  state: () => ({
    currentId: 0,
    name: "",
    userId: "",
    layouts: <FormLayout[]>[],
    elements: <FormElement[]>[],
  }),

  actions: {
    addLayout(layout: any, parentId: number | undefined) {
      const newLayout = {
        id: this.nextLayoutId,
        type: layout.type,
        name: layout.name,
        layouts: [],
        elements: [],
      };

      // 부모 ID가 없으면 최상위에 추가
      if (!parentId) {
        this.layouts.push(newLayout);
        this.currentId = this.nextLayoutId;
        return;
      }

      // 부모 ID가 있으면 부모에 추가
      const foundParent = findFormLayout(this.layouts, parentId);

      if (!foundParent) return;
      foundParent.layouts.push(newLayout);
      this.currentId = this.nextLayoutId;
    },

    removeLayout(id: number) {
      const removedLayout = getRemovedLayouts(this.layouts, id);
      this.layouts = removedLayout;
    },

    addElement(element: any, parentId: number | undefined) {
      const newElement = {
        id: this.nextLayoutId,
        type: element.type,
        label: element.label,
        data: element.data,
      };

      // 부모 ID가 없으면 최상위에 추가
      if (!parentId) {
        this.elements.push(newElement);
        this.currentId = this.nextLayoutId;
        return;
      }

      // 부모 ID가 있으면 부모에 추가
      const foundParent = findFormLayout(this.layouts, parentId);

      if (!foundParent) return;
      foundParent.elements.push(newElement);
      this.currentId = this.nextLayoutId;
    },

    removeElement(id: number) {
      const removedElement = this.elements.filter((item) => item.id !== id);
      this.elements = removedElement;
    },
  },

  getters: {
    nextLayoutId: (state) => {
      return state.currentId + 1;
    },
  },
});
