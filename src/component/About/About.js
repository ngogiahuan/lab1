<<<<<<< HEAD
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
=======
import { Container, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";
import "./About.css";

export default function News() {
  return (
    <Container className="about-container" maxWidth="sx">
>>>>>>> 694b544926cba916cf508ff0ceab4e2a00dfc28a
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Paper style={styles.paper}>
            <Typography variant="h3">About</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper style={styles.paper}>
            <Typography variant="body1">
              Welcome to our digital storytelling world. Our News component is a
              gateway to a realm of intrigue and narratives.
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper style={styles.paper}>
            <Typography variant="body1">
              Dive into the magic of cinema, explore the latest film stories,
              and immerse yourself in the world of movie-making.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
