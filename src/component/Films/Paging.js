import React from "react";
import { Stack, Pagination, Box, TextField, Grid } from "@mui/material";

export default function Paging({ totalPage, page, handleChange }) {
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
  return (
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
          label="Jump to"
          variant="outlined"
          size="small"
          style={{ width: "150px" }}
          onKeyDown={handleKeyDown}
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
          />
        </Stack>
      </Grid>
    </Grid>
  );
}
