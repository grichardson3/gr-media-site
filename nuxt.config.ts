// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@wpnuxt/core',
    '@nuxtjs/tailwindcss'
  ],
  wpNuxt: {
      // wordpressUrl: 'http://localhost/wordpress_sixeightthree',
      wordpressUrl: 'https://noisetacticz.com'
      // frontendUrl: 'http://localhost:3000'
      // wordpressUrl: 'https://wordpress.wpnuxt.com'
  },
  css: [
    "../assets/styles/main.scss",
    "../assets/styles/fonts.scss",
    "../assets/styles/posts.scss",
    "../assets/styles/images.scss",
    "../assets/styles/navigation.scss"
  ]
})