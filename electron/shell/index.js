const {shell} = require('electron')

window.onload = () => {
    const a = document.getElementById('openUrl')
    const btn = document.getElementById('btn')

    a.addEventListener('click', (e) => {
        e.preventDefault()
        const href = a.getAttribute('href')
        // 会启用默认的浏览器打开url
        shell.openExternal(href)
    })

    btn.addEventListener('click', () => {
        shell.showItemInFolder(__filename)
    })
}