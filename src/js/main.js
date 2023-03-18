const { app, BrowserWindow, ipcMain, Menu } = require('electron');
import { autoUpdater } from "electron-updater";
const path = require('path');
const fs = require("fs");

const isInProdMode = true;
const settingsFilePath = path.join(app.getPath("userData"), "settings.json");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    'minWidth': 1280,
    'minHeight': 720,
    'maxWidth': 1280,
    'maxHeight': 720,
    icon: path.join(app.getAppPath(), "icon.png"),
    title: 'League of Legends',
    titleBarStyle: 'hidden',
    frame: false,
    backgroundColor: "#010a13",
    center: true,
    show: false,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  if (!isInProdMode) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.webContents.on('did-finish-load', function() {
    mainWindow.show();

    if (fs.existsSync(settingsFilePath)) {
      mainWindow.webContents.send('updateSettings', fs.readFileSync(settingsFilePath, { encoding: "utf-8" }));
    } else {
      mainWindow.webContents.send('noSettingsFile');
    }

    if (isInProdMode) {
      autoUpdater.checkForUpdates();
    } else {
      mainWindow.webContents.send('update-not-available', null);
    }
  });

  if (isInProdMode) {
    autoUpdater.setFeedURL({
      provider: "github",
      repo: "LoL_ClientRemake",
      owner: "InFinity54",
      private: false,
      releaseType: "release"
    });
    autoUpdater.forceDevUpdateConfig = true;

    // Updater's main events
    autoUpdater
      .on('update-not-available', m => {
        mainWindow.webContents.send('update-not-available', m);
      })
      .on('update-available', m => {
        mainWindow.webContents.send('update-available', m);
      })
      .on('download-progress', m => {
        mainWindow.webContents.send('update-download-progress', m);
      })
      .on('update-downloaded', m => {
        mainWindow.webContents.send('update-downloaded', m);

        setTimeout(() => {
          autoUpdater.quitAndInstall();
        }, 3000);
      });
  } else {
    mainWindow.webContents.send('update-not-available', null);
  }

  ipcMain.handle('getAppVersion', (event) => {
    return app.getVersion();
  });

  ipcMain.handle('appExit', (event) => {
    app.quit();
  });

  ipcMain.handle('windowReduce', (event) => {
    mainWindow.minimize();
  });

  ipcMain.handle('windowClose', (event) => {
    app.exit();
  });

  ipcMain.handle('saveSettings', (event, args) => {
    fs.writeFileSync(settingsFilePath, args, { encoding: "utf-8" });
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  if (process.platform === "darwin") {
    let menuTemplate = [
      {
        label: app.name,
        submenu: [
          { role: 'about' },
          { type: 'separator' },
          { role: 'services' },
          { type: 'separator' },
          { role: 'hide' },
          { role: 'hideOthers' },
          { role: 'unhide' },
          { type: 'separator' },
          { role: 'quit' }
        ]
      }
    ];

    Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));
  }

  createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
