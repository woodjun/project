const { app, BrowserWindow, session } = require('electron')

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
    mainWindow.webContents.openDevTools()
    mainWindow.show()
  })
}  
 
app.whenReady().then(() => {
  createWindow()
  // 外部图片资源需要设置Content-Security-Policy，否则会出现CSP限制问题
  // 同时html也要设置
  // <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; connect-src 'self' http://localhost:*; img-src 'self' blob: data:">
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': ["default-src 'self'; script-src 'self'; img-src 'self' data:"]
      }
    })
  })
})

app.on('window-all-closed', function () {
  app.quit()
})

