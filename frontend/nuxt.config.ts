// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  nitro: {
    serveStatic: true,
  },
  modules: ["@pinia/nuxt", "nuxt-snackbar"],
  snackbar: {
    top: true,
    right: true,
    duration: 30000,
    dense: true,
  },
});
