import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { AlertDialog as Modal } from "../ui";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { Container, PageHeader } from "../ui";
import { actions } from "./const/actions";
import { useEffect, useState } from "react";
import { useGetAllCategoryQuery } from "./service";
import CategoryList from "./components/CategoryList";
import { useAppDispatch, useAppSelector } from "../store";
import { Category } from "./interface";
import { useModal } from "./hooks/useModal";

export const CategoryPage = () => {
  const { categories } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();
  const [select, setSelect] = useState("");
  const { data, isLoading } = useGetAllCategoryQuery();
  const { open, handleOpenModal, handleClose, handleAccept } = useModal();

  useEffect(() => {
    if (data) {
      dispatch({ type: "categories/setCategories", payload: data });
    }
  }, [data]);

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
  };

  return (
    <>
      <PageHeader>
        <Box
          component="header"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h4">Categorias</Typography>
          <Button
            variant="contained"
            startIcon={<GroupAddIcon />}
            sx={{ padding: ".5rem 1.3rem" }}
          >
            Registrar categoria
          </Button>
        </Box>
      </PageHeader>

      <Container title="Listado de categorias">
        <Box component={"section"} padding={2}>
          <FormControl
            sx={{ width: "180px", backgroundColor: "#dfe2e3", color: "#000" }}
          >
            <InputLabel id="demo-simple-select-label">
              Accion por lote
            </InputLabel>
            <Select
              value={select}
              onChange={handleChangeSelect}
              label="Acción por lote"
            >
              {actions.map((action) => (
                <MenuItem key={action} value={action}>
                  {action}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        {isLoading && <Typography>Cargando...</Typography>}
        {categories && (
          <CategoryList
            data={categories!}
            handleCategoryDelete={(category: Category) =>
              handleOpenModal(() =>
                dispatch({
                  type: "categories/setSelectedCategory",
                  payload: category,
                })
              )
            }
          />
        )}
      </Container>
      <Modal
        open={open}
        data={{
          title: "Eliminar categoria",
          content:
            "¿Estas seguro que deseas eliminar la categoria seleccionada?",
        }}
        handleAccept={() =>
          handleAccept(() => {
            dispatch({ type: "categories/deleteCategory" });
          })
        }
        handleClose={() =>
          handleClose(() =>
            dispatch({ type: "categories/setSelectedCategory", payload: null })
          )
        }
      ></Modal>
    </>
  );
};
