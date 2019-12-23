# Nuxt v2 Starter Template

This is a [Nuxt.js](https://github.com/nuxt/nuxt.js) v2 starter project template used for ACLU-branded projects

Includes:

- Axios ([axios-module](https://github.com/nuxt-community/axios-module))
- [Bulma](https://github.com/jgthms/bulma) (with [nuxt-purgecss](https://github.com/Developmint/nuxt-purgecss))
- SASS/SCSS
- eslint + prettier
- ACLU branding (per [ACLU style guidelines](https://aclu-national.github.io/style/)), including logo assets

## Prerequisites

Make sure to have a node version between `node 8.0-10` and `npm 5.0+` installed

Note: If you have a node version greater than ten, use nvm (https://github.com/nvm-sh/nvm) to install a lesser version of node (>nvm install 10). Then install node-gyp (https://github.com/nodejs/node-gyp) with the older version. Otherwise you will run into errors (error prepareGitDep) when installing the dependencies.

## Installation

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

If you don't yet have vue-cli installed:

```bash
$ npm install -g vue-cli
```

This template requires vue-cli v2.x. If you are using vue-cli v3, you will also need to install `@vue/cli-init`: (see [docs](https://cli.vuejs.org/guide/creating-a-project.html#pulling-2-x-templates-legacy) for more info)

```bash
$ npm install -g @vue/cli-init
```

### Steps for creating a new project based on this `nuxt2-starter-template`:

1. Initiate the Nuxt project using this template:

``` bash
$ vue init aclu-national/nuxt2-starter-template my-project
$ cd my-project
```

2. Update the personal access token for `aclu-vue-library` (see devDependencies in `package.json`)

3. Install dependencies

``` bash
$ npm install # Or yarn install
```

4. Spin up the development server

``` bash
$ npm run dev
```

Your project will be available at http://localhost:3000

For more information, see your project's generated README.md

### Notes:

1. Requires a version of vlue-cli >- 2.1
2. The initial npm install will fail unless you have updated the github access token for `aclu-vue-library`, which is a private repo (see that project for details)


## Getting Started - Some common next steps

Given the fast-paced nature of these projects, this template may not have the latest updates used by our other front-end repos. The following steps will help you check for updates and get you oriented with the code and design patterns for other nuxt-based aclu.org frontends.

### 1.) Layout and spacing primer
```
@import 'assets/scss/mixins.scss' 
# Also pulls in variables.scss and ~bulma/sass/utilities/mixins 

<section class="section pt-md pt-sm-touch pb-xl info-box__section">
# Most page layout styles use the bulma.io CSS framework

'assets/scss/spacing.scss' contains the explanation of the custom spacing classes
used in the above example.
# TIP: Learn how to decipher pt-md and pb-xl in that file

https://bulma.io/documentation/modifiers/typography-helpers/
# TIP: Keep a tab open with this bulma page to remind you of what's available
```

### 2.) Check for fresh updates

After initiating the template, check for any fresh updates or additions (from new repos) to the following:
```
Header.vue
Footer.vue
utils/colors.js
utils/breakpoint.js
assets/scss/*
components/common/*
plugins/*
/static/_headers (used for CSP headers mainly)
```

If you find updates, add them to the `/template/` files in this repo and help the next person!

### 3.) Set up redirects

Assuming this project is hosted on Netlify, you can set up redirects in a `/static/_redirects` file.  Netlify will read that file and initiate redirects on initial app/page load.
