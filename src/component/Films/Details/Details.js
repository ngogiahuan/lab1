import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { filmsData } from "../ListOfFilms";
import "./Details.css";
import { ThemeContext } from "../../ThemeContext";
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';

export default function Details() {
    const { theme } = useContext(ThemeContext);
    const { title } = useParams();
    const film = filmsData.find((obj) => {
        return obj.title == title;
    });
    const backgroundImage = `url(${film.image})`;

    if (!film) {
        return <div className="details-container">Film not found</div>;
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
                    <Chip label={film.duration} style={{ color: theme.color, userSelect: 'none' }} />
                    <Chip label={film.releaseDate} style={{ color: theme.color, userSelect: 'none' }} />
                </div>
                <div className="details-body">
                    <div className="details-img">
                        <img src={film.image} alt={film.title} />
                    </div>
                    <div className="details-infor">
                        <div className="detail-infor-content">
                            <p><span id="film-description">{film.description}</span></p>
                            <p>Nation: <span id="film-nation">{film.nation}</span></p>
                            <p>Director: <span id="film-directors">{film.directors}</span></p>
                            <p>Writer: <span id="film-writers">{film.writers}</span></p>
                            <p>Actors: <span id="film-actor">{film.actor}</span></p>
                            <p>Genre: <span id="film-genres">{film.genres}</span></p>
                            <p>Language: <span id="film-language">{film.language}</span></p>
                            <Rating name="half-rating-read" defaultValue={film.rating / 2} precision={0.25} readOnly />
                        </div>
                        <div className="trailer-btn-container">
                            <a className="button" href={film.trailer} target="_blank">
                                <div class="svg-wrapper-1">
                                    <div class="svg-wrapper">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                                <span>Watch Trailer</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
