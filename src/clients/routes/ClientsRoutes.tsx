import { Route, Routes } from "react-router-dom";
import { ClientsPage } from "../ClientsPage";
import { ClientInfoPage } from "../pages/ClientInfoPage";
import { EditClientPage } from "../pages/EditClientPage";


export const ClientsRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<ClientsPage />}/>
        <Route path="/:id" element={<ClientInfoPage />}/>
        <Route path="/:id/edit" element={<EditClientPage />}/>
        <Route path="/create" element={<h1>Pagina para crear un cliente</h1>}/>
        <Route path="*" element={<ClientsPage />}/>
    </Routes>
  );
};
