import { defineNuxtPlugin } from "#app";
import * as vt from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vt.default, {
    timeout: 2500,
    position: "top-right",
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    draggable: false,
    hideProgressBar: true,
  });
  return {
    provide: {
      toast: vt.useToast(),
    },
  };
});
