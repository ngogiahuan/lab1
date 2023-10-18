import { Container, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";
import "./About.css";
import { ThemeContext } from "../ThemeContext";

export default function News() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <Container
      className="about-container"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      maxWidth="sx"
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="about-grid"
      >
        <h1>About</h1>
        <Grid item className="about-card">
          <Grid
            item
            container
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item className="card-item card-img">
              <Skeleton variant="circular" width={120} height={120} />
            </Grid>
            <Grid item direction="column" className="card-item">
              <Grid item>
                <Typography variant="subtitle1">Name: Ngo Gia Huan</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">ID: SE171018</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Email:{" "}
                  <a href="mailto: huangse171018@fptu.edu.vn ">
                    huangse171018@fptu.edu.vn
                  </a>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">Phone: 0911685725</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Github:{" "}
                  <a
                    href="https://github.com/ngogiahuan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ngogiahuan
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
