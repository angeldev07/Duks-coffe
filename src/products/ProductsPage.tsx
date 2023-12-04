import { Box, Button, CircularProgress, Typography } from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { PageHeader, Container, AlertDialog as Modal } from "../ui";
import { useNavigate } from "react-router-dom";
import { useProducts } from "./hooks/useProducts";
import ProductList from "./components/ProductsList";

export const ProductsPage = () => {
  const navigate = useNavigate();
  const {
    products,
    isLoading,
    openDelete,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
    handleDeleteConfirm
  } = useProducts();

  return (
    <>
      <PageHeader>
        <Box
          component="header"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h4">Productos</Typography>
          <Button
            variant="contained"
            startIcon={<GroupAddIcon />}
            sx={{ padding: ".5rem 1.3rem" }}
            onClick={() => navigate("/backoffice/products/create")}
          >
            Registrar producto
          </Button>
        </Box>
      </PageHeader>

      <Container title="Listado de productos">
        <Box component="main" padding={2}>
          {isLoading && <CircularProgress />}
          {!isLoading && products && (
            <ProductList data={products} showActions handleProductDelete={handleOpenDeleteModal}/>
          )}
        </Box>
      </Container>

      {/* Modales */}
      <>
        <Modal
          open={openDelete}
          handleClose={handleCloseDeleteModal}
          handleAccept={handleDeleteConfirm}
          data={{
            title: "¿Esta seguro que deseas eliminar el producto seleccionado?",
            content: "Esta acción no se puede deshacer.",
          }}
        />
      </>
    </>
  );
};
