const { app, BrowserWindow, ipcMain } = require('electron')

function createWindow () {
  const mainWindow = new BrowserWindow({
    x: 0,
    y: 0, // 设置窗口相对屏幕左上角的偏移值
    width: 800,
    height: 600,
    show: false, // 是否创建就加载窗口, 主要是loadFile加载文件不同步问题
    maxHeight: 800,
    maxWidth: 1000,
    minHeight: 400,
    minWidth: 200, // 设置窗口可缩放的最大和最小尺寸
    // resizable: false, // 是否可缩放
    frame: true, // 用于自定义菜单栏，设置为false会将默认菜单栏隐藏
    icon: 'avator.png', // 设置图标
    title: '窗口', // 设置标题，一旦设置这个值，title标签内容就不能有值，否则不生效
    autoHideMenuBar: false, // 是否隐藏导航
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  mainWindow.loadFile('index.html')
  // index.html加载完成后再展示串口，解决窗口展示和资源加载不同步问题
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('create-win', () => {
  const listWindow = new BrowserWindow({
    parent: BrowserWindow.getFocusedWindow(), // 设置子窗口的父级窗口
    show: false,
    width: 500,
    height: 500,
    modal: true, // 子窗口为关闭之前不可操作父窗口
  })

  listWindow.loadFile('list.html')
  listWindow.on('ready-to-show', () => {
    listWindow.show()
  })
})

