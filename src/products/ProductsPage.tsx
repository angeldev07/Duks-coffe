import { Box, Button, Typography } from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { PageHeader, Container } from "../ui";
import { useNavigate } from "react-router-dom";

export const ProductsPage = () => {
  const navigate = useNavigate();

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
            onClick={() => navigate("/backoffice/categories/create")}
          >
            Registrar producto
          </Button>
        </Box>
      </PageHeader>

      <Container title="Listado de productos">
        <Box
          component="main"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1rem",
          }}
        >
        </Box>
      </Container>

    </>
  );
};
