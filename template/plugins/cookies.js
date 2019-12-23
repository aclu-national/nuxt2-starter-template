;(function() {
  // Detect environment
  const prefix = process.env.isProd ? '' : 'staging'

  // Load cookie script
  const e = document.createElement('script')
  const n = document.getElementsByTagName('script')[0]
  e.type = 'text/javascript'
  e.async = true
  e.src = 'https://static.aclu.org/js/aclu-cookies.js'
  n.parentNode.insertBefore(e, n)

  // Call method to set cookies
  e.onload = function() {
    init(prefix)
  }
})()
