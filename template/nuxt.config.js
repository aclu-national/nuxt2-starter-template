const isProd = process.env.DEPLOY_ENV === 'PROD'
const isStaging = process.env.DEPLOY_ENV === 'STAGING'
const isDev = !isProd && !isStaging

// Meta tags (Note: can be overwritten by individual pages)
const description = '{{escape description }}'
const canonicalUrl = 'https://www.aclu.org/' // <--------------------------- UPDATE
const robotPolicy = isProd ? 'all' : 'noindex, nofollow'

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
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:title', property: 'og:title', content: '{{escape name }}' },
      { hid: 'og:description', name: 'og:description', content: description },
      // {
      //   hid: 'og:image',
      //   property: 'og:image',
      //   content: 'https://aclu.org/voter/social_images/vote.png'
      // },
      // { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      // { hid: 'og:image:height', property: 'og:image:height', content: '675' },
      { hid: 'og:url', property: 'og:url', content: canonicalUrl },
      { hid: 'og:site_name', property: 'og:site_name', content: 'American Civil Liberties Union' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@ACLU' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@ACLU' },
      { hid: 'robots', name: 'robots', content: robotPolicy }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'https://static.aclu.org/images/favicon/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: 'https://static.aclu.org/images/favicon/favicon-32x32.png', sizes: '32x32' },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: 'https://static.aclu.org/images/favicon/apple-touch-icon.png',
        sizes: '183x183'
      }
      // { hid: 'canonical', rel: 'canonical', href: canonicalUrl }
    ],
    script: [
      {
        src: isProd
          ? 'https://cdn-pci.optimizely.com/js/16943591923.js'
          : 'https://cdn-pci.optimizely.com/js/16933484084.js'
      },
      {
        src: isProd
          ? 'https://assets.gospringboard.io/v1/rmst.js?brand_url=rms.gospringboard.io&app_id=WtUEvY8HhKU5'
          : 'https://assets.gospringboard.io/v1/rmst.js?brand_url=rms-staging.gospringboard.io&app_id=2mRuFmRmedwt',
        async: true,
        id: 'springboard-jssdk'
      }
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
  plugins: [
    { src: '~plugins/aclu-vue-library', mode: 'server' },
    { src: '~plugins/heap', mode: 'client' },
    { src: '~plugins/cookies', mode: 'client' }
  ],
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
      'node_modules/aclu-vue-library/src/components/**/*.vue','node_modules/aclu-vue-library/src/components/**/*.js'
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
