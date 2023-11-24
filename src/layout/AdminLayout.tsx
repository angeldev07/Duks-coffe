import { AppBar, Box, Toolbar } from "@mui/material";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { useAppSelector } from "../store";

export const AdminLayout = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(true);
  const user = useAppSelector((state) => state.authentication.user);

  if (!user) return <Navigate to="/auth" />;

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
            user={user!}
          />
        </Toolbar>
      </AppBar>

      {/* sidebar */}
      <Sidebar
        drawerOpen={mobileOpen}
        drawerToggle={handleDrawerToggle}
        user={user!}
      />

      {/* main content */}
      <Box
        component="main"
        flexGrow={1}
        p={2}
        sx={{
          marginLeft: {
            md: mobileOpen ? "268px" : " 0",
            transition: "margin 0.2s ease-in-out",
            width: { md: "calc(100% - 268px)", xs: "100%"},
            height: "calc(100vh - 64px)",
            overflowY: "scroll",
          },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
