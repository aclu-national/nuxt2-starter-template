<template>
  <div id="header" role="banner" class="header">
    <section class="section">
      <div class="container">
        <a href="#main" class="screenreader-only appear-on-focus">Skip to main content</a>
        <no-ssr><BrandedNav /></no-ssr>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
// Preserve space for nav while it loads
.header {
  min-height: 76px;
  height: auto;
}
</style>
