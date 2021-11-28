// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
  mainWindow.on('close', function(e){
    e.preventDefault();
    var choice = require('electron').dialog.showMessageBox(this,
        {
          type: 'question',
          buttons: ['Yes', 'No'],
          title: 'Izhod',
          message: 'Ste prepričani, da želite zapustiti aplikacijo?'
        });
    choice.then(function(res){
      if(res.response === 0){
        app.exit(0)
      }
      if(res.response === 1){

      }
    });
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const isMac = process.platform === 'darwin'

const template = [
  // { role: 'appMenu' }
  ...(isMac ? [{
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
  }] : []),
  // { role: 'fileMenu' }
  {
    label: 'Datoteka',
    submenu: [
      isMac ? { role: 'close' } : { role: 'quit', label: "Izhod" }
    ]
  },
  // { role: 'editMenu' }
  {
    label: 'Uredi',
    submenu: [
      { role: 'undo', label: "Razveljavi" },
      { role: 'redo', label: "Uveljavi" },
      { type: 'separator' },
      { role: 'cut', label: "Izreži" },
      { role: 'copy', label: "Kopiraj" },
      { role: 'paste', label: "Prilepi" },
      ...(isMac ? [
        { role: 'pasteAndMatchStyle' },
        { role: 'delete' },
        { role: 'selectAll' },
        { type: 'separator' },
        {
          label: 'Speech',
          submenu: [
            { role: 'startSpeaking' },
            { role: 'stopSpeaking' }
          ]
        }
      ] : [

      ])
    ]
  },
  // { role: 'viewMenu' }
  {
    label: 'Pogled',
    submenu: [
      { role: 'zoomIn', label: "Povečaj" },
      { role: 'zoomOut', label: "Pomanjšaj" },
      { role: 'resetZoom', label: "Ponastavi povečavo" },
      { type: 'separator' },
      { role: 'togglefullscreen', label: "Celoten zaslon" }
    ]
  },
  // { role: 'windowMenu' }
  {
    label: 'Okno',
    submenu: [
      { role: 'minimize', label: "Minimiraj" },
      ...(isMac ? [
        { type: 'separator' },
        { role: 'front' },
        { type: 'separator' },
        { role: 'window' }
      ] : [
        { role: 'close', label: "Zapri" }
      ])
    ]
  },
  {
    role: 'help',
    label: 'Pomoč',
    submenu: [
      {
        role: 'help',
        label: 'Navodila za izpolnjevanje polj',
        click() {
          const { dialog } = require('electron')
          const options = {
            type: 'info',
            buttons: ['OK'],
            title: 'Navodila za izpolnjevanje polj',
            message: 'Izposoja mora biti vsaj minuto po trenutnem času.\nVrnitev mora biti po času izposoje.\nStarost mora biti vsaj 18.\nČas izpita ne sme biti negativen.\nŠtevilko kreditne kartice zapišite kot xxxx-xxxx-xxxx-xxxx vključno z znakom -.',
          };
          dialog.showMessageBox(null, options, (response) => {
            console.log(response);
          });

        },
      }
    ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

var newWindow = null

function openAboutWindow() {
  if (newWindow) {
    newWindow.focus()
    return
  }

  newWindow = new BrowserWindow({
    height: 185,
    resizable: false,
    width: 270,
    title: '',
    minimizable: false,
    fullscreenable: false
  })

  newWindow.loadURL('file://' + __dirname + '/help.html')

  newWindow.on('closed', function() {
    newWindow = null
  })
}