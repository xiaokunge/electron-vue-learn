/**
 * 为了加载我们自己页面（本地和在线的都可以），需要使用nodejs提供的app和BrowserWindow模块
 *      app 模块，它控制应用程序的事件生命周期。
 *      BrowserWindow 模块，它创建和管理应用程序 窗口。
 */
const { app, BrowserWindow } = require('electron')
    // 在文件头部引入 Node.js 中的 path 模块
const path = require('path')

/**
 * 创建窗口函数
 */
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('src/index.html')
    win.webContents.openDevTools({ mode: 'right' });
}

/**
 * 在 Electron 中，只有在 app 模块的 ready 事件被激发后才能创建浏览器窗口。 您可以通过使用 app.whenReady() API来监听此事件。 
 * 在whenReady()成功后调用createWindow()。
 */
app.whenReady().then(() => {
    createWindow()
    app.on('activate', function() {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})