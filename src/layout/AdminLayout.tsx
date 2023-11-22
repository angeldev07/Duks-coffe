import { AppBar, Box, Toolbar } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

export const AdminLayout = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box>
      <AppBar
        enableColorOnDark
        position="static"
        component="nav"
        sx={{
          bgcolor: "#363A41",
          padding: { xs: ".3rem 1rem ", md: "0 2rem" },
        }}
      >
        <Toolbar disableGutters>
          <Navbar
            handleOpenUserMenu={handleOpenUserMenu}
            anchorElUser={anchorElUser}
            handleCloseUserMenu={handleCloseUserMenu}
            handleOpenSidebar={handleDrawerToggle}
          />
        </Toolbar>
      </AppBar>

      {/* sidebar */}
      <Sidebar
        drawerOpen={mobileOpen}
        drawerToggle={handleDrawerToggle}
        window={undefined}
      />

      <Box component="main" flexGrow={1} p={2}  sx={{ transform: { md : mobileOpen ? 'translateX(268px)' :  ' translateX(0)', transition: 'transform 0.3s ease-in-out', width: 'calc(100% - 268px)'} }}>
        <Outlet />
      </Box>
    </Box>
  );
};
