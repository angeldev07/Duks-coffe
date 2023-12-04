import { Box, Typography } from "@mui/material";
import { Container, PageHeader } from "../../ui";
import AddProductForm from "../components/ProductForm";


export const AddProduct = () => {
    return (
        <>
          <PageHeader>
            <Typography variant="h5">
                Agregar una nuevo producto. 
            </Typography>
          </PageHeader>
    
          <Container title="Información del producto">
            <Box component="section" sx={{ padding: "1rem" }}>
                <AddProductForm />
            </Box>
          </Container>
        </>
      );
}