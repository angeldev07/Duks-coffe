import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { useGetAllClientsQuery } from "../services";
import { setClients, setSelectedClient } from "../slice/clients";
import { Client } from "../interfaces/clients";
import { useNavigate } from "react-router-dom";
import { cardsInfo } from "../const";
export const useClients = () => { 

    const {clients} = useAppSelector((state) => state.clients);
    const dispatch = useAppDispatch();
    const navigate = useNavigate(); 
  
    const { data, isLoading } = useGetAllClientsQuery();

    const handleClientInfoView = (client: Client) => { 
        dispatch(setSelectedClient(client));
        navigate(`/backoffice/clients/${client.id}`);
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
        handleClientInfoView
    }

}