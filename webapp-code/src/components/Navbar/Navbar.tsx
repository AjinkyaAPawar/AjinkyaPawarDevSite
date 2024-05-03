import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/AP_Symbol.jpeg"
import "./Navbar.css"; // Import external CSS file

const Navbar: React.FC = () => {
  return (
    <>
      <AppBar position="static" className="navbar">
        <Toolbar>
          <img src={logo} alt="Logo" className="logo" />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            className="navbar-brand"
          >
            My Website
          </Typography>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Button
                variant="text"
                component={Link}
                to="/"
                className="nav-link"
              >
                Home
              </Button>
            </li>
            <li className="nav-item">
              <Button
                variant="text"
                component={Link}
                to="/about"
                className="nav-link"
              >
                About
              </Button>
            </li>
            <li className="nav-item">
              <Button
                variant="text"
                component={Link}
                to="/blogs"
                className="nav-link"
              >
                Blogs
              </Button>
            </li>
            <li className="nav-item">
              <Button
                variant="text"
                component={Link}
                to="/contact"
                className="nav-link"
              >
                Contact
              </Button>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navbar;
