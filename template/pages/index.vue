<template>
  <responsive-page-wrapper>
    <template slot-scope="{ isTouch }">
      <div id="main">

        <h1 class="title is-size-1">{{ name }}</h1>
        <h2 class="is-size-2">{{ description }}</h2>

        <div class="pt-md">
          <a href="https://nuxtjs.org/" target="_blank" class="button is-dark">Documentation</a>
          <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button is-light">GitHub</a>
      </div>
    </template>
  </responsive-page-wrapper>
</template>

<script>
import ResponsivePageWrapper from '~/components/ResponsivePageWrapper'

export default {
  components: {
    ResponsivePageWrapper
  },
  props: {
    isTouch: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
@import '~assets/scss/variables.scss';
</style>
