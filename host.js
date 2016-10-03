const {releaseDocumentFocus} = require('./document-focus')

function giveWebviewDocumentFocus (element) {
  releaseDocumentFocus()

  requestAnimationFrame(function () {
    element.send('claim-document-focus')
  })
}

function elementIsUnfocusedWebview (element) {
  return element.tagName === 'WEBVIEW' && !element.getWebContents().isFocused()
}

function webviewDidAutofocus (element) {
  function didKeyDown (event) {
    element.removeEventListener('keydown', didKeyDown, true)
    giveWebviewDocumentFocus(element)
  }

  element.addEventListener('keydown', didKeyDown, true)
}

function handleAutofocus (element) {
  element.addEventListener('ipc-message', function (event) {
    if (event.channel === 'autofocus') {
      element.focus()
      webviewDidAutofocus(element)
    }
  })
}

function didMouseDown (event) {
  if (elementIsUnfocusedWebview(event.target)) {
    giveWebviewDocumentFocus(event.target)
  }
}

addEventListener('mousedown', didMouseDown, true)
document.querySelectorAll('webview').forEach(handleAutofocus)
