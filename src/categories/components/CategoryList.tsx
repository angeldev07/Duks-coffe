import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Chip from '@mui/material/Chip';

import { IconButton, TablePagination } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
import {  Category } from "../interface";


interface Props {
  data: Category[];
  handleCategoryInfoView?: (category: Category) => void; 
  handleCategoryEdit?: (category: Category) => void;
  handleCategoryDelete?: (category: Category) => void;
}

export default function BasicTable({ data, handleCategoryInfoView, handleCategoryDelete, handleCategoryEdit}: Props) {
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
              {Object.keys(data[0]).map((key) => (
                <TableCell key={key} align="center">
                  {key}
                </TableCell>
              ))}
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((category) => (
              <TableRow
                hover
                key={category.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 }, cursor: 'pointer' }}
              >
                <TableCell align="center">{category.id}</TableCell>
                <TableCell align="center">{category.name}</TableCell>
                <TableCell align="center">
                    <Chip label={category.active ? 'Active': 'Inactive'} color={category.active ? 'success' : 'error'} />
                </TableCell> 

                <TableCell align="center">
                  <IconButton onClick={() => handleCategoryInfoView(category)}>
                    <VisibilityIcon color="success" />
                  </IconButton>
                  <IconButton onClick={() => handleCategoryEdit(category)}>
                    <EditIcon color="success" />
                  </IconButton>
                  <IconButton onClick={() => handleCategoryDelete(category)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
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
