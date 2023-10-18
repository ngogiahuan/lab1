import React from "react";
import { Box, Container, Grid, Pagination, Typography } from "@mui/material";
import "./Films.css";
import FilmCard from "./FilmCard/FilmCard";
import { useFilmsData } from "../../api/tmdbAPI";
import Paging from "./Paging";
import CategorySelect from "./CategorySelect/CategorySelect";
import SearchBar from "./SearchBar/SearchBar";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function Films() {
  const theme = useContext(ThemeContext);
  const [page, setPage] = React.useState(1);
  const [category, setCategory] = React.useState("now_playing");
  const [searchQuery, setSearchQuery] = React.useState(null);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeSearchQuery = (value) => {
    setSearchQuery(value);
  };

  const { filmsData, totalPage } = useFilmsData(page, category, searchQuery);

  return (
    <div className="film-container">
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid
            item
            container
            spacing={2}
            justifyContent="flex-end"
            style={{ padding: "0px 44px" }}
            alignItems="center"
          >
            <Grid item>
<<<<<<< HEAD
              <Card
                sx={{ width: 200, height: 400 }}
                className="button-container-2"
                elevation={0}
              >
                <CardActionArea onClick={() => openPopUp(film)}>
                  <Link to={"/details/" + film.id}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={film.image}
                      alt={film.title}
                      lazy="true"
                    />
                  </Link>
                </CardActionArea>
                <CardContent
                  sx={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.color,
                    height: 100,
                  }}
                >
                  <Typography gutterBottom component="div">
                    {film.title}
                  </Typography>
                </CardContent>
              </Card>
=======
              <SearchBar handleChangeSearchQuery={handleChangeSearchQuery} />
>>>>>>> 694b544926cba916cf508ff0ceab4e2a00dfc28a
            </Grid>
            <Grid item>
              <CategorySelect
                category={category}
                handleChangeCategory={handleChangeCategory}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={2} justifyContent="center">
            {filmsData.length === 0 ? (
              <Box
                style={{
                  with: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "300px",
                }}
              >
                <Typography
                  variant="h4"
                  align="center"
                  style={{ color: theme.theme.color }}
                >
                  No result found
                </Typography>
              </Box>
            ) : (
              filmsData.map((film) => <FilmCard film={film} key={film.id} />)
            )}
          </Grid>
          <Grid item>
            <Paging
              totalPage={totalPage}
              page={page}
              handleChange={handleChangePage}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
