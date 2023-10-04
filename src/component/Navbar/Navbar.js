import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  InputBase,
  alpha,
  styled,
  Switch,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeContext } from "../ThemeContext";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function NavbarComponent() {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <AppBar
      position="static"
      className="navbar"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <Toolbar className="toolbar">
        <ul className="nav-ul">
          <li>
            <Link to="/" style={{ color: theme.color }}>
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

        <Grid container alignItems="center" style={{ width: "auto" }}>
          <Grid item>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Grid>
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
