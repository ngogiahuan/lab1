import React from "react";
import { filmsData } from "./ListOfFilms";
import { useState } from "react";
import FilmModal from "./FilmModal/FilmModal";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';
import "./Films.css"

export default function Films() {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPopUp = (film) => {
    setSelectedFilm(film);
    setIsModalOpen(true);
  };

  const closePopUp = () => {
    setSelectedFilm(null);
    setIsModalOpen(false);
  };

  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="film-container"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <Container>
        <Grid container spacing={2}>
          {filmsData.map((film) => (
            <Grid item>
              <Card sx={{ width: 200, height: 400 }} className="button-container-2">
                <CardActionArea onClick={() => openPopUp(film)}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={film.image}
                    alt={film.title}
                  />
                  <CardContent sx={{ backgroundColor: theme.backgroundColor, color: theme.color, height: 100 }} >
                    <Typography gutterBottom component="div" >
                      {film.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to={'/details/' + film.title}>
                    <Button size="small" color="primary" className="details-btn">
                      Details
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {selectedFilm && (
        <FilmModal
          film={selectedFilm}
          open={isModalOpen}
          handleClose={closePopUp}
          theme={theme}
        />
      )}
    </div>
  );
}