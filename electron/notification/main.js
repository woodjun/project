const { app, BrowserWindow } = require('electron')

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
    mainWindow.show()
  })
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', function () {
  app.quit()
})

