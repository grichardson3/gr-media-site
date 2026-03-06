// https://nuxt.com/docs/api/configuration/nuxt-config

// const WORDPRESS_URL = 'http://localhost/wordpress_sixnineone';
const WORDPRESS_URL = 'https://noisetacticz.com';

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
      /*localhost*/ wordpressUrl: WORDPRESS_URL,

      // frontendUrl: 'http://localhost:3000'
      debug: true
  },
  css: [
    "../assets/styles/main.scss",
    "../assets/styles/fonts.scss",
    "../assets/styles/posts.scss",
    "../assets/styles/images.scss",
    "../assets/styles/navigation.scss"
  ]
});