import { app, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'

let Window: BrowserWindow

function createWindow() {
	Window = new BrowserWindow({
		width: 1280,
		height: 800,
		autoHideMenuBar: true,
		webPreferences: {
			nodeIntegration: true,
			preload: join(__dirname, 'preload.js'),
			contextIsolation: true
		},
		frame: process.platform === 'win32' ? false : true
	})

	//Window.webContents.openDevTools()
	Window.loadFile(join(__dirname, 'client/index.html'))
}

app.whenReady().then(() => {
	createWindow()
})

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
	if (Window === null) createWindow()
})

ipcMain.on('windowControls:maximize', (ipcEvent) => {
	const window = CurrentWindow(ipcEvent) as BrowserWindow

	if (window.isMaximized()) {
		window.restore()
	} else {
		window.maximize()
	}
})

ipcMain.on('windowControls:minimize', (ipcEvent) => {
	const window = CurrentWindow(ipcEvent) as BrowserWindow

	window.minimize()
})

ipcMain.on('windowControls:close', (ipcEvent) => {
	const window = CurrentWindow(ipcEvent) as BrowserWindow

	window.close()
})

const CurrentWindow = (ipcMain: any) =>
	BrowserWindow.fromWebContents(ipcMain.sender)
