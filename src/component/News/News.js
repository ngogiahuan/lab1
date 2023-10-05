import { Container, Grid } from "@mui/material";
import React from "react";
import "./News.css";
import { ThemeContext } from "../ThemeContext";

export default function News() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <Container
      className="news-container"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      maxWidth="sx"
    >
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
