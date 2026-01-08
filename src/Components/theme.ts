// src/theme.ts
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    // Definimos Inter como la primera opción
    fontFamily: [
      '"Inter"',
      '"Roboto"',
      '"Helvetica"',
      'Arial',
      'sans-serif'
    ].join(','),
    h2: {
      fontWeight: 800, // Para que el título del Hero se vea potente
    },
    button: {
      fontWeight: 600,
      textTransform: 'none', // Para que el botón no salga siempre en mayúsculas
    },
  },
  // Tus colores de REJU...
  palette: {
    primary: { main: '#001E3C' },
    secondary: { main: '#2ECC71' },
  },
});