// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [ '@nuxt/image', 'nuxt-icon', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    cssPath: false 
  },
  image: {
    format: ['webp'],
  },
  runtimeConfig: {
    backendUrl: process.env.BACKEND_URL
  }
})
