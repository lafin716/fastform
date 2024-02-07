import { useFetch } from "nuxt/app";

// 인증 엔드포인트
export const authApi = {
  async verifyToken(token: string) {
    const response = await useFetch("/api/auth/verify", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  },

  async login(email: string, password: string) {
    const response = await useFetch("/api/auth/token", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    return response;
  },
};
