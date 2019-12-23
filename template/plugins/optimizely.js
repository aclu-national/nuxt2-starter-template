;(function() {
  // Optimizely project snippet URLs
  const prodSnippet = 'https://cdn.optimizely.com/js/16943591923.js'
  const stagingSnippet = 'https://cdn.optimizely.com/js/16933484084.js'

  // Load snippet based on environment
  const e = document.createElement('script')
  const n = document.getElementsByTagName('script')[0]
  e.type = 'text/javascript'
  e.src = process.env.isProd ? prodSnippet : stagingSnippet
  n.parentNode.insertBefore(e, n)
})()
