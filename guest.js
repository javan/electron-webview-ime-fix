const {ipcRenderer} = require('electron')
const {claimDocumentFocus} = require('./document-focus')

ipcRenderer.on('claim-document-focus', claimDocumentFocus)
