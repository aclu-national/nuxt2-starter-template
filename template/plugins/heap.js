/* eslint-disable */

export default ({ app }) => {
  const HEAP_ID_PROD = '2448659920'
  const HEAP_ID_DEV = '2510877912'

  // Assign heap id based on dev environment
  const HEAP_ID = process.env.isProd ? HEAP_ID_PROD : HEAP_ID_DEV

  // Heap snippet
  window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};
  heap.load(HEAP_ID);
}
/* eslint-enable */
