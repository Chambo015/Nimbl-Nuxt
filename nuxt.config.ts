// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-icon'],
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    cssPath: false 
  },
  image: {
    format: ['webp']
  }
})
