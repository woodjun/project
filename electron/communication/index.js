const {ipcRenderer} = require('electron')

document.addEventListener('DOMContentLoaded', () => {
    const btns = document.getElementsByTagName('button')
    const sendInput = document.getElementById('send')

    btns[0].addEventListener('click', () => {
        // 异步操作
        ipcRenderer.send('async-info', '来自渲染进程的异步操作')
    })

    ipcRenderer.on('async-receive', (e, data) => {
        console.log('data: ', data);
    })

    btns[1].addEventListener('click', () => {
        // 同步操作
        const res = ipcRenderer.sendSync('sync-info', '来自渲染进程的同步操作')
        console.log('res: ', res);
    })

    ipcRenderer.on('master-info', (e, data) => {
        console.log('data: ', data);
    })

    // 渲染进程和渲染进程之间通信
    btns[2].addEventListener('click', () => {
        // 进程传递数据
        ipcRenderer.send('create-win', '进程数据')
        // 本地存储通信
        localStorage.setItem('name', '本地数据')
    })

    ipcRenderer.on('main-send', (e, data) => {
        sendInput.value = data
    })
})
