import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const id: string = "";
  const email: string = "";
  const name: string = "";
  const accessToken: string = "";
  const refreshToken: string = "";
  const isAuth: boolean = false;

  return { id, isAuth, email, name, accessToken, refreshToken };
});
