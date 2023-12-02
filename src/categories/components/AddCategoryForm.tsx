import {
  Button,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
} from "@mui/material";
import { AlertDialog as Modal } from "../../ui";
import { useNavigate } from "react-router-dom";
import { Category } from "../interface";
import { option, useAddAndEditCategory } from "../hooks/useAddAndEditCategory";
import { useMemo } from "react";

interface Props {
  category: Category | null;
}

export const AddCategoryForm = ({ category }: Props) => {
  const navigate = useNavigate();
  const { onSubmit, error, handleAccept, handleClose, open } =
    useAddAndEditCategory(category ? "edit" : "create");
  
  const currentOption:option  = useMemo(() => {
    return category ? 'edit' : 'create'
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
  
    if(currentOption === 'edit') data.append('id', `${category!.id}`)

    onSubmit(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Nombre" name="name" fullWidth error={error} defaultValue={category?.name ?? ''}/>
            {error && <p style={{ color: "red" }}>El nombre es requerido</p>}
          </Grid>
          <Grid item xs={12} paddingLeft={3}>
            <FormControlLabel
              control={<Switch defaultChecked={category?.active} name="activate" />}
              label="Activado"
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Guardar
          </Button>
        </Grid>
      </form>
      <Modal
        open={open}
        data={{
          title: currentOption == 'create' ?  "Categoria agregada exitosamente" : "Categoria editada exitosamente",
          content: currentOption == 'create' ? "Ha registrado una nueva categoria." : "Ha editado la categoria seleccionada.",
        }}
        handleClose={() =>
          handleClose(() =>
            navigate("/backoffice/categories", { replace: true })
          )
        }
        handleAccept={() =>
          handleAccept(() =>
            navigate("/backoffice/categories", { replace: true })
          )
        }
      />
    </>
  );
};
