const { app, BrowserWindow, ipcMain } = require('electron')

function createWindow () {
  // 创建主界面
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // 允许浏览器环境使用node语法
      nodeIntegration: true,
      // 允许浏览器环境使用electron语法
      contextIsolation: false
    }
  })
  // 加载index.html
  mainWindow.loadFile('index.html')

  mainWindow.webContents.on('did-finish-load', () => {
    console.log("33333--->did-finish-load")
  })

  ipcMain.on('dom-ready', () => {
    console.log("22222--->dom-ready")
  })
}

app.on('ready', () => {
  console.log("11111--->ready")
  createWindow()
})

app.on('window-all-closed', function () {
  console.log("44444--->window-all-closed")
  app.quit()
})

app.on('before-quit', () => {
  console.log("55555--->before-quit")
})

app.on('will-quit', () => {
  console.log("66666--->will-quit")
})

app.on('quit', () => {
  console.log("77777--->quit")
})

