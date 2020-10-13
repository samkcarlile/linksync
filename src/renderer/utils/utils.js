import { ipcRenderer } from 'electron';

const pending = {};

ipcRenderer.on('url-summary', (event, arg) => {
  const [resolve, reject] = pending[arg.url];
  if (arg.error) {
    reject(arg);
  } else {
    resolve(arg);
  }
  delete pending[arg.url];
});

const hotkeyListeners = [
  arg => console.log(`⌨️ Global shortcut was pressed! Clipboard: ${arg}`),
];

ipcRenderer.on('hotkey-pressed', (event, arg) => {
  hotkeyListeners.forEach(listener => listener(arg));
});

export function addHotKeyListener(listener) {
  return hotkeyListeners.push(listener) - 1;
}

export function removeHotKeyListener(index) {
  hotkeyListeners.splice(index, 1);
}

export async function getURLSummary(url) {
  return new Promise((resolve, reject) => {
    pending[url] = [resolve, reject];
    ipcRenderer.send('get-url-summary', url);
  });
}

export function isValidUrl(string) {
  try {
    new URL(string);
  } catch (_) {
    _; // ! fix this with eslint ignore
    return false;
  }

  return true;
}
