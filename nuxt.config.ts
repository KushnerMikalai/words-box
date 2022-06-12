import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  typescript: {
    shim: false,
    strict: true
  },
  css: [
    '~/assets/styles/common.scss',
    '~/assets/styles/variables.css',
  ],
})
