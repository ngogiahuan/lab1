import React, { useContext } from "react";
import { Container, Grid, Typography, Paper } from "@mui/material";
import { ThemeContext } from "../ThemeContext";

export default function News() {
  const { theme } = useContext(ThemeContext);

  const styles = {
    container: {
      backgroundColor: theme.backgroundColor,
      color: theme.color,
      padding: "20px",
      minHeight: "100vh",
      minWidth: "100vw",
      paddingTop: "100px",
    },
    paper: {
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <Container style={styles.container}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Paper style={styles.paper}>
            <Typography variant="h3">News</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper style={styles.paper}>
            <Typography variant="body1">
              Stay up to date with the latest news from the world of cinema.
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper style={styles.paper}>
            <Typography variant="body1">
              Explore the hottest film releases, industry insights, and more.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
