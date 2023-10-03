import React from "react";
import { filmsData } from "./ListOfFilms";
import "./Films.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import FilmModal from "./FilmModal/FilmModal";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Films() {
  const [selectedFilm, setSelectedFilm] = useState(null);

  const openPopUp = (film) => {
    setSelectedFilm(film);
  };

  const closePopUp = () => {
    setSelectedFilm(null);
  };

  const { theme } = useContext(ThemeContext);

  const handleButtonHover = (event) => {
    const cardImg = event.currentTarget
      .closest(".card-film")
      .querySelector(".card-img");
    cardImg.classList.add("hovered-card");
  };

  const handleButtonLeave = (event) => {
    const cardImg = event.currentTarget
      .closest(".card-film")
      .querySelector(".card-img");
    cardImg.classList.remove("hovered-card");
  };
  return (
    <div
      className="film-container d-flex flex-wrap"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      {filmsData.map((film) => (
        <Card
          className="card-film col-2"
          style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        >
          <Card.Img
            variant="top"
            src={film.image}
            style={{ height: "300px" }}
            alt={film.title}
            className="img-fluid card-img"
            onClick={() => openPopUp(film)}
            loading="lazy"
          />
          <div className="centered-button">
            <Link to={'/details/' + film.title}>
              <button
                className="btn btn-primary"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                Details
              </button>
            </Link>
          </div>
          <Card.Body
            className="card-body"
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
            }}
          >
            <Card.Title className="card-title">{film.title}</Card.Title>
            <Card.Text className="card-text">{film.year}</Card.Text>
          </Card.Body>
        </Card>
      ))}
      {
        <FilmModal
          film={selectedFilm}
          show={!!selectedFilm}
          onHide={closePopUp}
        ></FilmModal>
      }
    </div>
  );
}
