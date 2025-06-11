// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Gareth Richardson Media',
      meta: [
        { name: 'subtitle', content: 'Graphic Design, Motion Design, Web Design & Development' },
        { name: 'description', content: 'Gareth Richardson Media - Graphic Designer, Web Developer, UX/UI Designer, Motion Designer' },
        { name: 'author', content: 'Gareth Richardson, grichardson@live.ca' },
        { name: 'copyright', content: 'Copyright Gareth Richardson Media 2025 - All Rights Reserved' },
        { name: 'language', content: 'EN' },
        { name: 'keywords', content: 'gareth richardson, gareth, richardson, london ontario, st thomas ontario, london, st thomas, digital marketing, seo, digital marketing specialist, graphic design, ux design, ui design, web design, web development, software development, motion design, photoshop, illustrator, premiere, after effects, creative cloud, blender, cinema 4d, office 365, html, css, javascript, php, sql, mysql, mongodb, mongo db, firebase, wordpress, node, node js, node.js, react, react js, react.js, vue, vue js, vue.js, next, next js, next.js, nuxt, nuxt js, nuxt.js, graph ql, graphql, webpack, babel, aws, heroku, netlify, atlas, gitlab, docker, headless cms' },
        { name: 'url', content: 'https://www.garethrichardson.ca' },
        { name: 'medium', content: 'portfolio' },
        { name: 'robots', content: 'index, follow' },

        { name: 'og:title', content: 'Gareth Richardson Media' },
        { name: 'og:type', content: 'portfolio' },
        { name: 'og:site_name', content: 'Gareth Richardson Media' },
        { name: 'og:description', content: 'Gareth Richardson Media - Graphic Designer, Web Developer, UX/UI Designer, Motion Designer' },

        { name: 'news_keywords', content: 'gareth richardson, gareth, richardson, london ontario, st thomas ontario, london, st thomas, digital marketing, seo, digital marketing specialist, graphic design, ux design, ui design, web design, web development, software development, motion design, photoshop, illustrator, premiere, after effects, creative cloud, blender, cinema 4d, office 365, html, css, javascript, php, sql, mysql, mongodb, mongo db, firebase, wordpress, node, node js, node.js, react, react js, react.js, vue, vue js, vue.js, next, next js, next.js, nuxt, nuxt js, nuxt.js, graph ql, graphql, webpack, babel, aws, heroku, netlify, atlas, gitlab, docker, headless cms' }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      noscript: [
        { children: 'JavaScript is required' }
      ],
    }
  },
  devtools: { enabled: true },
  css: [
    '~/assets/styles/styles.css'
  ],
  gtm: {
    id: 'GTM-M38VHFKX', // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
    queryParams: {
      // Add URL query string when loading gtm.js with GTM ID (required when using custom environments)
      gtm_auth: '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',
      gtm_preview: 'env-4',
      gtm_cookies_win: 'x',
    },
    defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
    compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
    nonce: '2726c7f26c', // Will add `nonce` to the script tag
    enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
    debug: true, // Whether or not display console logs debugs (optional)
    loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
    enableRouterSync: true, // Pass the router instance of your app to automatically sync with router (optional)
    ignoredViews: ['homepage'], // Don't trigger events for specified router names (optional)
    trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
    devtools: true, // (optional)
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    'nuxt-og-image',
    '@nuxtjs/seo',
    'nuxt-simple-robots',
    '@nuxtjs/eslint-module',
    '@zadigetvoltaire/nuxt-gtm'
  ],
  runtimeConfig: {
    public: {
      gtm: {
        id: 'GTM-M38VHFKX',
        queryParams: {
          gtm_auth: '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',
          gtm_preview: 'env-4',
          gtm_cookies_win: 'x',
        },
        defer: false,
        compatibility: false,
        nonce: '2726c7f26c',
        enabled: true,
        debug: true,
        loadScript: true,
        enableRouterSync: true,
        ignoredViews: ['homepage'],
        trackOnNextTick: false,
        devtools: true,
      }
    }
  },
  site: {
    url: 'https://garethrichardson.ca'
  }
});