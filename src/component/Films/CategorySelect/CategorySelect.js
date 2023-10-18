import React, { useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ThemeContext } from "../../ThemeContext";
import "./CategorySelect.css";

export default function CategorySelect({ category, handleChangeCategory }) {
  const theme = useContext(ThemeContext);

  const selectTheme = createTheme({
    palette: {
      primary: {
        main: "#dc1a28",
      },
      secondary: {
        main: "#dc1a28",
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
        style={{ width: "150px" }}
        sx={{
          "& .MuiSelect-select": {
            color: theme.theme.color,
            backgroundColor: `${theme.theme.textBackgroundColor} !important`,
          },
          "& .MuiSelect-icon": {
            color: theme.theme.color,
          },
          "& .MuiPaper-root": {
            backgroundColor: theme.theme.textBackgroundColor,
            color: theme.theme.color,
          },
        }}
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
