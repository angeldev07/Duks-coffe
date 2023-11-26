import { Box, Typography } from "@mui/material";
import { Container, PageHeader } from "../../ui";
import { useAppSelector } from "../../store";
import { Navigate } from "react-router-dom";
import ClientForm from "../components/ClientForm";

export const EditClientPage = () => {
  const client = useAppSelector((state) => state.clients.selectedClient);

  if (!client) {
    return <Navigate to={"/backoffice/clients"} replace={true} />;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    console.log(Object.fromEntries(new FormData(e.currentTarget)));
  }

  return (
    <>
      <PageHeader>
        <Typography variant="h5">
          Editando a : {`${client?.name} ${client?.lastName}`}{" "}
        </Typography>
      </PageHeader>

      <Container title="Información del cliente">
        <Box component="section" sx={{ padding: "1rem" }}>
          <ClientForm client={client} submit={handleSubmit} />
        </Box>
      </Container>
    </>
  );
};
