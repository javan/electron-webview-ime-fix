const {releaseDocumentFocus} = require('./document-focus')

function giveWebviewFocus (element) {
  releaseDocumentFocus()

  requestAnimationFrame(function () {
    element.send('claim-document-focus')
  })
}

function elementIsUnfocusedWebview (element) {
  return element.tagName === 'WEBVIEW' && !element.getWebContents().isFocused()
}

function didMouseDown (event) {
  if (elementIsUnfocusedWebview(event.target)) {
    giveWebviewFocus(event.target)
  }
}

addEventListener('mousedown', didMouseDown, true)
