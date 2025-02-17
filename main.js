console.log("Processo principal")
const { app, BrowserWindow, nativeTheme } = require('electron')

// JANELA PRINCIPAL. 
let win
const createWindow = () => {
    // a linha abaixo define o tema(claro ou escuro)
    nativeTheme.themeSource = 'dark' //(dark ou light)
    win = new BrowserWindow({
        width: 800,
        height: 600,
        //autoHideMenuBar: true,
        //minimizable: false,
        resizable: false
    })

    win.loadFile('./src/views/index.html')
}

// INICIAR A APLICAÇÃO.
app.whenReady().then(() => {
    createWindow()
    app.whenReady().then(() => {
        createWindow()

        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                createWindow()
            }
        })
    })

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })

})

