import { Button } from "@mui/material";
import React, { useState } from "react";
import { useFilmTrailer } from "../../../api/tmdbAPI";
import { Modal } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import MovieIcon from "@mui/icons-material/Movie";

export default function TrailerButton({ filmID }) {
  const { filmTrailer } = useFilmTrailer(filmID);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const baseTheme = createTheme({
    palette: {
      primary: {
        main: "#dc1a28",
      },
      secondary: {
        main: "#dc1a28",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <Button
          variant="contained"
          onClick={handleOpen}
          style={{ position: "absolute", bottom: "160px" }}
        >
          <MovieIcon sx={{ mr: 1 }} />
          Trailer
        </Button>
      </ThemeProvider>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${filmTrailer}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </>
  );
}
