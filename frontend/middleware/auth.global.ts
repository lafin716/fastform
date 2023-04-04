import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  console.log("to", to);
  console.log("from", from);
  console.log("authStore", authStore);
  if (to.fullPath.startsWith("/auth")) {
    return;
  }

  if (!authStore.isAuth) {
    return navigateTo("/auth/login");
  }
});
