import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "../ProductsPage";
import { AddProduct } from "../pages/AddProduct";

export const ProductsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/:id" element={<h1> Info de la categoria </h1>} />
      <Route path="/:id/edit" element={<h1>Editar producto</h1>} />
      <Route path="/create" element={<AddProduct />} />
      <Route path="*" element={<ProductsPage />} />
    </Routes>
  );
};
