import { Box, Typography } from "@mui/material";
import { Container, PageHeader } from "../ui";
import ProductList from "../products/components/ProductsList";
import { Stast } from "./interfaces";
import { useGetStatsQuery } from "./service/review";

const titles = [
  "Productos sin categoria",
  "Productos con poco stock",
  "Productos desactivados",
];

const defaultData: Stast = {
  productsWithouCategoriesDTOList: [],
  productsLowStock: [],
  productsDeactivate: [],
};

const StatsCard = (stats:Stast) => {
  return (
    <>
      {Object.keys(stats).map((key, index) => (
        <Container key={key} title={titles[index]}>
          <Box component="main">
            {stats[key].length === 0 && (
              <Typography
                variant="subtitle1"
                component="p"
                textAlign={"center"}
                padding={2}
              >
                Ningun registro encontrado
              </Typography>
            )}
            {stats[key].length > 0 && (
              <ProductList data={stats[key]} showActions={false} />
            )}
          </Box>
        </Container>
      ))}
    </>
  );
};

export const ReviewsPage = () => {
  const { data } = useGetStatsQuery();

  return (
    <>
      <PageHeader>
        <Box
          component="header"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h4">Revision general</Typography>
        </Box>
      </PageHeader>
      { data ? <StatsCard {...data}  /> : <StatsCard {...defaultData}  />}
    </>
  );
};
