import { Button } from "@mui/material";
import React, { useState } from "react";
import { useFilmTrailer } from "../../../api/tmdbAPI";
import { Modal, Backdrop, Fade } from "@mui/material";

export default function TrailerButton({ filmID }) {
  const { filmTrailer } = useFilmTrailer(filmID);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="contained"
        color="error"
        onClick={handleOpen}
        style={{ position: "absolute", bottom: "160px" }}
      >
        Trailer
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {filmTrailer && (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${filmTrailer}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </Modal>
    </>
  );
}
