import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsAppButton({
  phone = "3325731485",
  message = "Hola, quiero más información"
}) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Button
      component="a"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      variant="outlined"
      size="large"
      startIcon={<WhatsAppIcon />}
      sx={{
        borderColor: "#22c55e",
        color: "#22c55e",
        borderRadius: 50,
        px: 4,
        py: 1.5,
        fontWeight: "bold",
        textTransform: "none",
        "&:hover": {
          borderColor: "#16a34a",
          backgroundColor: "rgba(34,197,94,0.1)"
        }
      }}
    >
      Cotizar por WhatsApp
    </Button>
  );
}
