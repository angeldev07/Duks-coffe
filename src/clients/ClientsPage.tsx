import { Box, Button, Typography } from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { PageHeader, Container, AlertDialog as Modal } from "../ui";
import { InfoCard } from "./components/InfoCard";
import ClientList from "./pages/ClientList";
import { useClients } from "./hooks/clients";
export const ClientsPage = () => {
  const {
    clients,
    isLoading,
    stats,
    open,
    handleClientInfoView,
    handleOpenModalDeteClientConfirm,
    handleCancelDeleteClient,
    handleDeleteClient,
    handleEditClient,
  } = useClients();

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
        {stats.map((item, index) => (
          <InfoCard key={index} item={item} />
        ))}
      </Box>

      {/* Table user */}
      <Container title="Lista de clientes" colorBorder="#000">
        <>
          {isLoading && <div>Loading...</div>}
          {clients && clients.length > 0 && (
            <ClientList
              data={clients}
              hanldeClientInfoView={handleClientInfoView}
              handleClientDelete={handleOpenModalDeteClientConfirm}
              handleClientEdit={handleEditClient}
            />
          )}
          {clients && clients.length === 0 && (
            <Typography variant="body1" align="center" sx={{padding: '1rem'}}>
              No se encontraron clientes
            </Typography>
          )}
        </>
      </Container>
      <Modal
        open={open}
        data={{
          title: "Eliminar usuario",
          content:
            "Estas seguro de que quieres eliminar al usuario seleccionado",
        }}
        handleAccept={handleDeleteClient}
        handleClose={handleCancelDeleteClient}
      />
    </div>
  );
};
