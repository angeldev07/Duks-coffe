import { Route, Routes } from "react-router-dom";
import { ClientsPage } from "../ClientsPage";
import { ClientInfoPage } from "../pages/ClientInfoPage";
import { EditClientPage } from "../pages/EditClientPage";


export const ClientsRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<ClientsPage />}/>
        <Route path="/:id" element={<ClientInfoPage />}/>
        <Route path="/:id/edit" element={<EditClientPage isEditing={true}/>}/>
        <Route path="/create" element={<EditClientPage isEditing={false} />}/>
        <Route path="*" element={<ClientsPage />}/>
    </Routes>
  );
};
