import {Navigate, Route, Routes} from "react-router-dom";
import {useAppSelector} from "../../store";
import { ClientsRoutes } from "../../clients/routes/ClientsRoutes";
import { CategoryRoutes } from "../../categories/routes/CategoryRoutes";
import { ProductsRoutes } from "../../products/routes";
import { ReviewsPage } from "../../reviews/ReviewsPage";

export const AdminRoutes = () => {
    const user = useAppSelector((state) => state.authentication.user);

    if (!user) {
        return <Navigate to="/auth/sign-in"/>;
    }

    return (
        <Routes>
            <Route path="products/*" element={<ProductsRoutes />}/>
            <Route path="categories/*" element={<CategoryRoutes />}/>
            <Route path="review" element={<ReviewsPage />}/>
            <Route path="stock" element={<h1> Stock page </h1>}/>
            <Route path="clients/*" element={ <ClientsRoutes />}/>
            <Route path="orders" element={<h1> Orders page </h1>}/>
            <Route path="*" element={<Navigate to="products"/>}/>
        </Routes>
    );
};
