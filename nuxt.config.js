export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  server: {
    port: 13040
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - DDNSSharp — 开源、易用的跨平台 DDNS 工具 | bun.dev 旗下作品',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/icon-512x512.png' },
      // 解决 Google 字体国内访问慢的问题
      { rel: 'stylesheet', href: 'https://fonts.loli.net/css?family=Roboto|Roboto+Mono&display=swap' },
      // 因为 defaultAssets 设为了 false，这里需要手动引入 Material Design Icons
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css' },
      // tyyped style
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/vue-typed-js/dist/vue-typed-js.css' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/styles.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/cnzz', ssr: false },
    '@/plugins/typed'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    liveEdit: false
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    // 关闭默认字体，因为默认字体总是从 Google 获取字体，国内访问很慢，改为在 `head` 里引入国内源的 Roboto 字体
    // https://github.com/nuxt-community/vuetify-module#defaultassets
    defaultAssets: false,
    theme: {
      dark: false,
      themes: {
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
