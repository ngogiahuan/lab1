import { Box, Button, Chip, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import { useFilmDetail } from "../../../api/tmdbAPI";
import { Image } from "@mui/icons-material";
import TrailerButton from "./TrailerButton";

export default function SwiperFilmDetail({ filmID }) {
  const { filmDetails } = useFilmDetail(filmID);

  const filmsDetailsYear = filmDetails.release_date
    ? filmDetails.release_date.split("-")[0]
    : "";

  return (
    <div>
      <Box
        sx={{
          width: "100vw",
          height: "700px",
          backgroundImage: `url(https://image.tmdb.org/t/p/original${filmDetails.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div
          className="black-filter"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: "1",
          }}
        ></div>
        <Grid
          container
          style={{
            width: "100%",
            height: "100%",
            padding: "100px",
          }}
          justifyContent="flex-start"
          alignItems="center"
          gap="20px"
        >
          {/* poster */}
          <Grid item xs={3} style={{ height: "100%", zIndex: "999" }}>
            <img
              src={`https://image.tmdb.org/t/p/original${filmDetails.poster_path}`}
              alt={filmDetails.original_title}
            />
          </Grid>

          {/* film details */}
          <Grid
            item
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            xs={8}
            style={{ height: "100%" }}
            gap="20px"
            position="relative"
            zIndex="999"
          >
            <Grid item>
              <Typography variant="h4" sx={{ color: "white" }}>
                {filmDetails.original_title} ({filmsDetailsYear})
              </Typography>
            </Grid>
            <Grid item>
              <Rating
                name="read-only"
                value={filmDetails.vote_average / 2}
                precision={0.1}
                readOnly
                sx={{
                  "& .css-1c99szj-MuiRating-icon ": {
                    color: "#faaf00",
                  },
                }}
              />
            </Grid>
            <Grid item container spacing={2}>
              {filmDetails.genres &&
                filmDetails.genres.map((genre) => (
                  <Grid item key={genre.id}>
                    <Chip
                      label={genre.name}
                      variant="outlined"
                      style={{ color: "white" }}
                    />
                  </Grid>
                ))}
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                textAlign="left"
                style={{ color: "white" }}
              >
                {filmDetails.overview}
              </Typography>
            </Grid>
            <TrailerButton filmID={filmID} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

// {
//     "adult": false,
//     "backdrop_path": "/4NWWpT0jiMUak8r6jfpvG4eBgFU.jpg",
//     "belongs_to_collection": {
//       "id": 131295,
//       "name": "Captain America Collection",
//       "poster_path": "/2tOgiY533JSFp7OrVlkeRJvsZpI.jpg",
//       "backdrop_path": "/ezEpSQhUQxVKdMx81zaSLsTHv7j.jpg"
//     },
//     "budget": 140000000,
//     "genres": [
//       {
//         "id": 28,
//         "name": "Action"
//       },
//       {
//         "id": 12,
//         "name": "Adventure"
//       },
//       {
//         "id": 878,
//         "name": "Science Fiction"
//       }
//     ],
//     "homepage": "https://www.marvel.com/movies/captain-america-the-first-avenger",
//     "id": 1771,
//     "imdb_id": "tt0458339",
//     "original_language": "en",
//     "original_title": "Captain America: The First Avenger",
//     "overview": "During World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull – Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination.",
//     "popularity": 38.45,
//     "poster_path": "/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
//     "production_companies": [
//       {
//         "id": 420,
//         "logo_path": "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
//         "name": "Marvel Studios",
//         "origin_country": "US"
//       }
//     ],
//     "production_countries": [
//       {
//         "iso_3166_1": "US",
//         "name": "United States of America"
//       }
//     ],
//     "release_date": "2011-07-22",
//     "revenue": 370569774,
//     "runtime": 124,
//     "spoken_languages": [
//       {
//         "english_name": "French",
//         "iso_639_1": "fr",
//         "name": "Français"
//       },
//       {
//         "english_name": "Norwegian",
//         "iso_639_1": "no",
//         "name": "Norsk"
//       },
//       {
//         "english_name": "English",
//         "iso_639_1": "en",
//         "name": "English"
//       }
//     ],
//     "status": "Released",
//     "tagline": "When patriots become heroes",
//     "title": "Captain America: The First Avenger",
//     "video": false,
//     "vote_average": 6.995,
//     "vote_count": 20297
//   }
