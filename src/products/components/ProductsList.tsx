import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";

import { IconButton, TablePagination } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import { Product } from "../interface";

interface Props {
  data: Product[];
  showActions?: boolean;
  handleProductInfoView?: (product: Product) => void;
  handleProductEdit?: (product: Product) => void;
  handleProductDelete?: (product: Product) => () => void;
}

export default function BasicTable({
  data,
  showActions,
  handleProductInfoView,
  handleProductDelete,
  handleProductEdit,
}: Props) {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {Object.keys(data[0]).map((key, index) => (
                <TableCell key={key + index} align="center">
                  {key}
                </TableCell>
              ))}
              {showActions && <TableCell align="center">Acciones</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((product, index) => (
              <TableRow
                hover
                key={product.amount + product.id + index + product.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                }}
              >
                <TableCell align="center">
                  {product.profileImg ? (<img src={product.profileImg} width={70} height={70} />) : "Sin imagen" }
                </TableCell>
                <TableCell align="center">{product.id}</TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">{product.basePrice}</TableCell>
                <TableCell align="center">{product.amount}</TableCell>
                <TableCell align="center">
                  <Chip
                    label={product.active ? "Active" : "Inactive"}
                    color={product.active ? "success" : "error"}
                  />
                </TableCell>
                <TableCell align="center">
                  {product.category ? product.category.name : "Sin categoria"}
                </TableCell>
                {showActions && (
                  <TableCell align="center">
                    <IconButton onClick={() => handleProductInfoView(product)}>
                      <VisibilityIcon color="success" />
                    </IconButton>
                    <IconButton onClick={() => handleProductEdit(product)}>
                      <EditIcon color="success" />
                    </IconButton>
                    <IconButton onClick={handleProductDelete(product)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
