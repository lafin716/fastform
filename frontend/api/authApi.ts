import { useFetch } from "nuxt/app";

export const authApi = {
  async login(email: string, password: string) {
    const { data, error } = await useFetch("http://localhost:3001/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        console.log(response);

        return { data: response.data ?? null, error: null };
      })
      .catch((error) => {
        console.error(error);
        return { data: null, error: error };
      });

    if (error) {
      console.error(error);
      return { data, error };
    }

    return { data, error };
  },
};
