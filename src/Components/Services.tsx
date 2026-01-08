import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import StorageIcon from "@mui/icons-material/Storage";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import WhatsAppButton from "./WhatsAppButton";

const services = [
  {
    icon: <LanguageIcon color="success" sx={{ fontSize: 40 }} />,
    title: "Desarrollo Web",
    text: "Sitios rápidos y optimizados para atraer clientes.",
  },
  {
    icon: <StorageIcon color="success" sx={{ fontSize: 40 }} />,
    title: "Sistemas a Medida",
    text: "Automatiza procesos y ahorra tiempo con software a medida.",
  },
  {
    icon: <RocketLaunchIcon color="success" sx={{ fontSize: 40 }} />,
    title: "Landing Pages",
    text: "Páginas diseñadas para vender con alta efectividad.",
  },
];

export default function Services() {
  return (
    <Box sx={{ backgroundColor: "#f8fafc", py: 12 }}>
      <Container sx={{alignContent:'center', alignItems:'center'}}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: "#2ECC71", fontWeight: "bold", letterSpacing: 2 }}
          >
            Nuestra Experiencia
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, mt: 1, color: "#001E3C" }}
          >
            A qué nos dedicamos
          </Typography>
          <Box
            sx={{
              width: "60px",
              height: "4px",
              bgcolor: "#2ECC71",
              mx: "auto",
              mt: 2,
              borderRadius: 2,
            }}
          />
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={4} key={index}>
              <Paper elevation={2} sx={{ p: 4, borderRadius: 4 , textAlign: 'center' }}>
                {service.icon}
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  {service.title}
                </Typography>
                <Typography color="text.secondary" mt={2} mb={2}>
                  {service.text}
                </Typography>

                <WhatsAppButton/>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
export { Services };

// import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
// // Importamos iconos modernos de MUI
// import LanguageIcon from '@mui/icons-material/Language';
// import StorageIcon from '@mui/icons-material/Storage';
// import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
// import DevicesIcon from '@mui/icons-material/Devices';

// const services = [
//   {
//     title: "Desarrollo Web",
//     description: "Creamos sitios modernos, rápidos y optimizados para convertir visitantes en clientes potenciales.",
//     icon: <LanguageIcon sx={{ fontSize: 40, color: '#2ECC71' }} />
//   },
//   {
//     title: "Sistemas a Medida",
//     description: "Desarrollamos software de gestión interna (como paneles de administración) adaptados a tus procesos.",
//     icon: <StorageIcon sx={{ fontSize: 40, color: '#2ECC71' }} />
//   },
//   {
//     title: "Landing Pages",
//     description: "Páginas de aterrizaje enfocadas en un solo objetivo: vender tu producto o servicio con alta efectividad.",
//     icon: <AppRegistrationIcon sx={{ fontSize: 40, color: '#2ECC71' }} />
//   },
//   {
//     title: "Diseño Adaptable",
//     description: "Tu plataforma se verá y funcionará perfectamente en computadoras, tablets y celulares.",
//     icon: <DevicesIcon sx={{ fontSize: 40, color: '#2ECC71' }} />
//   }
// ];

// export const Services = () => {
//   return (
//     <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FFFFFF' }}>
//       <Container maxWidth="lg">
//         {/* Encabezado de la sección */}
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <Typography variant="overline" sx={{ color: '#2ECC71', fontWeight: 'bold', letterSpacing: 2 }}>
//             Nuestra Experiencia
//           </Typography>
//           <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, color: '#001E3C' }}>
//             A qué nos dedicamos
//           </Typography>
//           <Box sx={{ width: '60px', height: '4px', bgcolor: '#2ECC71', mx: 'auto', mt: 2, borderRadius: 2 }} />
//         </Box>

//         {/* Cuadrícula de servicios */}
//         <Grid container spacing={4}>
//           {services.map((service, index) => (
//             <Grid size={12} key={index}>
//               <Card
//                 elevation={0}
//                 sx={{
//                   height: '100%',
//                   p: 2,
//                   textAlign: 'center',
//                   border: '1px solid #f0f0f0',
//                   borderRadius: 4,
//                   transition: '0.3s',
//                   '&:hover': {
//                     transform: 'translateY(-10px)',
//                     boxShadow: '0 12px 30px rgba(0,0,0,0.05)',
//                     borderColor: 'transparent'
//                   }
//                 }}
//               >
//                 <CardContent>
//                   <Box sx={{ mb: 3 }}>
//                     {service.icon}
//                   </Box>
//                   <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#001E3C' }}>
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
//                     {service.description}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };
