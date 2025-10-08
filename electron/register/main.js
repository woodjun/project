const { app, BrowserWindow, globalShortcut } = require('electron')

function createWindow () {
  const mainWindow = new BrowserWindow({
    show: false,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  mainWindow.loadFile('index.html')

  mainWindow.on('ready-to-show', () => {
    globalShortcut.register('ctrl + q', () => {
      console.log('快捷键被触发了');
    })
    mainWindow.show()
  })
}

app.whenReady().then(() => {
  createWindow()
})

app.on('will-quit', () => {
  // 注销单个快捷键
  globalShortcut.unregister('ctrl + q')
  // 注销所有快捷键
  globalShortcut.unregisterAll()

})

app.on('window-all-closed', function () {
  app.quit()
})

