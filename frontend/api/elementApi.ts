import { useFetch } from "nuxt/app";

export const elementApi = {
  async getElements() {
    const { data } = await useFetch("/element");
    return data;
  },

  async getElement(id: string) {
    const { data } = await useFetch(`/element/${id}`);
    return data;
  },

  async createElement(element: object) {
    const { data } = await useFetch("/element", {
      method: "POST",
      body: JSON.stringify(element),
    });
    return data;
  },

  async updateElement(id: string, element: object) {
    const { data } = await useFetch(`/element/${id}`, {
      method: "POST",
      body: JSON.stringify(element),
    });
    return data;
  },
};
