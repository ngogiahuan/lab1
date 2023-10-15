import { Grid, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeContext } from "../../ThemeContext";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#dc1a28",
    },
    secondary: {
      main: "#dc1a28",
    },
  },
});

export default function SearchBar({ handleChangeSearchQuery }) {
  const theme = useContext(ThemeContext);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const searchQuery = event.target.value;
      if (searchQuery === "") {
        handleChangeSearchQuery(null);
      } else {
        handleChangeSearchQuery(searchQuery);
      }
    }
  };

  return (
    <Grid container alignItems="center">
      <ThemeProvider theme={baseTheme}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          InputLabelProps={{ shrink: false }}
          placeholder="Search films..."
          style={{ width: "300px" }}
          onKeyDown={handleKeyDown}
          sx={{
            "& .MuiInputBase-root": {
              backgroundColor: theme.theme.textBackgroundColor,
              color: theme.theme.color,
            },
          }}
        />
      </ThemeProvider>
    </Grid>
  );
}
