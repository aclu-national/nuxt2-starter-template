module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }}',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' },
      { hid: 'og:title', property: 'og:title', content: '{{escape name }}' },
      { hid: 'og:description', name: 'og:description', content: '{{escape description }}' },
      // {
      //   hid: 'og:image',
      //   property: 'og:image',
      //   content: 'https://aclu.org/voter/social_images/vote.png'
      // },
      // { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      // { hid: 'og:image:height', property: 'og:image:height', content: '675' },
      // { hid: 'og:url', property: 'og:url', content: 'https://aclu.org/voter' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'American Civil Liberties Union' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@ACLU' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@ACLU' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: '/apple-touch-icon.png',
        sizes: '183x183'
      }
      // { rel: 'canonical', href: 'https://www.aclu.org/voter' }
    ]
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    apiBaseUrl:
      process.env.DEPLOY_ENV === 'PROD' ? 'REPLACE_PROD_API' : 'REPLACE_DEV_API',
    MAPBOX_TOKEN: 'REPLACE_MAPBOX_TOKEN'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#0055aa' },
  /*
  ** Plugins
  */
  plugins: [{ src: '~plugins/aclu-vue-library', ssr: false }],
  /*
  ** Modules
  */
  modules: [
    [
      'nuxt-bulma-slim',
      {
        variablesPath: 'assets/scss/bulma-overrides.scss',
        additionalPaths: ['assets/scss/main.scss']
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Analyze build files
    */
    analyze: {
      analyzerMode: 'static'
    },
    /*
    ** Extract CSS in main chunk to separate cachaeble CSS file
    */
    extractCSS: {
      allChunks: true
    },
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
