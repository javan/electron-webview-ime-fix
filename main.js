const path = require('path')
const {app, BrowserWindow} = require('electron')

function intitialize () {
  mainWindow = new BrowserWindow({width: 750, height: 375})
  mainWindow.loadURL(path.join(`file://${__dirname}/host.html`))
}

app.on('ready', intitialize)
