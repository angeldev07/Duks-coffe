import { Box, Typography } from "@mui/material";
import { Container, PageHeader } from "../../ui";
import { useAppSelector } from "../../store";
import { Navigate, useNavigate } from "react-router-dom";
import ClientForm from "../components/ClientForm";
import { useUpdateClientMutation } from '../services'
import { Client } from "../interfaces/clients";

export const EditClientPage = () => {
  const client = useAppSelector((state) => state.clients.selectedClient);
  const [updateClient] = useUpdateClientMutation()
  const navigate = useNavigate();
  if (!client) {
    return <Navigate to={"/backoffice/clients"} replace={true} />;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    console.log(Object.fromEntries(formData));
    

    if(!formData.get('active'))
      formData.append('active', 'false')

    const clientUpdate: Client = {
      id: client.id,
      name: formData.get('name') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      gender: formData.get('gender') as string,
      address: formData.get('address') as string,
      phone: formData.get('phone') as string,
      active: formData.get('active') === 'true' ? true : false,
      birthDay: client.birthDay,
      cardId: client.cardId,
      lastVisit: client.lastVisit,
    }


    updateClient(clientUpdate).unwrap().then( ()  => {
      navigate("/backoffice/clients", { replace: true });
    }).catch( err => {
      console.log(err)
    })

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
