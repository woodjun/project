const { app, BrowserWindow, ipcMain, Menu } = require('electron')

let mainWinId;

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

  const menuTemp = [
    { 
      label: 'send',
      click() {
        // 可以通过主进程中webContents直接发送消息
        mainWindow.webContents.send('master-info', '主进程消息')
      }
    }
  ]

  const menu = Menu.buildFromTemplate(menuTemp)
  Menu.setApplicationMenu(menu)

  mainWindow.loadFile('index.html')

  mainWinId = mainWindow.id

  // mainWindow.webContents.openDevTools()

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
// 渲染进程和主进程通信
ipcMain.on('async-info', (e, data) => {
  console.log('data: ', data); 
  e.sender.send('async-receive', '来自主进程的异步操作')
})

ipcMain.on('sync-info', (e, data) => {
  console.log('data: ', data);
  e.returnValue = '来自主进程的同步操作'
})

// 渲染进程和渲染进程通信
ipcMain.on('create-win', (e, data) => {
  const subWin = new BrowserWindow({
    show: false,
    width: 600,
    height: 600,
    parent: BrowserWindow.fromId(mainWinId),
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false 
    } 
  }) 

  subWin.loadFile('subwindow.html')

  subWin.webContents.openDevTools() 

  subWin.on('ready-to-show', () => {
    // 等页面加载完再发送数据，否则渲染进程无法接收
    subWin.webContents.send('master-send', data)
    subWin.show()
  }) 
})

// 数据流通：渲染进程->主进程->渲染进程
ipcMain.on('render-send', (e, data) => {
  const mainWin = BrowserWindow.fromId(mainWinId)
  mainWin.webContents.send('main-send', data)
})



