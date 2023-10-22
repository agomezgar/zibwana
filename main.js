const { app, BrowserWindow } = require('electron')
const path = require('path')
const fs=require('fs')
const { ipcMain,dialog} = require('electron')
let win
let archivo,archivo2
const createWindow = () => {
    win = new BrowserWindow({
    width: 1920,
    height: 1080,
    autoHideMenuBar: true,
    webPreferences: {
      
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: true,
      enableRemoteModule: true
    
    
    },
  })

  win.loadFile('src/index.html')
}
app.whenReady().then(() => {
	createWindow()
  })
  // Function to create child window of parent one
function createChildWindow(arg) {
  childWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    modal: true,
    show: false,
    autoHideMenuBar: true,
    parent: win, // Make sure to add parent window here
  
    // Make sure to add webPreferences with below configuration
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: false,
    },
  });
  
  // Child window loads settings.html file
  +
  childWindow.loadFile("src/informe.html");
  childWindow.once("ready-to-show", () => {
    childWindow.webContents.send("reparte",arg)

    childWindow.show();
    let win = BrowserWindow.getFocusedWindow();
    var options = {
      marginsType: 0,
      pageSize: 'A4',
      printBackground: true,
      printSelectionOnly: false,
      landscape: false
  }    
    childWindow.webContents.printToPDF(options).then(data => {

      fs.writeFile(archivo, data, function (err) {
          if (err) {
              console.log(err);
          } else {
              console.log('PDF Generated Successfully');
          }
      });
  }).catch(error => {
      console.log(error)
  });
  });
}
  
ipcMain.on("openChildWindow", (event, arg) => {
  dialog.showSaveDialog({
    title: '¿Dónde lo guardamos?',
    defaultPath: path.join(__dirname, '/'),
    // defaultPath: path.join(__dirname, '../assets/'),
    buttonLabel: 'Guardar',
    // Restricting the user to only Text Files.
    filters: [
        {
            name: 'Archivos pdf',
            extensions: ['pdf']
        }, ],
    properties: []
}).then(file => {
    // Stating whether dialog operation was cancelled or not.
    console.log(file.canceled);
    if (!file.canceled) {

        console.log(file.filePath.toString());
        archivo=file.filePath.toString()+'.pdf';
          createChildWindow(arg)


    }
})
})
ipcMain.on("guardar", (event, arg) => {
  dialog.showSaveDialog({
    title: '¿Dónde lo guardamos?',
    defaultPath: path.join(__dirname, '/'),
    // defaultPath: path.join(__dirname, '../assets/'),
    buttonLabel: 'Guardar',
    // Restricting the user to only Text Files.
    filters: [
        {
            name: 'Actas guardadas',
            extensions: ['act']
        }, ],
    properties: []
}).then(file => {
    // Stating whether dialog operation was cancelled or not.
    console.log(file.canceled);
    if (!file.canceled) {

        console.log(file.filePath.toString());
        archivo2=file.filePath.toString()+'.act';
         
      fs.writeFile(archivo2, arg, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('¡Acta guardada!');
        }
    });


    }
})
})

ipcMain.on('click',function(event,arg){
  var datos=JSON.parse(arg)
  console.log(datos.fecha+","+datos.asunto+","+datos.asistentes)
 
	let win = BrowserWindow.getFocusedWindow();
	console.log('clock');
	win.webContents.printToPDF(options).then(data => {
        fs.writeFile(filepath1, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('PDF Generated Successfully');
            }
        });
    }).catch(error => {
        console.log(error)
    });
});
ipcMain.on("cargarArchivo",function(event){
  console.log("Me ha llegado la petición");
  dialog.showOpenDialog({properties: ['openFile'] }).then(function (response) {
    if (!response.canceled) {
        // handle fully qualified file name
      console.log(response.filePaths[0]);
      let camino=response.filePaths[0];
      fs.readFile(camino, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
        win.webContents.send("carga",data)
      });
    } else {
      console.log("no file selected");
    }
});
});