import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Container,
  Grid,
} from "@mui/material";
import "../Films.css";
import { ThemeContext } from "../../ThemeContext";
import { useEffect } from "react";

export default function FilmCard({ film }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Grid item>
      <Card
        sx={{
          width: 200,
          height: 400,
          backgroundColor: theme.backgroundColor,
          color: theme.color,
        }}
        className="button-container-2"
        elevation={0}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={film.original_title}
            lazy="true"
          />
        </CardActionArea>
        <CardContent
          sx={{
            height: 100,
          }}
        >
          <Typography gutterBottom component="div">
            {film.original_title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
