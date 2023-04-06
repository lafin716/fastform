import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();
  const localAccessToken = localStorage.getItem("accessToken") ?? "";
  const localRefreshToken = localStorage.getItem("refreshToken") ?? "";
  await authStore.autoLogin(localAccessToken, localRefreshToken);

  console.log("to", to);
  console.log("from", from);
  console.log("authStore", authStore);
  if (to.fullPath.startsWith("/auth")) {
    return;
  }

  console.log(authStore.isAuth);

  if (!authStore.isAuth) {
    return navigateTo("/auth/login");
  }
});
