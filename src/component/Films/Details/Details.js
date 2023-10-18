import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { filmsData } from "../ListOfFilms";
import "./Details.css";
import { ThemeContext } from "../../ThemeContext";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material";
export default function Details() {
  const btnTheme = createTheme({
    palette: {
      primary: {
        main: "#f44336",
      },
    },
  });
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const film = filmsData.find((obj) => {
    return obj.id == id;
  });

  // State to control the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!film) {
    return (
      <div
        className="details-container-not-found"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <div className="details-header-not-found">
          <h1>
            <span>(Not Found)</span>
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div
      className="card-container"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <div
        className="details-container"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <div className="details-header">
          <h1>
            {film.title} <span>({film.year})</span>
          </h1>
          <Chip
            label={film.duration}
            style={{ color: theme.color, userSelect: "none" }}
          />
          <Chip
            label={film.releaseDate}
            style={{ color: theme.color, userSelect: "none", marginLeft: 8 }}
          />
        </div>
        <div className="details-body">
          <div className="details-img">
            <img src={film.image} alt={film.title} />
          </div>
          <div className="details-infor">
            <div className="detail-infor-content">
              <p>
                <span id="film-description">{film.description}</span>
              </p>
              <p>
                Nation: <span id="film-nation">{film.nation}</span>
              </p>
              <p>
                Director: <span id="film-directors">{film.directors}</span>
              </p>
              <p>
                Writer: <span id="film-writers">{film.writers}</span>
              </p>
              <p>
                Actors: <span id="film-actor">{film.actor}</span>
              </p>
              <p>
                Genre: <span id="film-genres">{film.genres}</span>
              </p>
              <p>
                Language: <span id="film-language">{film.language}</span>
              </p>
              <Rating
                name="half-rating-read"
                defaultValue={film.rating / 2}
                precision={0.25}
                readOnly
              />
            </div>
            <div className="trailer-btn-container">
              <ThemeProvider theme={btnTheme}>
                <Button
                  variant="outlined"
                  className="button"
                  onClick={openModal}
                >
                  Trailer
                </Button>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="youtube-video-modal"
        aria-describedby="embed-youtube-video"
        className="center-modal"
      >
        <div className="youtube-video">
          <iframe
            width="560"
            height="315"
            src={film.trailer}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
}
