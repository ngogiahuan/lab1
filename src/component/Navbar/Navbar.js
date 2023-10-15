import React, { useContext } from "react";
import { AppBar, Toolbar, Switch, Grid } from "@mui/material";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

function NavbarComponent() {
  const { theme, toggle } = useContext(ThemeContext);

  console.log(theme);

  return (
    <AppBar
      position="static"
      className="navbar"
      style={{
        boxShadow: "none",
        position: "fixed",
        backgroundColor: theme.backgroundColor,
      }}
    >
      <Toolbar className="toolbar">
        <ul className="nav-ul">
          <li>
            <Link to="/home" style={{ color: theme.color }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/news" style={{ color: theme.color }}>
              News
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ color: theme.color }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ color: theme.color }}>
              Contact
            </Link>
          </li>
        </ul>

        <img
          src="https://image.tmdb.org/t/p/original/tyHnxjQJLH6h4iDQKhN5iqebWmX.png"
          alt="netflix"
          style={{
            width: "100px",
            height: "auto",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        <Grid container alignItems="center" style={{ width: "auto" }}>
          <Grid item></Grid>
          <Grid item>
            <div className="button-container">
              <Switch color="default" onChange={toggle} />
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavbarComponent;
