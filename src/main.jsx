import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Importamos las herramientas de tema de MUI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Creamos el tema oscuro
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* El ThemeProvider aplica el color oscuro a todo lo que esté dentro */}
    <ThemeProvider theme={darkTheme}>
      {/* CssBaseline normaliza el CSS y pone el fondo de la pantalla oscuro */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)