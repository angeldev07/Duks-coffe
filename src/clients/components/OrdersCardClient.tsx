import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

interface Props {
  orders: string[];
}

const OrdersCardClient = ({ orders }: Props) => {
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
        <ShoppingBasketIcon />
        <Typography variant="subtitle1" sx={{ marginLeft: 2 }}>
            Ordenes del cliente
        </Typography>
      </Box>
      <Divider sx={{ flexGrow: 1 }} />
      <CardContent sx={{padding: '.5rem .5rem !important'}}>
        {orders.length === 0 && <p>No hay ordenes</p>}
        {orders.length > 0 && <p>Hay ordenes</p>}
      </CardContent>
    </Card>
  );
};

export default OrdersCardClient;
