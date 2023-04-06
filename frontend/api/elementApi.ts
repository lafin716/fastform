import { useFetch } from "nuxt/app";
import { useAuthStore } from "~~/stores/auth";

export const elementApi = {
  async getElements() {
    const auth = useAuthStore();
    console.log(auth.accessToken);
    const response = await useFetch("/api/element", {
      headers: {
        Authorization: "Bearer " + auth.accessToken,
      },
    });
    return response;
  },

  async getElement(id: string) {
    const auth = useAuthStore();
    const response = await useFetch(`/api/element/${id}`, {
      headers: {
        Authorization: "Bearer " + auth.accessToken,
      },
    });
    return response;
  },

  async createElement(element: object) {
    const auth = useAuthStore();
    const response = await useFetch("/api/element", {
      method: "POST",
      body: JSON.stringify(element),
      headers: {
        Authorization: "Bearer " + auth.accessToken,
      },
    });
    return response;
  },

  async updateElement(id: string, element: object) {
    const auth = useAuthStore();
    const response = await useFetch(`/api/element/${id}`, {
      method: "POST",
      body: JSON.stringify(element),
      headers: {
        Authorization: "Bearer " + auth.accessToken,
      },
    });
    return response;
  },
};
