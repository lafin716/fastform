import { useFetch } from "nuxt/app";

export const authApi = {
  async login(email: string, password: string) {
    const { data, error } = await useFetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (error) {
      console.error(error);
    }

    return data;
  },
};
