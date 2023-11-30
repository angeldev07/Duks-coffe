import { Box, Typography } from "@mui/material";
import { Container, PageHeader } from "../../ui";
import { useAppSelector } from "../../store";
import { Navigate, useNavigate } from "react-router-dom";
import ClientForm from "../components/ClientForm";
import { useUpdateClientMutation, useAddClientMutation } from '../services'
import { Client } from "../interfaces/clients";

export const EditClientPage = ({ isEditing }: { isEditing: boolean }) => {
  const client = useAppSelector((state) => state.clients.selectedClient);
  const [updateClient] = useUpdateClientMutation()
  const [addClient] = useAddClientMutation()
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
      cardId: formData.get('cardId') as string,
      gender: formData.get('gender') as string,
      address: formData.get('address') as string,
      phone: formData.get('phone') as string,
      active: formData.get('active') === 'true' ? true : false,
      birthDay: client.birthDay,
      lastVisit: client.lastVisit,
    }


    if (isEditing) {
      updateClient(clientUpdate).unwrap().then(() => {
        navigate("/backoffice/clients", { replace: true });
      }).catch(err => {
        console.log(err);
      });
    } else {
      addClient(clientUpdate).unwrap().then(() => {
        navigate("/backoffice/clients", { replace: true });
      }).catch(err => {
        console.log(err);
      });
    }

  }

  return (
    <>
      <PageHeader>
        <Typography variant="h5">
          {isEditing ? 'Editando a' : 'Creando cliente nuevo'} {isEditing ? `: ${client?.name} ${client?.lastName}` : ''}
        </Typography>
      </PageHeader>

      <Container title="Información del cliente">
        <Box component="section" sx={{ padding: "1rem" }}>
          <ClientForm client={isEditing ? client as Client : {} as Client} submit={handleSubmit} isEditing={isEditing} />
        </Box>
      </Container>
    </>
  );
};
