const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld("api", {
  enviar: (datos,objeto)=>{
    console.log("activando ipcrenderer...")
      ipcRenderer.send(datos,objeto);
  },
  recibir: (canal,datos)=>{
    console.log("Leyendo en ipcrenderer...")
      ipcRenderer.on(canal,(event,...args)=>datos(...args))
  }


});