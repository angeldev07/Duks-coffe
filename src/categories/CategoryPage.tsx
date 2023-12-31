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
import { useDeleteCategoryMutation, useGetAllCategoryQuery } from "./service";
import CategoryList from "./components/CategoryList";
import { useAppDispatch, useAppSelector } from "../store";
import { Category } from "./interface";
import { useModal } from "./hooks/useModal";
import { CategoryViewInfo } from "./components/CategoryViewInfo";
import { useNavigate } from "react-router-dom";

export const CategoryPage = () => {
  const { categories, selectedCategory } = useAppSelector(
    (state) => state.categories
  );
  const { data, isLoading } = useGetAllCategoryQuery();
  const [deleteCategory] = useDeleteCategoryMutation();
  const { open, handleOpenModal, handleClose, handleAccept } = useModal();
  const categoryView = useModal();
  const deleteConfirm = useModal();
  const dispatch = useAppDispatch();
  const [select, setSelect] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (categories) return;

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
            onClick={() => navigate("/backoffice/categories/create")}
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
        {categories && categories.length > 0 && (
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
            handleCategoryInfoView={(category: Category) =>
              categoryView.handleOpenModal(() =>
                dispatch({
                  type: "categories/setSelectedCategory",
                  payload: category,
                })
              )
            }
            handleCategoryEdit={(category: Category) => {
              dispatch({
                type: "categories/setSelectedCategory",
                payload: category,
              });
              navigate(`/backoffice/categories/${category.id}/edit`);
            }}
          />
        )}
        {categories && categories.length === 0 && (
          <Typography>No hay categorias registradas</Typography>
        )}
      </Container>

      {/* modales */}
      <>
        <Modal
          open={open}
          data={{
            title: "Eliminar categoria",
            content:
              "¿Estas seguro que deseas eliminar la categoria seleccionada?",
          }}
          handleAccept={() =>
            handleAccept(() => {
              deleteCategory(selectedCategory!.id!)
                .unwrap()
                .then(() => {
                  dispatch({
                    type: "categories/deleteCategory",
                    payload: null,
                  });
                  deleteConfirm.handleOpenModal(() => {});
                });
            })
          }
          handleClose={() => handleClose()}
        />
        <Modal
          open={categoryView.open}
          handleClose={() =>
            categoryView.handleClose(() => {
              dispatch({
                type: "categories/setSelectedCategory",
                payload: null,
              });
            })
          }
          data={{
            title: "Ver categoria",
            component: <CategoryViewInfo category={{ ...selectedCategory! }} />,
          }}
          handleAccept={() =>
            categoryView.handleClose(() => {
              dispatch({
                type: "categories/setSelectedCategory",
                payload: null,
              });
            })
          }
        />
        <Modal
          open={deleteConfirm.open}
          handleClose={() => deleteConfirm.handleClose()}
          data={{
            title: "Categoria eliminada",
            content: "Se ha eliminado satisfactoriamente la categoria",
          }}
          handleAccept={() => deleteConfirm.handleClose()}
        />
      </>
    </>
  );
};
