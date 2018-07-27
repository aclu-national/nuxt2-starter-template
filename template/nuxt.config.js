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
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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
    extend (config, { isDev, isClient }) {
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

