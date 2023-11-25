import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { useGetAllClientsQuery } from "../services";
import { setClients, setSelectedClient, deleteClient } from "../slice/clients";
import { Client } from "../interfaces/clients";
import { useNavigate } from "react-router-dom";
import { cardsInfo } from "../const";
export const useClients = () => { 

    const {clients} = useAppSelector((state) => state.clients);
    const dispatch = useAppDispatch();
    const navigate = useNavigate(); 
    const [open, setOpen] = useState(false);
  
    const { data, isLoading } = useGetAllClientsQuery();

    const handleClientInfoView = (client: Client) => { 
        dispatch(setSelectedClient(client));
        navigate(`/backoffice/clients/${client.id}`);
    }

    const handleOpenModalDeteClientConfirm = (client: Client) => { 
        setOpen(true);
        dispatch(setSelectedClient(client));
    }

    const handleCancelDeleteClient = () => { 
        setOpen(false);
        dispatch(setSelectedClient(null));
    }

    const handleDeleteClient = () => {
      dispatch(deleteClient());
      setOpen(false);
    }

    const stats = useMemo(() => {
      if (!clients) return cardsInfo;
      return cardsInfo.map((item) => {
        if (item.title === "Clientes registrados") {
          return { ...item, value: clients.length };
        }
        if (item.title === "Clientes desactivados") {
          const disabledClients = clients.filter((item) => !item.active);
          return { ...item, value: disabledClients.length };
        }
        return item;
      });
    }, [clients]);
  
  
    useEffect(() => {
      if (data) {
        dispatch(setClients(data));
      }
    }, [data,dispatch]);



    return  {
        clients,
        isLoading,
        stats,
        open,
        handleClientInfoView,
        handleOpenModalDeteClientConfirm,
        handleDeleteClient,
        handleCancelDeleteClient
    }

}