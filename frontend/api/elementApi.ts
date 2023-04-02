import { useFetch } from "nuxt/app";

export const elementApi = {
  async getElements() {
    const response = await useFetch("/element");
    return response;
  },

  async getElement(id: string) {
    const { data, error } = await useFetch(`/element/${id}`);
    if (error) {
      console.error(error);
    }

    return data;
  },

  async createElement(element: object) {
    const { data, error } = await useFetch("/element", {
      method: "POST",
      body: JSON.stringify(element),
    });
    if (error) {
      console.error(error);
    }

    return data;
  },

  async updateElement(id: string, element: object) {
    const { data, error } = await useFetch(`/element/${id}`, {
      method: "POST",
      body: JSON.stringify(element),
    });
    if (error) {
      console.error(error);
    }

    return data;
  },
};
