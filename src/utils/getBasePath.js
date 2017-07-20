let baseUrl = null

export default function () {
  if (baseUrl === null) {
    var src = ''
    if (document.currentScript) {
      src = document.currentScript.src
    } else {
      var script = document.querySelectAll('script')
      if (script.length) {
        src = script[script.length - 1].src
      }
    }
    var lastPoint = src.lastIndexOf('/js/')
    if (lastPoint >= 0) {
      src = src.substring(0, lastPoint + 1)
    }
    baseUrl = src
  }
  return baseUrl
}
