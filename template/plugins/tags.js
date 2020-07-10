export default ({ app }) => {
  /**
   * ScriptTag
   * Use this to create script tags that will be injected into the <head>
   */
  function ScriptTag({ src = '', isAsync = false, runBefore = () => {}, runAfter = () => {} }) {
    this.src = src
    this.isAsync = isAsync
    this.runBefore = runBefore
    this.runAfter = runAfter

    this.load = () => {
      const e = document.createElement('script')
      const ns = document.head.getElementsByTagName('script')
      const n = ns[ns.length - 1]
      e.type = 'text/javascript'
      e.async = this.isAsync
      e.src = this.src

      this.runBefore()
      n.parentNode.insertBefore(e, n.nextSibling)
      e.onload = () => {
        this.runAfter()
      }
    }
  }

  /**
   * Optimizely Breakpoint
   */
  const optimizelyBreakpoint = new ScriptTag({
    src: 'https://static.aclu.org/js/optimizelyBreakpoints.js',
    isAsync: true,
    runAfter: () => {
      var userDefinedBreakpoints = [
        { max: 768, name: 'mobile' },
        { max: 960, name: 'tablet' },
        { max: 1200, name: 'desktop' },
        { max: Infinity, name: 'wide-desktop' }
      ]
      optimizelyBreakpoints.initialize(userDefinedBreakpoints)
    }
  })

  // Tags will load in the order that they are listed
  optimizelyBreakpoint.load()
}
