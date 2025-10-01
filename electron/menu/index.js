const { ipcRenderer } = require('electron')

document.addEventListener('DOMContentLoaded', () => {
    const addMenu = document.getElementById('addMenu')
    const menuCon = document.getElementById('menuCon')
    const addItem = document.getElementById('addItem')

    addMenu.addEventListener('click', async () => {
        ipcRenderer.send('add-menu')
        const err = await ipcRenderer.invoke('add-fail')
        if (err) {
            alert('菜单已存在，无法添加')
        }
    })

    addItem.addEventListener('click', async () => {
        const value = menuCon.value.trim()
        if (value) {
            ipcRenderer.send('add-item', value)
            const code = await ipcRenderer.invoke('add-success')
            if (code === 2) {
                menuCon.value = ''
                alert('添加菜单项成功')
            }
        } else {
            alert('输入菜单项不能为空')
        }
    })

    window.addEventListener('contextmenu', () => {
        ipcRenderer.send('context-menu')
    })
})