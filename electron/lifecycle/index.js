const { ipcRenderer } = require('electron')

document.addEventListener('DOMContentLoaded', () => {
    ipcRenderer.send('dom-ready')
})