import { Box, Typography } from "@mui/material";
import { Container, PageHeader } from "../../ui";
import { AddCategoryForm } from "../components/AddCategoryForm";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store";

type option = "create" | "edit";

export const AddCategoryPage = () => {

  const location:option  = useLocation().pathname.split("/").pop()! as option;
  const selectedCategory = useAppSelector(state => state.categories.selectedCategory)

  if(location === 'edit' && !selectedCategory) return (<Navigate to="/backoffice/categories" />)

  return (
    <>
      <PageHeader>
        <Typography variant="h5">
            {location === 'create' ? ' Agregar una nueva categoria.' : 'Editando la categoria seleccionada.' }
        </Typography>
      </PageHeader>

      <Container title="Información de la categoria">
        <Box component="section" sx={{ padding: "1rem" }}>
          <AddCategoryForm category={selectedCategory}  />
        </Box>
      </Container>
    </>
  );
};
