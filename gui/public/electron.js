const {app, BrowserWindow} = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
    });

    mainWindow.loadURL("https://localhost:3000");
})