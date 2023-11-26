import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { IconButton, TablePagination } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
import { Client } from "../interfaces/clients";

interface Props {
  data: Client[];
  hanldeClientInfoView: (client: Client) => void; 
  handleClientEdit?: (client: Client) => void;
  handleClientDelete?: (client: Client) => void;
}

export default function BasicTable({ data, hanldeClientInfoView, handleClientDelete, handleClientEdit}: Props) {
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
            {data.map((client) => (
              <TableRow
                hover
                key={client.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 }, cursor: 'pointer' }}
              >
                <TableCell align="center">{client.id}</TableCell>
                <TableCell align="center">{client.name}</TableCell>
                <TableCell align="center">{client.lastName}</TableCell>
                <TableCell align="center">{client.email}</TableCell>
                <TableCell align="center">{client.cardId}</TableCell>
                <TableCell align="center">{client.gender}</TableCell>
                <TableCell align="center">{new Date(client.birthDay).toDateString()}</TableCell>
                <TableCell align="center">{client.active ? 'active': 'inactive'}</TableCell>
                <TableCell align="center">{new Date(client.lastVisit).toDateString()}</TableCell>
                <TableCell align="center">{client.address}</TableCell>
                <TableCell align="center">{client.phone}</TableCell>

                <TableCell align="center">
                  <IconButton onClick={() => hanldeClientInfoView(client)}>
                    <VisibilityIcon color="success" />
                  </IconButton>
                  <IconButton onClick={() => handleClientEdit(client)}>
                    <EditIcon color="success" />
                  </IconButton>
                  <IconButton onClick={() => handleClientDelete(client)}>
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
