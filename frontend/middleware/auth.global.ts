import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();
  const localAccessToken = localStorage.getItem("accessToken") ?? "";
  const localRefreshToken = localStorage.getItem("refreshToken") ?? "";
  await authStore.autoLogin(localAccessToken, localRefreshToken);

  if (to.fullPath.startsWith("/auth")) {
    return;
  }

  if (!authStore.isAuth) {
    return navigateTo("/auth/login");
  }
});
