const { app, BrowserWindow, Menu, ipcMain, nativeImage, globalShortcut, MenuItem } = require('electron')

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

  globalShortcut.register('CommandOrControl+Shift+I', () => {
    mainWindow.webContents.openDevTools()
  })

  const icon = nativeImage.createFromPath("./avator.png")

  const menuTemp = [
    {
      label: '文件', //  菜单名称
      // 子菜单
      submenu: [
        {
          label: '打开',
          icon: icon.resize({width: 16, height: 16}), // 菜单icon
          accelerator: 'ctrl + o', // 快捷键
          click() {
            console.log('点击打开菜单');
          }
        }, 
        {
          type: 'separator' // 分割线类型
        },
        {
          label: '关于',
          role: 'about', // 菜单角色
        }
      ]
    },
  ]
  // 右键菜单
  const contextMenus = Menu.buildFromTemplate([
    { role: 'copy' },
    { role: 'cut' },
    { role: 'paste' },
    { role: 'selectall' }
  ])

  ipcMain.on('context-menu', (event) => {
    contextMenus.popup({
      // 设置生效的区域
      window: BrowserWindow.fromWebContents(event.sender)
    })
  })

  // 将模板转化为菜单参数
  const menus = Menu.buildFromTemplate(menuTemp) 

  // 设置菜单
  Menu.setApplicationMenu(menus)

  mainWindow.loadFile('index.html')

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })
}

const submenus = new Menu()

ipcMain.on('add-menu', () => {
  // 获取应用菜单
  const menus = Menu.getApplicationMenu()
  const index = menus.items.findIndex(menu => menu.label === '自定义菜单')
  if (index === -1) {
    const menuItem = new MenuItem({label: '自定义菜单', submenu: submenus })
    menus.append(menuItem)
    Menu.setApplicationMenu(menus)
  } else {
    ipcMain.handle('add-fail', () => 1)
  } 
})

ipcMain.on('add-item', (e, val) => {
  const menuItem = new MenuItem({ label: val })
  submenus.append(menuItem)
  ipcMain.handle('add-success', () => 2)
})

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', function () {
  app.quit()
})

