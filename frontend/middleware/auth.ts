import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  console.log("to", to);
  console.log("from", from);

  if (!authStore.isAuth) {
    return navigateTo("/login");
  }
});
