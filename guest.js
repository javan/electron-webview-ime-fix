const {ipcRenderer} = require('electron')
const {claimDocumentFocus} = require('./document-focus')

ipcRenderer.on('claim-document-focus', claimDocumentFocus)

addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('[autofocus]')) {
    ipcRenderer.sendToHost('autofocus')
  }
})
