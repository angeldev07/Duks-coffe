import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Client } from "../interfaces/clients";
import PersonIcon from "@mui/icons-material/Person";


interface Props {
  client: Client;
}

const ClientCard = ({ client }: Props) => {
  return (
    <Card sx={{ width: "100%" }} component="article" variant="outlined">
      <Box
        component="header"
        display="flex"
        alignItems="center"
        sx={{
          backgroundColor: "#fafbfc",
          padding: ".5rem",
          width: "100%",
        }}
      >
        <PersonIcon />
        <Typography variant="subtitle1" sx={{ marginLeft: 2 }}>
          {`${client?.name} ${client?.lastName} [${client?.id}]`} -{" "}
          {client?.email}
        </Typography>
      </Box>
      <Divider sx={{ flexGrow: 1 }} />
      <CardContent>
        <Grid container spacing={4}>
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            {Object.keys(client).map((key) => (
              <p key={key}> {key} </p>
            ))}
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            {Object.values(client).map((key) => (
              <p key={key}> {key} </p>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ClientCard;
