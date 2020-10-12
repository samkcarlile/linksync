const { app, BrowserWindow } = require('electron');

function createWindow() {
  const window = new BrowserWindow({
    width: 500,
    height: 500,
    autoHideMenuBar: true,
    title: 'LinkSync',
    show: true,
  });

  window.loadURL('http://localhost:8080');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
