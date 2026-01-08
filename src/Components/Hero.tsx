import {
  Box,
  Container,
  Typography,
  Stack
} from "@mui/material";

import heroBg from "../assets/refuhero.png"; // ajusta la ruta
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        backgroundImage: `
          linear-gradient(
            rgba(15,23,42,0.85),
            rgba(11,60,93,0.85)
          ),
          url(${heroBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} maxWidth="600px">
          <Typography variant="h3" fontWeight="bold">
            Consigue más clientes con una{" "}
            <Box component="span" color="#22c55e">
              web que sí vende
            </Box>
          </Typography>

          <Typography variant="h6" color="gray">
            Diseñamos sitios web enfocados en convertir visitantes en clientes
            desde el primer día.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
           <WhatsAppButton/>
          </Stack>

          <Typography variant="body2" color="gray">
            Respuesta en menos de 24 horas
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
