import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import LogoutIcon from "@mui/icons-material/Logout";

export const Navbar = ({handleOpenUserMenu, anchorElUser, handleCloseUserMenu, handleOpenSidebar }) => {
  return (
    <>
      <Box component="div" display="flex" mr={2} alignItems="center">
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Duk's coffee
        </Typography>
      </Box>
      <Box component="div" display="flex" alignItems="center" width="100%">
        <IconButton
          onClick={handleOpenSidebar}
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Box component="div" ml="auto">
          <Tooltip title="Open settings">
            <Box component="div" display="flex" alignItems="center">
              <Typography
                variant="subtitle1"
                sx={{ display: { xs: "flex" }, mr: 2 }}
              >
                Angel Garcia
              </Typography>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Angel" src="/static/images/avatar/3.jpg" />
              </IconButton>
            </Box>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography
                textAlign="center"
                sx={{ display: "flex", alignItems: "center" }}
              >
                logout
                <LogoutIcon sx={{ ml: 2 }} />
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </>
  );
};
