import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { filmsData } from "../ListOfFilms";
import "./Details.css";
import { ThemeContext } from "../../ThemeContext";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import Modal from "@mui/material/Modal";

export default function Details() {
  const { theme } = useContext(ThemeContext);
  const { title } = useParams();
  const film = filmsData.find((obj) => {
    return obj.title == title;
  });
  const backgroundImage = film ? `url(${film.image})` : null;

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
            {title} <span>(Not Found)</span>
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div className="card-container">
      <div
        className="bg-img"
        style={{ backgroundImage: backgroundImage }}
      ></div>
      <div className="bg-black"></div>
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
              <button className="button" onClick={openModal}>
                <div class="svg-wrapper-1">
                  <div class="svg-wrapper">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Watch Trailer</span>
              </button>
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
