import { app, BrowserWindow } from "electron";
import path from "path";

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(process.cwd(), "preload.js"),
      nodeIntegration: true,
      offscreen: false, // Temporarily set to false to see full content
    },
  });

  const isDev = !app.isPackaged;

  // Check if the Vite app is running and load it properly
  if (isDev) {
    mainWindow.loadURL("http://localhost:5173"); // Ensure Vite dev server is up
  } else {
    mainWindow.loadFile(path.join(process.cwd(), "dist", "index.html"));
  }

  // Listen for the first load and then toggle offscreen if necessary
  mainWindow.webContents.once("did-finish-load", () => {
    if (isDev) {
      console.log("Vite App Loaded");
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
