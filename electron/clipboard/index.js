const { clipboard, nativeImage } = require("electron")

window.onload = () => {
    const copyInput = document.getElementById('copyInput')
    const pasteInput = document.getElementById('pasteInput')
    const copybtn = document.getElementById('copy')
    const pastebtn = document.getElementById('paste')
    const copyImg = document.getElementById('copyImg')

    let res; 

    copybtn.addEventListener('click', () => {
        res = clipboard.writeText(copyInput.value)
    })

    pastebtn.addEventListener('click', () => {
        const val = clipboard.readText(res)
        pasteInput.value = val
    })

    copyImg.addEventListener('click', () => {
        const icon = nativeImage.createFromPath('./avator.jpg')
        clipboard.writeImage(icon)

        const iconImg = clipboard.readImage()
        const img = new Image()
        img.crossOrigin = 'anonymous';
        img.src = iconImg.toDataURL()
        document.body.appendChild(img)
    })
}