<template>
  <div id="header" role="banner" class="header">
    <section class="section">
      <div class="container">
        <a href="#main" class="screenreader-only appear-on-focus">Skip to main content</a>
        <no-ssr>
          <BrandedNav />
        </no-ssr>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '~assets/scss/variables.scss';

.header {
  // Preserve space for nav while it loads
  height: 106px;
}

@media screen and (max-width: $tablet) {
  .header {
    height: 60px;
  }
  .section {
    padding: 0;
  }
}
</style>
