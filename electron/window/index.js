const {ipcRenderer} = require('electron')

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', () => {
        ipcRenderer.send('create-win')
    })
})