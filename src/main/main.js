const {
  app,
  BrowserWindow,
  ipcMain,
  globalShortcut,
  clipboard,
} = require('electron');
const fetch = require('node-fetch');
const cheerio = require('cheerio');

let window;
function createWindow() {
  window = new BrowserWindow({
    width: 365,
    height: 550,
    resizable: false,
    movable: true,
    autoHideMenuBar: true,
    alwaysOnTop: true,
    titleBarStyle: 'hidden',
    title: 'LinkSync',
    show: true,
    webPreferences: {
      nodeIntegration: true,
    },
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

ipcMain.on('get-url-summary', async (event, arg) => {
  let url;
  try {
    url = new URL(arg);
  } catch (err) {
    console.log('clipboard contained bad url');
    return event.reply('url-summary', {
      url: arg,
      error: err.message,
    });
  }

  // Get the favicon
  const faviconBuffer = await fetch(`${url.origin}/favicon.ico`).then(res =>
    res.buffer()
  );
  const favicon = await faviconBuffer.toString('base64');

  // Get the title & meta description if it exists
  const htmlContent = await fetch(arg).then(response => response.text());
  const $ = cheerio.load(htmlContent);

  const title = $('title').first().text() || '';
  const description = $('meta[name=description]').attr('content') || '';

  event.reply('url-summary', {
    url: arg,
    favicon: `data:image/x-icon;base64,${favicon}`,
    title,
    description,
  });
});

// Send the contents of the clipboard when the hotkey is pressed
app.whenReady().then(() => {
  globalShortcut.register('CommandOrControl+Shift+L', () => {
    window.webContents.send('hotkey-pressed', clipboard.readText());
  });
});
