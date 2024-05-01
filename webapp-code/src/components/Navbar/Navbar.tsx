// Navbar.tsx
import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
// import logo from './logo.png'; // Your logo image

const Navbar: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* <img src={logo} alt="Logo" style={{ marginRight: '10px', width: '50px', height: '50px' }} /> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/blogs">
            Blogs
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navbar;
