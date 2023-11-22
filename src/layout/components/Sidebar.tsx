import { useTheme } from "@emotion/react";
import { Box, Drawer, useMediaQuery } from "@mui/material";

export const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const drawer = (
    <>
      <Box
        sx={{
          width: "268px",
          height: !matchUpMd ? "calc(100vh - 56px)" : "calc(100vh - 88px)",
        }}
      >
        Se supone que esto es el sidebar
      </Box>
    </>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;
  return (
    <Box component="aside">
      <Drawer
        container={container}
        variant={matchUpMd ? "persistent" : "temporary"}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            [theme.breakpoints.up("md")]: {
              top: "64px",
            },
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
