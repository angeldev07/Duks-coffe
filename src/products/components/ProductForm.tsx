import {
  TextField,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Button,

} from "@mui/material";
import { useProductForm } from "../hooks/useProductForm";

function AddProductForm() {
  const {category, data,nameError, priceError, onChange, onSubmit } = useProductForm();
  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField fullWidth label="Nombre del Producto" error={nameError} name="name" />
          {nameError && <p>El nombre es requerido</p>}
        </Grid>

        <Grid item xs={12}>
          <input type="file" accept="image/*" name="profileImg" />
        </Grid>

        <Grid item xs={12}>
          <TextField
            type="number"
            fullWidth
            label="Precio"
            error={priceError}
            name="price"
          />
          {priceError && <p>El precio es requerido</p>}
        </Grid>

        <Grid item xs={12}>
          <Switch defaultChecked name="active"/>
          Activo
        </Grid>

        <Grid item xs={12}>
          <Switch defaultChecked name="sell"/>
          En Venta
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Categoría</InputLabel>
            <Select
              label="Categoria"
              value={category?.name || ""}
              onChange={onChange}
            >
              {data &&
                data!.map((category) => (
                  <MenuItem key={category.id} value={category.name}>
                    {category.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={12} marginTop={2}>
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Guardar
        </Button>
      </Grid>
    </form>
  );
}

export default AddProductForm;
