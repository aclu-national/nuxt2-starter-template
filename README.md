# Starter

A [Nuxt.js](https://github.com/nuxt/nuxt.js) starter project template without the distraction of a complicated development environment.

Includes:

- Axios ([axios-module](https://github.com/nuxt-community/axios-module))
- Bulma ([nuxt-bulma-slim](https://github.com/mustardamus/nuxt-bulma-slim))
- SASS/SCSS
- eslint + prettier
- ACLU branding (per [ACLU style guidelines](https://aclu-national.github.io/style/))

## Prerequisites

Make sure to have `node 8.0+` and `npm 5.0+` installed

## Installation

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

If you don't yet have vue-cli installed:

```bash
$ npm install -g vue-cli
```

Create a new project based on this `nuxt-starter-template`:

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

