import {Navigate, Route, Routes} from "react-router-dom";
import {useAppSelector} from "../../store";
import { ClientsRoutes } from "../../clients/routes/ClientsRoutes";
import { CategoryRoutes } from "../../categories/routes/CategoryRoutes";

export const AdminRoutes = () => {
    const user = useAppSelector((state) => state.authentication.user);

    if (!user) {
        return <Navigate to="/auth/sign-in"/>;
    }

    return (
        <Routes>
            <Route path="products" element={<h1> Products page </h1>}/>
            <Route path="categories/*" element={<CategoryRoutes />}/>
            <Route path="review" element={<h1> Review page </h1>}/>
            <Route path="stock" element={<h1> Stock page </h1>}/>
            <Route path="clients/*" element={ <ClientsRoutes />}/>
            <Route path="orders" element={<h1> Orders page </h1>}/>
            <Route path="*" element={<Navigate to="products"/>}/>
        </Routes>
    );
};
