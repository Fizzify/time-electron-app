const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
require("electron-reload")(__dirname, {
  electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  hardResetMethod: "exit",
});

let win;

function createWindow() {
  win = new BrowserWindow({
    transparent: true,
    width: 600,
    height: 200,
    maximizable: false,
    resizable: false,
    autoHideMenuBar: true,
    backgroundThrottling: false,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "/app/js/preload.js"),
    },
  });

  win.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("app/close", () => {
  app.quit(); 
});

ipcMain.on("app/minimize", () => {
  win.minimize();
});
