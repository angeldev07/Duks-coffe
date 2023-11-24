import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { useGetAllClientsQuery } from "../services";
import { setClients, setSelectedClient } from "../slice/clients";
import { Client } from "../interfaces/clients";
import { useNavigate } from "react-router-dom";

export const useClients = () => { 

    const {clients} = useAppSelector((state) => state.clients);
    const dispatch = useAppDispatch();
    const navigate = useNavigate(); 
  
    const { data, isLoading } = useGetAllClientsQuery();

    const handleClientInfoView = (client: Client) => { 
        dispatch(setSelectedClient(client));
        navigate(`/backoffice/clients/${client.id}`);
    }
  
    useEffect(() => {
      if (data) {
        dispatch(setClients(data));
      }
    }, [data,dispatch]);



    return  {
        clients,
        isLoading,
        handleClientInfoView
    }

}