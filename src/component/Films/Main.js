import React from "react";
import Films from "./Films";
import FilmsSwiper from "../Swiper/FilmsSwiper";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";
import { Grid } from "@mui/material";
export default function Main() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.backgroundColor }}>
      <FilmsSwiper></FilmsSwiper>
      <Grid container justifyContent="center">
        <Grid item>
          <Films></Films>
        </Grid>
        <Grid item></Grid>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
}
