import { Chip, List, ListItem } from "@mui/material";
import { Category } from "../interface";

interface Props {
  category: Category;
}

export const CategoryViewInfo = ({ category }: Props) => {
  return (
    <List>
      <ListItem>
        <strong>Nombre: </strong> {"       "} {category.name}
      </ListItem>
      <ListItem>
        <strong>Estado: </strong>{"       "}
        <Chip
          label={`${category.active ? "Activado" : "Inactivo"}`}
          sx={{ backgroundColor: category.active ? "#386641" : "#e63946", color: "#fff" }}
        />
      </ListItem>
    </List>
  );
};
