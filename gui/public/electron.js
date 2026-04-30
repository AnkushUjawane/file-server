const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;
const isDev = process.env.NODE_ENV !== "production";

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      contextIsolation: true,  
      nodeIntegration: false,  
    },
  });

  if (isDev) {
    mainWindow.loadURL("http://localhost:3000");
    mainWindow.webContents.openDevTools(); 
  } else {
    mainWindow.loadFile(path.join(__dirname, "../client/build/index.html"));
  }
});