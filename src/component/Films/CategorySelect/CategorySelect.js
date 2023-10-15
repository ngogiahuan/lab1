import React, { useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ThemeContext } from "../../ThemeContext";
import "./CategorySelect.css";

export default function CategorySelect({ category, handleChangeCategory }) {
  const theme = useContext(ThemeContext);

  const selectTheme = createTheme({
    components: {
      MuiSelect: {
        styleOverrides: {
          root: {
            backgroundColor: theme.theme.backgroundColor,
            color: theme.theme.color,
            border: `1px solid ${theme.theme.secondaryColor}`,
          },
          icon: {
            color: theme.theme.secondaryColor,
          },
          // Add hover styles here
          // Change borderColor when hovering
          "&:hover": {
            borderColor: theme.theme.secondaryColor,
          },
          // Change color when selected
          "&.Mui-focused": {
            backgroundColor: theme.theme.backgroundColor,
            color: theme.theme.color,
            border: `1px solid ${theme.theme.secondaryColor}`,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={selectTheme}>
      <Select
        value={category}
        onChange={handleChangeCategory}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        size="small"
      >
        <MenuItem value="now_playing">Now Playing</MenuItem>
        <MenuItem value="popular">Popular</MenuItem>
        <MenuItem value="top_rated">Top Rated</MenuItem>
        <MenuItem value="upcoming">Upcoming</MenuItem>
        <MenuItem value="trending">Trending of Week</MenuItem>
      </Select>
    </ThemeProvider>
  );
}
