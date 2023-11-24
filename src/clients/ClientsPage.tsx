import { Box, Button, Typography } from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { PageHeader, Container } from "../ui";
import { cardsInfo } from "./const";
import { InfoCard } from "./components/InfoCard";
import ClientList from "./pages/ClientList";
import { useClients } from "./hooks/clients";
export const ClientsPage = () => {

  const { clients, isLoading, handleClientInfoView} = useClients()
 
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
        <>
          {isLoading && <div>Loading...</div>}
          {clients  && <ClientList data={clients} hanldeClientInfoView={handleClientInfoView} />}
        </>
      </Container>
    </div>
  );
};
