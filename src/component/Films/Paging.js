import React from "react";
import { Stack, Pagination, Box, TextField, Grid } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

export default function Paging({ totalPage, page, handleChange }) {
  const { theme } = React.useContext(ThemeContext);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const jumpToPage = parseInt(event.target.value);
      console.log(jumpToPage);
      if (!isNaN(jumpToPage) && jumpToPage >= 1 && jumpToPage <= totalPage) {
        handleChange(event, jumpToPage);
        event.target.value = "";
      } else {
        handleChange(event, page);
        //set value of textfield to current page
        event.target.value = "";
      }
    }
  };

  const pagingTheme = createTheme({
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
    <ThemeProvider theme={pagingTheme}>
      <Grid
        container
        spacing={2}
        style={{ marginTop: "20px" }}
        direction="column"
      >
        <Grid item container justifyContent="center">
          {" "}
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            onKeyDown={handleKeyDown}
            InputLabelProps={{ shrink: false }}
            placeholder="Jump to page..."
            style={{ width: "300px" }}
            sx={{
              "& .MuiInputBase-root": {
                backgroundColor: theme.textBackgroundColor,
                color: theme.color,
              },
            }}
          />
        </Grid>
        <Grid item container justifyContent="center">
          <Stack spacing={2}>
            <Pagination
              count={totalPage}
              page={page}
              onChange={handleChange}
              variant="outlined"
              shape="rounded"
              size="large"
              showFirstButton
              showLastButton
              sx={{
                "& .MuiPaginationItem-root": {
                  color: theme.color,
                  border: "none",
                },
                "& .MuiPaginationItem-page.Mui-selected": {
                  backgroundColor: theme.secondaryColor,
                  color: "white",
                },
                "& .MuiPaginationItem-page:hover": {
                  backgroundColor: theme.secondaryColor,
                  color: "white",
                },
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
