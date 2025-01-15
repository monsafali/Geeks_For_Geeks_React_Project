const { contextBridge, ipcRenderer } = require("electron");

// Expose APIs to the renderer process
contextBridge.exposeInMainWorld("electron", {
  send: (channel, data) => ipcRenderer.send(channel, data),
  receive: (channel, callback) =>
    ipcRenderer.on(channel, (event, args) => callback(args)),
});
