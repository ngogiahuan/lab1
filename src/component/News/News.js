import { Container, Grid } from "@mui/material";
import React from "react";
import "./News.css";

export default function News() {
  return (
    <Container className="news-container" maxWidth="sx">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="news-grid"
      >
        <Grid item>
          <h1>News</h1>
        </Grid>
      </Grid>
    </Container>
  );
}
