// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@wpnuxt/core',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  wpNuxt: {
      /*Live Site*/ // wordpressUrl: 'https://noisetacticz.com'
      /*localhost*/ wordpressUrl: 'http://localhost/wordpress_sixnineone'
      /*Demo Site*/ // wordpressUrl: 'https://wordpress.wpnuxt.com'

      // frontendUrl: 'http://localhost:3000'
  },
  css: [
    "../assets/styles/main.scss",
    "../assets/styles/fonts.scss",
    "../assets/styles/posts.scss",
    "../assets/styles/images.scss",
    "../assets/styles/navigation.scss"
  ]
})