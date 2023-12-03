import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "../ProductsPage";

export const ProductsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/:id" element={<h1> Info de la categoria </h1>} />
      <Route path="/:id/edit" element={<h1>Editar producto</h1>} />
      <Route path="/create" element={<h1>Crear producto</h1>} />
      <Route path="*" element={<ProductsPage />} />
    </Routes>
  );
};
