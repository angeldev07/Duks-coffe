import { Grid, Typography } from "@mui/material";
import { Container, PageHeader } from "../../ui";
import { useAppSelector } from "../../store";
import { Navigate } from "react-router-dom";
import ClientCard from "../components/ClientCardPersonalInfo";
import OrdersCard from "../components/OrdersCardClient";

export const ClientInfoPage = () => {
  const client = useAppSelector((state) => state.clients.selectedClient);

  if (!client) {
    return <Navigate to={"/backoffice/clients"} replace={true} />;
  }

  return (
    <>
      <PageHeader>
        <Typography variant="h5">
          Información del cliente: {`${client?.name} ${client?.lastName}`}{" "}
        </Typography>
      </PageHeader>

      <Container title="Información del cliente">
        <Grid container padding={2} spacing={2}>
          <Grid item xs={12} md={6}>
            <ClientCard client={client} />
          </Grid>
          <Grid item xs={12} md={6}>
            <OrdersCard orders={[]} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
