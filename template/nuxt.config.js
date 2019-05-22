const isProd = process.env.DEPLOY_ENV === 'PROD'
const isStaging = process.env.DEPLOY_ENV === 'STAGING'
const isDev = !isProd && !isStaging

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
    isDev: isDev,
    isProd: isProd,
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    apiBaseUrl:
      isProd ? 'REPLACE_PROD_API' : 'REPLACE_DEV_API',
    MAPBOX_TOKEN: 'REPLACE_MAPBOX_TOKEN'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#0055aa' },
  /*
  ** Plugins
  */
  plugins: [{ src: '~plugins/aclu-vue-library', ssr: true }],
  /*
  ** Modules
  */
  modules: ['@nuxtjs/axios', 'nuxt-purgecss'],
  /*
   ** axios module config
   */
  axios: {
    debug: isDev
  },
  /*
  ** CSS
  */
  css: [
    'aclu-vue-library/dist/aclu-vue-library.css',
    { src: 'assets/scss/bulma-overrides.scss', lang: 'scss' },
    { src: 'assets/scss/main.scss', lang: 'scss' }
  ],
  /*
  ** PurgeCSS config
  */
  purgeCSS: {
    enabled: true,
    paths: [
      'node_modules/aclu-vue-library/src/components/*/*.vue',
      'node_modules/aclu-vue-library/src/components/*.vue'
    ]
  },
  /*
   ** Generate configuration
   ** Define routes used for building static pages
   */
  // generate: {
  //   fallback: true,
  //   routes: function() {
  //     let routes = [{ route: '/' }]
  //     candidates.map(candidate => {
  //       routes.push({
  //         route: '/share/' + candidate.slug
  //       })
  //     })
  //     return routes
  //   }
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Analyze build files
    */
    analyze: {
      analyzerMode: isDev ? 'static' : 'disabled'
    },
    /*
     ** Extract CSS in main chunk to separate cachaeble CSS file
     ** per https://github.com/nuxt/nuxt.js/issues/3166#issuecomment-409004911
     */
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(s?css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    // Set babel plugin per
    // https://stackoverflow.com/questions/53922898/nuxt-js-client-fails-in-production-but-works-during-development
    babel: {
      plugins: ['dynamic-import-node']
    },
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
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
