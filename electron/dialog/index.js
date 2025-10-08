const { ipcRenderer } = require('electron')
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn')
    const errBtn = document.getElementById('errbtn')

    btn.addEventListener('click', () => {
        ipcRenderer.send('show-dialog')
    })

    errBtn.addEventListener('click', () => {
        ipcRenderer.send('show-err-dialog')
    })
})