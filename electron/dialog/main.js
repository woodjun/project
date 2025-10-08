const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const path = require('node:path')

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

ipcMain.on('show-dialog', () => {
  dialog.showOpenDialog({
    title: '对话框', // 标题
    defaultPath: path.__dirname__, // 默认打开路径
    buttonLabel: '选择', // 确认的自定义标签
    properties: ['openFile', 'multiSelections'], // 对话框属性
    // 筛选文件类型
    filters: [
      { name: '代码文件', extensions: ['js', 'html', 'json'] },
      { name: '图片文件', extensions: ['ico', 'jpg', 'png'] },
    ]
  }).then(res => {
    console.log('res: ', res);
  })
})

ipcMain.on('show-err-dialog', () => {
  // 错误对话框
  dialog.showErrorBox('自定义标题', '自定义错误文本内容')
})

