import React from "react";
import { Container, Grid, Pagination, Typography } from "@mui/material";
import "./Films.css";
import FilmCard from "./FilmCard/FilmCard";
import { useFilmsData } from "../../api/tmdbAPI";
import Paging from "./Paging";
import CategorySelect from "./CategorySelect/CategorySelect";

export default function Films() {
  const [page, setPage] = React.useState(1);
  const [category, setCategory] = React.useState("now_playing");
  const [searchQuery, setSearchQuery] = React.useState(null);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const { filmsData, totalPage } = useFilmsData(page, category);

  return (
    <div className="film-container">
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid
            item
            container
            spacing={2}
            justifyContent="flex-end"
            style={{ backgroundColor: "#000" }}
          >
            <Grid item>
              <CategorySelect
                category={category}
                handleChangeCategory={handleChangeCategory}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={2} justifyContent="center">
            {filmsData.map((film) => (
              <FilmCard film={film} key={film.id} />
            ))}
          </Grid>
          {/* <Grid item>
            <Paging
              totalPage={totalPage}
              page={page}
              handleChange={handleChangePage}
            />
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
}
