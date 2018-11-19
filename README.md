# Nuxt Starter Template

This is a [Nuxt.js](https://github.com/nuxt/nuxt.js) starter project template used for ACLU-branded projects

Includes:

- Axios ([axios-module](https://github.com/nuxt-community/axios-module))
- Bulma ([nuxt-bulma-slim](https://github.com/mustardamus/nuxt-bulma-slim))
- SASS/SCSS
- eslint + prettier
- ACLU branding (per [ACLU style guidelines](https://aclu-national.github.io/style/)), including logo assets

## Prerequisites

Make sure to have `node 8.0+` and `npm 5.0+` installed

## Installation

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

If you don't yet have vue-cli installed:

```bash
$ npm install -g vue-cli
```

If you have installed vue-cli v3, you may also need to install vue-cli-init (see [docs](https://cli.vuejs.org/guide/creating-a-project.html#pulling-2-x-templates-legacy):

```bash
$ npm install -g @vue/cli-init
```

To create a new project based on this `nuxt-starter-template`:

``` bash
$ vue init aclu-national/nuxt-starter-template my-project
$ cd my-project
# install dependencies
$ npm install # Or yarn install
```

> Make sure to use a version of vue-cli >= 2.1 (`vue -V`).

Note: due to licensing restrictions, this template does not include the font files referenced in the included `aclu-fonts.scss` file.  The font files may be obtained from the ACLU's privately maintained [styleguide](https://github.com/aclu-national/style).


## Usage

### Development

``` bash
# serve with hot reloading at localhost:3000
$ npm run dev
```

Go to [http://localhost:3000](http://localhost:3000)

### Production

``` bash
# build for production and launch the server
$ npm run build
$ npm start
```

### Generate

``` bash
# generate a static project
$ npm run generate
```

