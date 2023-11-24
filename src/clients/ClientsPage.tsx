import { Box, Button, Typography } from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { PageHeader, Container } from "../ui";
import { cardsInfo } from "./const";
import { InfoCard } from "./components/InfoCard";
import  ClientList  from "./pages/ClientList";

const clientsExample = [
  {
      "id": 1,
      "name": "Juan",
      "lastName": "Perez",
      "email": "juan@example.com",
      "cardId": "ABC123",
      "gender": "M",
      "birthDay": "1990-01-15T05:00:00.000+00:00",
      "active": true,
      "lastVisit": "2023-11-21T05:00:00.000+00:00",
      "address": "Calle 123",
      "phone": "123-456-7890"
  },
  {
      "id": 2,
      "name": "Maria",
      "lastName": "Gomez",
      "email": "maria@example.com",
      "cardId": "XYZ789",
      "gender": "F",
      "birthDay": "1985-05-10T05:00:00.000+00:00",
      "active": true,
      "lastVisit": "2023-11-20T05:00:00.000+00:00",
      "address": "Avenida 456",
      "phone": "987-654-3210"
  }
]


export const ClientsPage = () => {
  return (
    <div>
      <PageHeader>
        <Box
          component="header"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h4">Clientes</Typography>
          <Button
            variant="contained"
            startIcon={<GroupAddIcon />}
            sx={{ padding: ".5rem 1.3rem" }}
          >
            Registrar cliente
          </Button>
        </Box>
      </PageHeader>

      {/* some stats cards */}

      <Box
        component="section"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {cardsInfo.map((item, index) => (
          <InfoCard key={index} item={item} />
        ))}
      </Box>

      {/* Table user */}
      <Container title="Lista de clientes" colorBorder="#000">
        <ClientList  data={clientsExample}/>
  
      </Container>
    </div>
  );
};
