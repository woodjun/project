const {ipcRenderer} = require('electron')
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('local')
    const sendInput = document.getElementById('send')
    const btn = document.getElementById('btn')
    // 本地数据
    const val = localStorage.getItem('name')
    input.value = val

    // 进程数据
    ipcRenderer.on('master-send', (e, data) => {
        sendInput.value = data
    })

    btn.addEventListener('click', () => {
        // 数据流通：渲染进程->主进程->渲染进程
        ipcRenderer.send('render-send', '新窗口发送数据')
    })
})
