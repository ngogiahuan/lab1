import React from "react";
import { Box, Modal } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import Rating from '@mui/material/Rating';


export default function FilmModal({ film, open, handleClose }) {
  const theme = useContext(ThemeContext);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="film-modal-title"
      aria-describedby="film-modal-description"
    >
      <Box sx={{ ...style, backgroundColor: theme.theme.backgroundColor, color: theme.theme.color }}>
        <h2 id="film-modal-title">{film.title}</h2>
        <p id="film-modal-description">{film.description}</p>
        <Rating name="half-rating-read" defaultValue={film.rating / 2} precision={0.25} readOnly />
      </Box>
    </Modal>
  );
}


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: 4,
};