import { Box, Card, CardContent, Typography } from "@mui/material";
import { CardInfo } from "../const";

interface Props {
  item: CardInfo;
}

export const InfoCard = ({ item }: Props) => {
  return (
    <Card sx={{ minWidth: 275, borderTop: 2, borderColor: "#000 " }} component='article'>
      <CardContent>
        <Box sx={{ display: "flex", gap: 4 }}>
          {item.icon}
          <div>
            <Typography variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography  color="text.secondary">
              {item.subtitle}
            </Typography>
            <Typography variant="h5">{item.value}</Typography>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};
