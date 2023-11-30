import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { Client } from "../interfaces/clients";
import { useState } from "react";

interface Props {
  client: Client;
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
  isEditing: boolean;
}

export default function ClientForm({ client, submit, isEditing }: Props) {
  const [gender, setGender] = useState(client.gender || "");

  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setGender(event.target.value);
  };

  return (
    <form onSubmit={submit}>
      <Typography variant="h5" gutterBottom>
        Datos del Cliente
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Nombre"
            name="name"
            fullWidth
            defaultValue={client.name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Apellido"
            name="lastName"
            fullWidth
            defaultValue={client.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="DNI"
            name="cardId"
            fullWidth
            disabled={isEditing}
            defaultValue={client.cardId}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            name="email"
            fullWidth
            defaultValue={client.email}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Género</InputLabel>
            <Select
              label="Género"
              name="gender"
              value={gender}
              onChange={handleGenderChange}
            >
              <MenuItem value="M" >Masculino</MenuItem>
              <MenuItem value="F">Femenino</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Dirección"
            name="address"
            multiline
            rows={4}
            fullWidth
            defaultValue={client.address}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Teléfono"
            name="phone"
            fullWidth
            defaultValue={client.phone}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox defaultChecked={client.active} />}
            label="Activo"
            name="active"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Guardar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
