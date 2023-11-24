import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
  colorBorder?: string;
  children: React.ReactNode;
}

export const Container = ({ title, children, colorBorder }: Props) => {
  return (
    <Box
      component="section"
      sx={{
        marginTop: "1rem",
        borderTop: 2,
        borderColor: colorBorder ?? "#000",
        borderRadius: "4px",
        boxShadow: "0 0 5px rgba(0,0,0,.5)",
      }}
    >
      <Box
        component="header"
        sx={{
            borderBottom: 1,
            borderColor: colorBorder ?? "#000",
            padding: ".5rem 1rem",
        }}
      >
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
      </Box>

      {children}
    </Box>
  );
};
