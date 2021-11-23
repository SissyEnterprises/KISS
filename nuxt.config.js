export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/SissyApp/',
    middleware: 'auth',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SissyApp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'theme-color', content: '#d81b60' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#d81b60' },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'MobileOptimized', content: '320' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/defaults.css',
    'vuesax/dist/vuesax.css',
    '@/assets/less/vuesax.less',
    '@/assets/less/root.less',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/vuesax', '@/plugins/vuetify', '@/plugins/community'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'en',
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  auth: {
    redirect: {
      login: '/',
      logout: '/',
      callback: '/',
      home: '/schedule',
    },
    strategies: {
      google: {
        scheme: '~/schemes/gapi',
        /* ... */
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Sissy App',
      short_name: 'Sissy App',
      lang: 'en',
      useWebmanifestExtension: false,
      theme_color: '#d81b60',
      background_color: '#d81b60',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  vuetify: {
    theme: {
      dark: true,
    },
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Shadows Into Light Two',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build

  build: {
    transpile: ['vuetify/lib'],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        })
      }
    },
  },
}
