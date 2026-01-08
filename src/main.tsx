import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/inter/400.css'; // Normal
import '@fontsource/inter/600.css'; // Semi-bold
import '@fontsource/inter/800.css'; // Extra-bold para títulos
import { theme } from "./Components/theme.ts";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline elimina los márgenes del navegador de raíz */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
