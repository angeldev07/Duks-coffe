import { Route, Routes } from "react-router-dom";
import { CategoryPage } from "../CategoryPage";
import { AddCategoryPage } from "../pages/AddCategory";

export const CategoryRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CategoryPage />} />
      <Route path="/:id" element={<h1> Info de la categoria </h1>} />
      <Route path="/:id/edit" element={<AddCategoryPage />} />
      <Route path="/create" element={<AddCategoryPage />} />
      <Route path="*" element={<CategoryPage />} />
    </Routes>
  );
};
