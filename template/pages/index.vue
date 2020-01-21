<template>
  <responsive-page-wrapper>
    <template slot-scope="{ isTouch, deviceBySize }">
      <div id="main">
        <div class="has-background-white">
          <section class="section">
            <div class="container">
              <h1 class="title is-size-1">{{ name }}</h1>
              <p>{{ description }}</p>

              <div v-if="!isTouch" class="pt-md">
                <p>
                  Welcome to your Vue / Nuxt app. For information on getting started, try the
                  <a href="https://nuxtjs.org/" target="_blank">Nuxt documentation</a>
                  .
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </template>
  </responsive-page-wrapper>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables.scss';
</style>
