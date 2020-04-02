function getHtmlSize (isheight) {
  const html = document.getElementsByTagName('html')[0]
  const height = html.clientHeight
  const width = html.clientWidth
  let size = width > height && !isheight ? height / 640 : width / 750
  return size
  // if (size > 1 && window.devicePixelRatio > 1) {
  //   size = 1 - (size - 1)
  // } else if (window.devicePixelRatio === 1) {
  //   size = 0.625
  // }
}

function setFontSize (isheight) {
  var html = document.getElementsByTagName('html')[0]
  html.style.fontSize = (getHtmlSize(isheight) * 100) + 'px'
}
// function getSize (px) {
//   return getHtmlSize() * px
// }
setFontSize()
