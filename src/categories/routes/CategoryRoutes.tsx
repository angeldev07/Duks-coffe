import { Route, Routes } from "react-router-dom";
import { CategoryPage } from "../CategoryPage";

export const CategoryRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CategoryPage />} />
      <Route path="/:id" element={<h1> Info de la categoria </h1>} />
      <Route path="/:id/edit" element={<h1>  Editar categoria </h1>} />
      <Route path="/create" element={<h1>Pagina para crear una categoria</h1>} />
      <Route path="*" element={<CategoryPage />} />
    </Routes>
  );
};
